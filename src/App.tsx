import React, { useState } from 'react';
import './App.css';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';
import PrefixSuffixForm from './components/PrefixSuffixForm';

function App() {
	const [messages, setMessages] = useState<string[]>([]);
	const [prefix, setPrefix] = useState('');
	const [suffix, setSuffix] = useState('');

	const handleMessageSubmit = (message: string) => {
		setMessages((prevMessages) => [...prevMessages, message]);
	};

	const handlePrefixSuffixChange = (
		type: 'prefix' | 'suffix',
		value: string
	) => {
		if (type === 'prefix') {
			setPrefix(value);
		} else {
			setSuffix(value);
		}
	};

	return (
		<div className='App'>
			<h1>GPT-4 Interface</h1>
			<MessageForm
				onSubmit={handleMessageSubmit}
				prefix={prefix}
				suffix={suffix}
			/>
			<MessageList messages={messages} />
			<PrefixSuffixForm onPrefixSuffixChange={handlePrefixSuffixChange} />
		</div>
	);
}

export default App;
