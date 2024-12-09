import Menu from "@/components/Menu";
import Picture from "@/components/Picture";

export default function Serie1() {
    return (
        <div className="flex flex-column justify-between w-[85%] mx-auto mt-24 mb-16">
            <div className="w-[70%] relative text-center">
                <h1 className="serieTitle">Série 8 : Photos abstraites</h1>
                <Picture image="/8-1.jpg" ISO="100" objectif="180" ouverture="22" vitesse="1/15"/>
                <Picture image="/8-2.jpg" ISO="100" objectif="180" ouverture="22" vitesse="1/15"/>
                <Picture image="/8-3.jpg" ISO="100" objectif="180" ouverture="22" vitesse="1/15"/>
                <Picture image="/8-4.jpg" ISO="100" objectif="70" ouverture="20" vitesse="1/8"/>
                <Picture image="/8-5.jpg" ISO="100" objectif="124" ouverture="11" vitesse="1/100"/>
                <Picture image="/8-6.jpg" ISO="6400" objectif="70" ouverture="2.8" vitesse="1/8000"/>
                <Picture image="/8-7.jpg" ISO="6400" objectif="180" ouverture="2.8" vitesse="1/8000"/>
                <Picture image="/8-8.jpg" ISO="250" objectif="180" ouverture="8.0" vitesse="1/60"/>
                <Picture image="/8-9.jpg" ISO="4000" objectif="70" ouverture="2.8" vitesse="1/8000"/>
                <Picture image="/8-10.jpg" ISO="500" objectif="180" ouverture="3.2" vitesse="1/8000"/>
                <Picture image="/8-11.jpg" ISO="6400" objectif="70" ouverture="2.8" vitesse="1/8000"/>
            </div>
            <Menu />
        </div>
    );
};