"use client";
import { useScreenSize } from "@/hooks/useScreenSize";
import { useEffect, useRef, useState } from "react";
import styles from "./picture.module.css";

export default function Picture({
  image,
  ISO,
  ouverture,
  objectif,
  vitesse,
}: {
  image: string;
  ISO: string;
  ouverture: string;
  objectif: string;
  vitesse: string;
}) {
  const { height } = useScreenSize();
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgWidth, setImgWidth] = useState<string>("100%");
  const [imgHeight, setImgHeight] = useState<string | undefined>(undefined);
  const textSize =
    parseInt(imgWidth) > 500 || imgWidth === "100%" ? undefined : "1rem";

  const handleImageWidth = (height: number, width: number) => {
    if (height > 1000 && height > width - 50) {
      setImgWidth(1000 * (width / height) + "px");
    } else if (height >= width) {
      setImgWidth(width + "px");
    } else if (width < 700) {
      setImgWidth(width + "px");
    }
  };

  const handleImageLoad = () => {
    if (imgRef.current) {
      if (
        height !== 0 &&
        imgHeight &&
        imgRef.current.naturalHeight >= height * 0.95
      ) {
        const newHeight = height * 0.9;
        setImgHeight(newHeight + "px");
        handleImageWidth(
          newHeight,
          (imgRef.current.naturalWidth / imgRef.current.naturalHeight) *
            newHeight
        );
      } else {
        handleImageWidth(
          imgRef.current.naturalHeight,
          imgRef.current.naturalWidth
        );
      }
    }
  };

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      handleImageLoad();
    }
  }, [image, height]);

  return (
    <div>
      <div
        className="relative object-cover w-auto h-auto max-w-full max-h-full mt-10 mx-auto group"
        style={{ width: imgWidth }}
      >
        <img
          ref={imgRef}
          src={image}
          onLoad={handleImageLoad}
          className="w-auto h-auto max-h-[1000px] mx-auto"
          style={imgHeight ? { height: imgHeight } : undefined}
          alt={"Photo"}
        />
        <div className={styles.SpecsPic + " group-hover:opacity-100"}>
          <div className="absolute w-full flex flex-row justify-center bottom-0 mx-auto ">
            <p
              style={
                textSize && {
                  fontSize: textSize,
                }
              }
            >
              ISO : {ISO}{" "}
            </p>
            <p
              style={
                textSize && {
                  fontSize: textSize,
                }
              }
            >
              Objectif : {objectif + " mm"}{" "}
            </p>
            <p
              style={
                textSize && {
                  fontSize: textSize,
                }
              }
            >
              Ouverture : {"F/" + ouverture}{" "}
            </p>
            <p
              style={
                textSize && {
                  fontSize: textSize,
                }
              }
            >
              Vitesse : {vitesse + "s"}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
