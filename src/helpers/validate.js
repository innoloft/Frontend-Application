/* eslint-disable max-len */
const shortData = (data, length) => {
  try {
    if (data === null || data === undefined) return null;
    const trimmedData = data.substring(0, length);
    return `${trimmedData} ...`;
  } catch (error) {
    return error.toString();
  }
};
export { shortData };
