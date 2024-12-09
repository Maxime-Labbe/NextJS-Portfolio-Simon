import MainPicture from "@/components/MainPicture";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div>
      <h1 className="title">Travail de maturité de Simon Berchtold</h1>
      <div className="flex flex-column justify-between w-[85%] mx-auto mt-10">
        <div className="w-[70%] relative">
          <a href="/serie_1"><MainPicture image="/1-1.jpg" name="Série 1 : Eau"/></a>
          <a href="/serie_2"><MainPicture image="/2-3.jpg" name="Série 2 : Étincelle"/></a>
          <a href="/serie_3"><MainPicture image="/3-1.jpg" name="Série 3 : Ombre"/></a>
          <a href="/serie_4"><MainPicture image="/4-3.jpg" name="Série 4 : Spectre"/></a>
          <a href="/serie_5"><MainPicture image="/5-5.jpg" name="Série 5 : Photos non-filées vs filées"/></a>
          <a href="/serie_6"><MainPicture image="/6-1.jpg" name="Série 6 : Cadrage"/></a>
          <a href="/serie_7"><MainPicture image="/7-2.jpg" name="Série 7 : Photos filées"/></a>
          <a href="/serie_8"><MainPicture image="/8-5.jpg" name="Série 8 : Photos abstraites"/></a>
          <a href="/serie_9"><MainPicture image="/9-3.jpg" name="Série 9 : Célébration"/></a>
        </div>
        <Menu/>
      </div>
    </div>
  );
}
