export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function formatDate(dateString) {
  const date = new Date(dateString);
  const monthName = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  const fourDigitYear = date.getFullYear();

  return `${monthName} ${dayOfMonth}, ${fourDigitYear}`;
}

export function formatDateWithoutDay(dateString) {
  const date = new Date(dateString);
  const monthName = months[date.getMonth()];
  const fourDigitYear = date.getFullYear();

  return `${monthName}, ${fourDigitYear}`;
}
