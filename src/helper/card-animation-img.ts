export const getCardImages = (imgList, startIndex) => {
  const ARRAY_SIZE = imgList.length - 1;
  const MAX_LOOP_SIZE = ARRAY_SIZE * 2;
  const MAX_IMAGES_SIZE = 4;
  const newImgArr = [];

  const shouldAddImg = (index) =>
    index >= startIndex && newImgArr.length <= MAX_IMAGES_SIZE;
  const adjustIndex = (index) =>
    index > ARRAY_SIZE ? index - (ARRAY_SIZE + 1) : index;

  for (let ctr = 0; ctr <= MAX_LOOP_SIZE; ctr++) {
    if (shouldAddImg(ctr)) {
      const index = adjustIndex(ctr);
      newImgArr.push(imgList[index]);
    } else if (newImgArr.length === MAX_IMAGES_SIZE) {
      break;
    }
  }

  return {
    nextIndex: startIndex === ARRAY_SIZE ? 0 : startIndex + 1,
    imgs: newImgArr,
  };
};
