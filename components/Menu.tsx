export default function Menu() {
    return (
        <div className="menu">
            <h2 className="text-3xl mb-6 font-black"><a href="/">Séries</a></h2>
            <ul>
                <li><a href="/serie_1" className="listElem">Série 1 : Eau</a></li>
                <li><a href="/serie_2" className="listElem">Série 2 : Étincelle</a></li>
                <li><a href="/serie_3" className="listElem">Série 3 : Ombre</a></li>
                <li><a href="/serie_4" className="listElem">Série 4 : Spectre</a></li>
                <li><a href="/serie_5" className="listElem">Série 5 : Photos non-filées vs filées</a></li>
                <li><a href="/serie_6" className="listElem">Série 6 : Cadrage</a></li>
                <li><a href="/serie_7" className="listElem">Série 7 : Photos en filées</a></li>
                <li><a href="/serie_8" className="listElem">Série 8 : Photos abstraites</a></li>
                <li><a href="/serie_9" className="listElem">Série 9 : Célébration</a></li>
            </ul>
        </div>
    );
};