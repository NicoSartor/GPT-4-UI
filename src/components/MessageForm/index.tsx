import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Box } from '@mui/material';

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

async function getCompletion(content: string) {
	console.log('OPENAI_API_KEY', OPENAI_API_KEY);
	const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${OPENAI_API_KEY}`,
		},
	};

	const payload = {
		model: 'gpt-4',
		messages: [
			{
				role: 'user',
				content,
			},
		],
		temperature: 0.7,
	};

	try {
		const response = await axios.post(
			'https://api.openai.com/v1/chat/completions',
			payload,
			config
		);
		console.log('[response1]', response);
		return response as any;
	} catch (error) {
		console.error(error);
	}
}

interface MessageFormProps {
	onSubmit: (message: string) => void;
	prefix: string;
	suffix: string;
}

const MessageForm: React.FC<MessageFormProps> = ({
	onSubmit,
	prefix,
	suffix,
}) => {
	const [message, setMessage] = useState('');

	useEffect(() => {
		setMessage(message);
	}, [message]);

	const callOpenAIApi = async (message: string) => {
		const response = await getCompletion(message);
		return response.data.choices[0].message.content;
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		if (message.trim() !== '') {
			const fullMessage = `${prefix}${message}${suffix}`;
			const response = await callOpenAIApi(fullMessage);
			console.log('[response2]', response);
			onSubmit(response);
			setMessage('');
		}
	};

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(event.target.value);
	};

	return (
		<Box component='form' onSubmit={handleSubmit} sx={{ width: '100%' }}>
			<TextField
				id='message'
				label='Your message'
				value={message}
				onChange={handleChange}
				multiline
				rows={4}
				fullWidth
				variant='outlined'
				sx={{ mb: 2 }}
			/>
			<Button type='submit' variant='contained'>
				Send
			</Button>
		</Box>
	);
};

export default MessageForm;
