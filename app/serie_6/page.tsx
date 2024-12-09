import Menu from "@/components/Menu";
import Picture from "@/components/Picture";

export default function Serie1() {
    return (
        <div className="flex flex-column justify-between w-[85%] mx-auto mt-24 mb-16">
            <div className="w-[70%] relative text-center">
                <h1 className="serieTitle">Série 6 : Cadrage</h1>
                <Picture image="/6-1.jpg" ISO="320" objectif="161" ouverture="3.2" vitesse="1/8000"/>
                <Picture image="/6-2.jpg" ISO="640" objectif="130" ouverture="8.0" vitesse="1/125"/>
                <Picture image="/6-3.jpg" ISO="2000" objectif="103" ouverture="2.8" vitesse="1/8000"/>
                <Picture image="/6-4.jpg" ISO="250" objectif="180" ouverture="11" vitesse="1/200"/>
                <Picture image="/6-5.jpg" ISO="400" objectif="161" ouverture="3.2" vitesse="1/8000"/>
                <Picture image="/6-6.jpg" ISO="250" objectif="180" ouverture="11" vitesse="1/200"/>
                <Picture image="/6-7.jpg" ISO="400" objectif="180" ouverture="3.2" vitesse="1/8000"/>
            </div>
            <Menu />
        </div>
    );
};