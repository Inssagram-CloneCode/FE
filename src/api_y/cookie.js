export function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    ...options
  };

  if (options.expires instanceof Date) {
    console.log('convert to string');
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  document.cookie = updatedCookie;
}
export function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}
export function getCookie(name) {
  const rareCookie = document.cookie.split('=')[1];
  return rareCookie;

  // let matches = document.cookie.match(new RegExp(
  //   "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  // ));
  // console.log(matches)
  // return matches ? decodeURIComponent(matches[1]) : undefined;
}