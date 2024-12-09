import Menu from "@/components/Menu";
import Picture from "@/components/Picture";

export default function Serie1() {
    return (
        <div className="flex flex-column justify-between w-[85%] mx-auto mt-24 mb-16">
            <div className="w-[70%] relative text-center">
                <h1 className="serieTitle">Série 1 : Eau</h1>
                <Picture image="/1-1.jpg" ISO="6400" objectif="180" ouverture="6.5" vitesse="1/8000"/>
                <Picture image="/1-2.jpg" ISO="6400" objectif="144" ouverture="5.6" vitesse="1/8000"/>
                <Picture image="/1-3.jpg" ISO="250" objectif="180" ouverture="3.2" vitesse="1/2000"/>
                <Picture image="/1-4.jpg" ISO="2500" objectif="111" ouverture="2.8" vitesse="1/8000"/>
                <Picture image="/1-5.jpg" ISO="1600" objectif="76" ouverture="2.8" vitesse="1/8000"/>
                <Picture image="/1-6.jpg" ISO="2500" objectif="111" ouverture="2.8" vitesse="1/8000"/>
                <Picture image="/1-7.jpg" ISO="1600" objectif="180" ouverture="2.8" vitesse="1/8000"/>
                <Picture image="/1-8.jpg" ISO="1600" objectif="180" ouverture="2.8" vitesse="1/8000"/>
                <Picture image="/1-9.jpg" ISO="160" objectif="70" ouverture="6.3" vitesse="1/160"/>
            </div>
            <Menu />
        </div>
    );
};