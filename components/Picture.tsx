export default function Picture({ image, ISO, ouverture, objectif, vitesse} : { image: string, ISO: string, ouverture: string, objectif: string, vitesse: string }) {

    return (
        <div>
            <div className="picture">
                <img src={image}/>
                <div className="SpecsPic">
                    <div className="SpecsText">
                        <p>ISO : {ISO} </p>
                        <p>Objectif : {objectif + " mm"} </p>
                        <p>Ouverture : {"F/" + ouverture} </p>
                        <p>Vitesse : {vitesse + "s"} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};