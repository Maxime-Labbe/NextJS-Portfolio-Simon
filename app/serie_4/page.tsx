import Menu from "@/components/Menu";
import Picture from "@/components/Picture";

export default function Serie1() {
    return (
        <div className="flex flex-column justify-between w-[85%] mx-auto mt-24 mb-16">
            <div className="w-[70%] relative text-center">
                <h1 className="serieTitle">Série 4 : Spectre</h1>
                <Picture image="/4-1.jpg" ISO="100" objectif="180" ouverture="22" vitesse="1/4"/>
                <Picture image="/4-2.jpg" ISO="100" objectif="180" ouverture="22" vitesse="1/8"/>
                <Picture image="/4-3.jpg" ISO="100" objectif="180" ouverture="22" vitesse="1/10"/>
                <Picture image="/4-4.jpg" ISO="100" objectif="180" ouverture="22" vitesse="1/8"/>
                <Picture image="/4-5.jpg" ISO="100" objectif="180" ouverture="22" vitesse="1/8"/>
                <Picture image="/4-6.jpg" ISO="100" objectif="180" ouverture="22" vitesse="1/10"/>
                <Picture image="/4-7.jpg" ISO="100" objectif="180" ouverture="22" vitesse="1/10"/>
            </div>
            <Menu />
        </div>
    );
};