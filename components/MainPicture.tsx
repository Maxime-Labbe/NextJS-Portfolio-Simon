export default function MainPicture({ image, url, name } : { image: string, url ?: string, name : string }) {
    return (
        <div className="mainPicture">
            <img src={image}/>
            <div className="textOverMainPic">
                <p>{name}</p>
            </div>
        </div>
    );
};