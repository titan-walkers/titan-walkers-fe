export const truncateString = (originalText: string, maxLength: number) => {
  const text = originalText.trim();
  if (text === "") return "";
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
};
