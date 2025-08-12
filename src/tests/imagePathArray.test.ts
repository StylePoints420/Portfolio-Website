import { imagePathArray } from "@/utils/imagePathArray";
import { test, expect } from "vitest";

test("return the correct image path array based on the given params", () => {
  expect(imagePathArray("pcu", ".jpg", 2)).toStrictEqual([
    "/images/pcu1.jpg",
    "/images/pcu2.jpg",
    "/images/pcu3.png",
  ]);

  expect(imagePathArray("ncst", ".png", 1)).toStrictEqual([
    "/images/ncst1.png",
    "/images/ncst2.jpg",
    "/images/ncst3.png",
  ]);

  expect(imagePathArray("olrms", ".jpg")).toStrictEqual([
    "/images/olrms1.jpg",
    "/images/olrms2.jpg",
    "/images/olrms3.jpg",
  ]);
});
