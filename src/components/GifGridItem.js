import React from 'react'

export const GifGridItem = ({ id, title, url }) => {

	const copyToClipboard = () => {
		let textToCopy = url;
		// navigator clipboard api needs a secure context (https)
		if (navigator.clipboard && window.isSecureContext) {
			// navigator clipboard api method'
			return navigator.clipboard.writeText(textToCopy);
		} else {
			// text area method
			let textArea = document.createElement("textarea");
			textArea.value = textToCopy;
			// make the textarea out of viewport
			textArea.style.position = "fixed";
			textArea.style.left = "-999999px";
			textArea.style.top = "-999999px";
			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();
			return new Promise((res, rej) => {
				// here the magic happens
				document.execCommand('copy') ? res() : rej();
				textArea.remove();
			});
		}
	}

	return (
		<div onClick={copyToClipboard} className="card animate__animated animate__fadeIn">
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	)
}
