const checkImageURL = (
  url: string | undefined,
  allowedFormats: string[] = ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'svg', 'ico']
) => {
  if (!url) {
    return false;
  }

  // const formatRegExp = new RegExp(`^.+\\.(${allowedFormats.join('|')})$`, 'i');

  // if (!formatRegExp.test(url)) {
  //   return false;
  // }

  if (!/^https?:\/\//i.test(url)) {
    return false;
  }

  return true;
};

export { checkImageURL };
