const IDFromURL = (url: string) => {
  const test = url.match(new RegExp('/pokemon/' + '(.*)' + '/')) || undefined;
  let num = test ? test[1] : undefined;

  if (num) while (num.length < 4) num = '0' + num;

  return num;
};

export default IDFromURL;
