export default function MainPicture({ image } : { image: string }) {
    return (
        <div className="mainPicture">
            <img src={image}/>
            <div className="textOverMainPic">
                <p>Série 1</p>
            </div>
        </div>
    );
};