const isValidURL = (url: string) => {
  const trimmedUrl = url.trim();
  const validTlds = ['com', 'ru', 'net'];
  const urlRegExp = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,})(\/[^\s]*)?$/;

  if (!urlRegExp.test(trimmedUrl)) return false;

  const matchedUrl = trimmedUrl.match(/([a-zA-Z0-9-]+\.[a-zA-Z]{2,})/);
  const domain = matchedUrl ? matchedUrl[0].split('.') : [];
  const tld = domain[domain.length - 1];

  return validTlds.includes(tld);
};

export default isValidURL;
