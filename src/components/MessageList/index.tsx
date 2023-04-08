import React from 'react';
import { Message } from '../Message';

interface MessageListProps {
	messages: string[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
	return (
		<div>
			<h2>Messages</h2>
			{messages.map((message, index) => (
				<Message key={index} message={message} />
			))}
		</div>
	);
};

export default MessageList;
