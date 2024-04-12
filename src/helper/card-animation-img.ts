export const getCardImages = (imgList, startIndex) => {
  const imgListSize = imgList.length; //Original length of image list.
  const loopMaxSize = imgListSize * 2;
  const maxArr = 4;
  let newImgArr = [];

  for (let ctr = 0; ctr <= loopMaxSize; ctr++) {
    if (ctr >= startIndex && newImgArr.length <= maxArr) {
      let imageIndex = ctr;
      if (imageIndex >= imgListSize - 1) {
        imageIndex = imageIndex - (imgListSize - 1);
      }

      newImgArr.push(imgList[imageIndex]);
    } else if (newImgArr.length === maxArr) {
      break;
    }
  }

  return {
    startIndex: startIndex > imgListSize - 1 ? 0 : startIndex + 1,
    imgs: newImgArr,
  };
};
