import Menu from "@/components/Menu";
import Picture from "@/components/Picture";

export default function Serie1() {
    return (
        <div className="flex flex-column justify-between w-[85%] mx-auto mt-24 mb-16">
            <div className="w-[70%] relative text-center">
                <h1 className="serieTitle">Série 9 : Célébration</h1>
                <Picture image="/9-1.jpg" ISO="250" objectif="180" ouverture="3.2" vitesse="1/2000"/>
                <Picture image="/9-2.jpg" ISO="250" objectif="180" ouverture="2.8" vitesse="1/800"/>
                <Picture image="/9-3.jpg" ISO="250" objectif="180" ouverture="3.2" vitesse="1/2000"/>
                <Picture image="/9-4.jpg" ISO="2500" objectif="180" ouverture="4.5" vitesse="1/8000"/>
                <Picture image="/9-5.jpg" ISO="250" objectif="180" ouverture="3.2" vitesse="1/2000"/>
                <Picture image="/9-6.jpg" ISO="250" objectif="180" ouverture="3.2" vitesse="1/2000"/>
            </div>
            <Menu />
        </div>
    );
};