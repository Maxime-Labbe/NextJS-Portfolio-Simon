"use client";
import Menu from "@/components/Menu";
import Picture from "@/components/Picture";
import { useParams } from "next/navigation";
import picturesData from "@/data/pictures.json";
import { useScreenSize } from "@/hooks/useScreenSize";
import PhoneMenu from "@/components/Menu/PhoneMenu";
import styles from "./serie.module.css";

export default function Serie() {
  const { id }: { id: string } = useParams();
  const { width } = useScreenSize();
  const serieData = picturesData[id as keyof typeof picturesData];
  const pictures = "pictures" in serieData ? serieData.pictures : [];
  const title = "title" in serieData ? serieData.title : "";

  return (
    <div className="flex flex-column justify-between md:w-[85%] w-[90%] mx-auto md:mt-24 mt-5 mb-16">
      <div className="md:w-[70%] w-full relative text-center">
        <h1 className={styles.serieTitle}>
          Série {id} : {title}
        </h1>
        <>
          {pictures.map((picture, index) => (
            <Picture key={index} {...picture} />
          ))}
        </>
      </div>
      {width >= 768 && <Menu />}
      {width < 768 && <PhoneMenu />}
    </div>
  );
}
