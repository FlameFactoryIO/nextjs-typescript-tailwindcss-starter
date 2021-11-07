export const isValidEmail = (email) => /(.+)@(.+){2,}\.(.+){2,}/.test(email);
export const urlValidator = (v) =>
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
    v,
  );
export const isArrayWithLength = (v) => {
  return Array.isArray(v) && v.length;
};
