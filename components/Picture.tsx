'use client'
import { use, useEffect, useRef, useState } from 'react';

export default function Picture({ image, ISO, ouverture, objectif, vitesse} : { image: string, ISO: string, ouverture: string, objectif: string, vitesse: string }) {
    const imgRef = useRef<HTMLImageElement>(null);
    const [imgWidth, setImgWidth] = useState<string>("100%");
    const [fontSize, setFontSize] = useState<string>("1.5rem");

    const handleImageLoad = () => {
        if (imgRef.current) {
            if (imgRef.current.naturalHeight > 1000 && imgRef.current.naturalHeight > imgRef.current.naturalWidth - 50) {
                setImgWidth(1000 * (imgRef.current.naturalWidth / imgRef.current.naturalHeight) + "px");
            } else if (imgRef.current.naturalHeight >= imgRef.current.naturalWidth) {
                setImgWidth(imgRef.current.naturalWidth + "px");
            } else if (imgRef.current.naturalWidth < 700) {
                setImgWidth(imgRef.current.naturalWidth + "px");
                setFontSize("1.0rem");
            }
        }
    };

    useEffect(() => {
        if (imgRef.current && imgRef.current.complete) {
            handleImageLoad();
        }
        if (parseInt(imgWidth) < 400 && imgWidth !== "100%") {
            setFontSize("1.0rem");
        }
    }, [image]);

    return (
        <div>
            <div className="picture" style={{ width: imgWidth }}>
                <img ref={imgRef} src={image} onLoad={handleImageLoad}/>
                <div className="SpecsPic">
                    <div className="SpecsText">
                        <p style={{ fontSize : parseInt(imgWidth) > 500 || imgWidth === "100%" ? "1.5rem" : "1.2rem"}}>ISO : {ISO} </p>
                        <p style={{ fontSize : parseInt(imgWidth) > 500 || imgWidth === "100%" ? "1.5rem" : "1.2rem"}}>Objectif : {objectif + " mm"} </p>
                        <p style={{ fontSize : parseInt(imgWidth) > 500 || imgWidth === "100%" ? "1.5rem" : "1.2rem"}}>Ouverture : {"F/" + ouverture} </p>
                        <p style={{ fontSize : parseInt(imgWidth) > 500 || imgWidth === "100%" ? "1.5rem" : "1.2rem"}}>Vitesse : {vitesse + "s"} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};