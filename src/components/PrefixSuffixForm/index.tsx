import React, { useState } from 'react';

interface PrefixSuffixFormProps {
	onPrefixSuffixChange: (type: 'prefix' | 'suffix', value: string) => void;
}

const PrefixSuffixForm: React.FC<PrefixSuffixFormProps> = ({
	onPrefixSuffixChange,
}) => {
	const [prefix, setPrefix] = useState('');
	const [suffix, setSuffix] = useState('');

	const handlePrefixChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const value = event.target.value;
		setPrefix(value);
		onPrefixSuffixChange('prefix', value);
	};

	const handleSuffixChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const value = event.target.value;
		setSuffix(value);
		onPrefixSuffixChange('suffix', value);
	};

	return (
		<div>
			<h2>Prefix and Suffix Management</h2>
			<div>
				<label htmlFor='prefix'>Prefix:</label>
				<textarea
					id='prefix'
					value={prefix}
					onChange={handlePrefixChange}
					placeholder='Enter prefix text here'
				/>
			</div>
			<div>
				<label htmlFor='suffix'>Suffix:</label>
				<textarea
					id='suffix'
					value={suffix}
					onChange={handleSuffixChange}
					placeholder='Enter suffix text here'
				/>
			</div>
		</div>
	);
};

export default PrefixSuffixForm;
