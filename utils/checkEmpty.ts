// Function that checks for empty or undefined strings
export const checkEmpty = (value: string) =>
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0);

export default checkEmpty;
