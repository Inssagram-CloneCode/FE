// 쿠키에 저장할 때
// export const setCookie = (name, value, exp = 5) => {
export const setCookie = (name, value, exp) => {
  let date = new Date();
  date.setTime(exp);
  // date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
  // return cookies.set(name, value, { ...option });
};

// 쿠키에 저장한 거 쓸 때
export const getCookie = (name) => {
  return document.cookie.get(name);
};

// 쿠키 지울 때
export const deleteCookie = (name) => {
  // let date = new Date('2020-01-01').toUTCString();
  // document.cookie = name + '=; expires=' + date;
  setCookie(name, '', -1);
};
