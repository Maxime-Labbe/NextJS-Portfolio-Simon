"use client";
import { useScreenSize } from "@/hooks/useScreenSize";
import { useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    console.log(imgWidth, imgRef.current?.src);
  }, [imgWidth]);

  return (
    <div>
      <div className="picture" style={{ width: imgWidth }}>
        <img
          ref={imgRef}
          src={image}
          onLoad={handleImageLoad}
          style={imgHeight ? { height: imgHeight } : undefined}
          alt={"Photo"}
        />
        <div className="SpecsPic">
          <div className="SpecsText">
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
