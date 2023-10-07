export const getLength = (text, wpm = 225) => {
	const words = text.split(/\s+/).length;
	const time = Math.ceil(words / wpm);
	return time;
};
