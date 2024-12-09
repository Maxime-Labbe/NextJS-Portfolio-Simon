import Menu from "@/components/Menu";
import Picture from "@/components/Picture";

export default function Serie1() {
    return (
        <div className="flex flex-column justify-between w-[85%] mx-auto mt-24 mb-16">
            <div className="w-[70%] relative text-center">
                <h1 className="serieTitle">Série 5 : Photos non-filées vs filées</h1>
                <Picture image="/5-1.jpg" ISO="100" objectif="180" ouverture="11" vitesse="1/160"/>
                <Picture image="/5-2.jpg" ISO="100" objectif="180" ouverture="11" vitesse="1/160"/>
                <Picture image="/5-3.jpg" ISO="100" objectif="180" ouverture="11" vitesse="1/160"/>
                <Picture image="/5-4.jpg" ISO="100" objectif="180" ouverture="11" vitesse="1/160"/>
                <Picture image="/5-5.jpg" ISO="100" objectif="180" ouverture="11" vitesse="1/80"/>
                <Picture image="/5-6.jpg" ISO="250" objectif="180" ouverture="2.8" vitesse="1/8000"/>
                <Picture image="/5-7.jpg" ISO="250" objectif="180" ouverture="2.8" vitesse="1/8000"/>
                <Picture image="/5-8.jpg" ISO="250" objectif="180" ouverture="2.8" vitesse="1/8000"/>
                <Picture image="/5-9.jpg" ISO="250" objectif="180" ouverture="2.8" vitesse="1/8000"/>
                <Picture image="/5-10.jpg" ISO="250" objectif="180" ouverture="2.8" vitesse="1/8000"/>
                <Picture image="/5-11.jpg" ISO="250" objectif="180" ouverture="2.8" vitesse="1/8000"/>
            </div>
            <Menu />
        </div>
    );
};