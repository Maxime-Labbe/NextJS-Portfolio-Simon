"use client";
import MainPicture from "@/components/MainPicture";
import Menu from "@/components/Menu";
import PhoneMenu from "@/components/Menu/PhoneMenu";
import { useScreenSize } from "@/hooks/useScreenSize";
import styles from "./home.module.css";
import { useEffect } from "react";

export default function Home() {
  const { width } = useScreenSize();

  useEffect(() => {
    console.log(
      "%cMade by Maxime Labbe !",
      "color: black; font-family: Pacifico; font-size: 2rem; padding: 10px; background-color: white; border: 5px black solid; border-radius: 25px"
    );
    console.log(
      "%cGitHub: https://github.com/Maxime-Labbe",
      "color: black; font-family: Pacifico; font-size: 1.5rem; padding: 15px; background-color: white; border: 5px black solid; border-radius: 25px"
    );
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Travail de maturité de Simon Berchtold</h1>
      <div className="flex flex-col justify-between w-[85%] mx-auto mt-10">
        <div className="md:w-[70%] w-full relative">
          <MainPicture image="/1-1.jpg" name="Série 1 : Eau" id="1" />
          <MainPicture image="/2-3.jpg" name="Série 2 : Étincelle" id="2" />
          <MainPicture image="/3-1.jpg" name="Série 3 : Ombre" id="3" />
          <MainPicture image="/4-3.jpg" name="Série 4 : Spectre" id="4" />
          <MainPicture
            image="/5-5.jpg"
            name="Série 5 : Photos non-filées vs filées"
            id="5"
          />
          <MainPicture image="/6-1.jpg" name="Série 6 : Cadrage" id="6" />
          <MainPicture image="/7-2.jpg" name="Série 7 : Photos filées" id="7" />
          <MainPicture
            image="/8-5.jpg"
            name="Série 8 : Photos abstraites"
            id="8"
          />
          <MainPicture image="/9-3.jpg" name="Série 9 : Célébration" id="9" />
        </div>
        {width && width >= 768 ? <Menu /> : null}
      </div>
      {width && width < 768 ? <PhoneMenu /> : null}
    </div>
  );
}
