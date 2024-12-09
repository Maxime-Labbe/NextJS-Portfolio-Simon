import Menu from "@/components/Menu";
import Picture from "@/components/Picture";

export default function Serie1() {
    return (
        <div className="flex flex-column justify-between w-[85%] mx-auto mt-24 mb-16">
            <div className="w-[70%] relative text-center">
                <h1 className="serieTitle">Série 3 : Ombre</h1>
                <Picture image="/3-1.jpg" ISO="100" objectif="104" ouverture="11" vitesse="1/100"/>
                <Picture image="/3-2.jpg" ISO="100" objectif="104" ouverture="11" vitesse="1/100"/>
                <Picture image="/3-3.jpg" ISO="100" objectif="70" ouverture="6.3" vitesse="1/160"/>
                <Picture image="/3-4.jpg" ISO="100" objectif="104" ouverture="11" vitesse="1/100"/>
            </div>
            <Menu />
        </div>
    );
};