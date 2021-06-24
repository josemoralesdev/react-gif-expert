import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e) => {
		const { value } = e.target;
		setInputValue(value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim().length > 0) {
			setCategories(categories => [inputValue, ...categories]);
			setInputValue("");
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Add Category</h2>
			<input
				type="text"
				value={inputValue}
				onChange={handleInputChange}
			/>
		</form>
	)
}

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
}
