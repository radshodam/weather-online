export function getDayOfWeekFromDate(dateString) {
  const dateObject = new Date(dateString);

  const dayOfWeek = dateObject.toLocaleDateString("en-US", { weekday: "long" });

  return dayOfWeek;
}

export function getDayFromDate(dateString) {
  // Covert formatted to date
  const dateObject = new Date(dateString);

  // Get Dat
  const day = dateObject.getDate();

  return day;
}
