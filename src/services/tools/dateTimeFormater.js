// date format (dd/mm/yyy)
export const dmyFormat = (date) => {
  return `${date.getDate().toString().length === 1 ? "0" + date.getDate() : date.getDate()}/${date.getMonth().toString().length === 1 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}/${date.getFullYear().toString().length === 1 ? "0" + date.getFullYear() : date.getFullYear()}`;
};

// time format (hh:mm)
export const hmFormat = (time) => {
    return `${time.getHours().toString().length === 1 ? "0" + time.getHours() : time.getHours()}:${time.getMinutes().toString().length === 1 ? "0" + time.getMinutes() : time.getMinutes()}`
}
