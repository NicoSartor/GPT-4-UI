import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';

interface MessageProps {
	message: string;
}

export const Message: React.FC<MessageProps> = ({ message }) => {
	const handleCopy = () => {
		navigator.clipboard.writeText(message);
	};

	return (
		<Box>
			<Typography>{message}</Typography>
			<CodeMirror value={message} theme='dark' readOnly={true} />
			<Button onClick={handleCopy}>Copy</Button>
		</Box>
	);
};
