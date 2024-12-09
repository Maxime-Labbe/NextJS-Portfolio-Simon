export default function MainPicture({ image, name } : { image: string, name : string }) {
    return (
        <div className="mainPicture">
            <img src={image}/>
            <div className="textOverMainPic">
                <p>{name}</p>
            </div>
        </div>
    );
};