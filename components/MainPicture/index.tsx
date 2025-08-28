import Link from "next/link";
import styles from "./MainPicture.module.css";

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
    <div className="relative h-auto mb-[30px] group">
      <Link href={`/serie/${id}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-200 ease-in-out cursor-pointer group-hover:opacity-70"
        />
        <div
          className={`${styles.textOverMainPic} cursor-pointer group-hover:opacity-100`}
        >
          <p className="relative text-center top-1/2 -translate-y-1/2 text-2xl md:text-5xl font-bold">
            {name}
          </p>
        </div>
      </Link>
    </div>
  );
}
