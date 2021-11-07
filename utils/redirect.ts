const redirect = (res, url) => {
  res.setHeader('location', url);
  res.statusCode = 302;
  res.end();
};

export default redirect;
