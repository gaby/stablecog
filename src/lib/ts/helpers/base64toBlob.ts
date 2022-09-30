export const base64toBlob = (b64Data: string, sliceSize = 512) => {
	const contentType = b64Data.match(/data:([^;]+)/)?.[1] || '';
	const b64Formatted = b64Data.replace(/^data:image\/(png|jpg);base64,/, '');
	const byteCharacters = window.atob(b64Formatted);
	const byteArrays = [];

	for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
		const slice = byteCharacters.slice(offset, offset + sliceSize);

		const byteNumbers = new Array(slice.length);
		for (let i = 0; i < slice.length; i++) {
			byteNumbers[i] = slice.charCodeAt(i);
		}

		const byteArray = new Uint8Array(byteNumbers);
		byteArrays.push(byteArray);
	}

	const blob = new Blob(byteArrays, { type: contentType });
	return blob;
};
