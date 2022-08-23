//
export const setLocal = (key,value) => {
  localStorage.setItem(key, JSON.stringify(value));
}
export const getLocal = (key) => {
  const local_refresh = localStorage.getItem(key);
  return JSON.parse(local_refresh)[key];
}
export const clearLocal = (key) => {
  localStorage.removeItem(key)
}