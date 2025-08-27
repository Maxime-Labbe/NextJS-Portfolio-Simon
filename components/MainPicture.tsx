import Link from "next/link";

export default function MainPicture({
  image,
  name,
  id,
}: {
  image: string;
  name: string;
  id: string;
}) {
  return (
    <div className="mainPicture">
      <Link href={`/serie/${id}`}>
        <img src={image} alt={name} />
        <div className="textOverMainPic">
          <p>{name}</p>
        </div>
      </Link>
    </div>
  );
}
