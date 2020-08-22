export const today = new Date();
export const tomorrow = new Date(
  new Date(today).setHours(new Date(today).getHours() + 24)
);

/* Format timestamp to dd.mm.yyyy string */
export const formatDate = (date: Date | null): string | null => {
  if (date) {
    const dd = String(date.getDate()).padStart(2, "0") || null;
    const mm = String(date.getMonth() + 1).padStart(2, "0") || null; // January is 0!
    const yyyy = date.getFullYear() || null;

    if (dd && mm && yyyy) {
      return `${dd}.${mm}.${yyyy}`;
    }
    return null;
  }
  return null;
};

/* Format timestamp to dd.mm.yyyy string */
export const formatDateToServer = (date: Date | null): string | null => {
  if (date) {
    const dd = String(date.getDate()).padStart(2, "0") || null;
    const mm = String(date.getMonth() + 1).padStart(2, "0") || null; // January is 0!
    const yyyy = date.getFullYear() || null;

    if (dd && mm && yyyy) {
      return `${yyyy}-${mm}-${dd}`;
    }
    return null;
  }
  return null;
};

/* Get timestamp from dd.mm.yyyy string */
export const getTimestampFromFormattedDate = (date: string | null) => {
  if (date) {
    const checkSymbols = date.match(/_/g);
    const splittedDate = date ? date.split(".") : null;
    if (
      splittedDate &&
      splittedDate[2] &&
      splittedDate[1] &&
      splittedDate[0] &&
      checkSymbols === null
    ) {
      return splittedDate
        ? new Date(
            Number(splittedDate[2]),
            Number(splittedDate[1]) - 1,
            Number(splittedDate[0])
          )
        : null;
    }
    return null;
  }
  return null;
};

/* Get user age from timestamp */
export const birthDateToAge = (date: Date): number => {
  const today = new Date();
  const birthday = new Date(date);
  const todayD =
    (today.getFullYear() * 12 + today.getMonth()) * 31 + today.getDate() - 1;
  const birthdayD =
    (birthday.getFullYear() * 12 + birthday.getMonth()) * 31 +
    birthday.getDate() -
    1;
  return (todayD - birthdayD) / 31 / 12;
};
