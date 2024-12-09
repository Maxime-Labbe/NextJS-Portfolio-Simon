import Menu from "@/components/Menu";
import Picture from "@/components/Picture";

export default function Serie1() {
    return (
        <div className="flex flex-column justify-between w-[85%] mx-auto mt-24 mb-16">
            <div className="w-[70%] relative text-center">
                <h1 className="serieTitle">Série 2 : Étincelle</h1>
                <Picture image="/2-1.jpg" ISO="3200" objectif="180" ouverture="2.8" vitesse="1/8000"/>
                <Picture image="/2-2.jpg" ISO="3200" objectif="180" ouverture="2.8" vitesse="1/8000"/>
                <Picture image="/2-3.jpg" ISO="3200" objectif="180" ouverture="2.8" vitesse="1/8000"/>
                <Picture image="/2-4.jpg" ISO="3200" objectif="180" ouverture="2.8" vitesse="1/8000"/>
                <Picture image="/2-5.jpg" ISO="250" objectif="180" ouverture="2.8" vitesse="1/8000"/>
            </div>
            <Menu />
        </div>
    );
};