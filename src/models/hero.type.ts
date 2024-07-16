import { ReactNode } from "react";

export type HeroHighLightProps = {
  highlightImgSrc: string;
  imageWidth: number;
  imageHeight: number;
  eventMainGraphicSrc: string;
  eventMainGraphicWidth: number;
  eventMainGraphicHeight: number;
  children?: ReactNode;
};
