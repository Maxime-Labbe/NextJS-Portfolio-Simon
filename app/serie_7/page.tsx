import Menu from "@/components/Menu";
import Picture from "@/components/Picture";

export default function Serie1() {
    return (
        <div className="flex flex-column justify-between w-[85%] mx-auto mt-24 mb-16">
            <div className="w-[70%] relative text-center">
                <h1 className="serieTitle">Série 7 : Photos filées</h1>
                <Picture image="/7-1.jpg" ISO="640" objectif="70" ouverture="6.3" vitesse="1/250"/>
                <Picture image="/7-2.jpg" ISO="125" objectif="87" ouverture="11" vitesse="1/60"/>
                <Picture image="/7-3.jpg" ISO="400" objectif="180" ouverture="5.6" vitesse="1/100"/>
                <Picture image="/7-4.jpg" ISO="250" objectif="137" ouverture="11" vitesse="1/200"/>
                <Picture image="/7-5.jpg" ISO="100" objectif="73" ouverture="10" vitesse="1/100"/>
                <Picture image="/7-6.jpg" ISO="320" objectif="180" ouverture="18" vitesse="1/125"/>
                <Picture image="/7-7.jpg" ISO="100" objectif="180" ouverture="16" vitesse="1/25"/>
                <Picture image="/7-8.jpg" ISO="100" objectif="79" ouverture="11" vitesse="1/60"/>
                <Picture image="/7-9.jpg" ISO="100" objectif="76" ouverture="11" vitesse="1/60"/>
                <Picture image="/7-10.jpg" ISO="160" objectif="97" ouverture="6.3" vitesse="1/160"/>
                <Picture image="/7-11.jpg" ISO="400" objectif="180" ouverture="5.6" vitesse="1/100"/>
                <Picture image="/7-12.jpg" ISO="160" objectif="70" ouverture="6.3" vitesse="1/160"/>
                <Picture image="/7-13.jpg" ISO="200" objectif="70" ouverture="6.3" vitesse="1/160"/>
                <Picture image="/7-14.jpg" ISO="500" objectif="99" ouverture="9.0" vitesse="1/250"/>
            </div>
            <Menu />
        </div>
    );
};