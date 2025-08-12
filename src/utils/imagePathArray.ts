/**
 *
 * @param schoolName - image name inside /src/assets/images/
 * @param extension - image format - only .jpg and .png is needed
 * @param indexToChangeExtension - provide the array index to change the extension
 * @returns {string[]}  array of image path to be used in image src
 * @example
 * const arr = imagePathArray('pcu', '.jpg', 2);
 * //console.log(arr)
 * // last index extension changed due to provided index in last param
 *  ['/images/pcu1.jpg', "/images/pcu2.jpg", "/images/pcu3.png"]
 */

export function imagePathArray(
  schoolName: "olrms" | "pcu" | "ncst",
  extension: ".jpg" | ".png",
  indexToChangeExtension?: number
): string[] {
  const imgPath = "/images/";
  // return an empty array if higher than 3 since length
  // if (indexToChangeExtension && indexToChangeExtension > 3) {
  //   return [];
  // }

  const imgSrcArray = Array.from({ length: 3 }).map((_, index) => {
    const changeExtension = indexToChangeExtension === index;

    const finalExtension = changeExtension
      ? extension === ".jpg"
        ? ".png"
        : ".jpg"
      : extension;

    const imageSrc = `${imgPath}${schoolName}${index + 1}${finalExtension}`;

    return imageSrc;
  });

  return imgSrcArray;
}
