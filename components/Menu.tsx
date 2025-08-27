"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import picturesData from "@/data/pictures.json";

export default function Menu({ isOpen }: { isOpen?: boolean }) {
  const pathname = usePathname();
  const isActive = (path: string) => (pathname === path ? "active" : "");
  const seriesTitle: string[] = Object.values(picturesData).map(
    (serie) => serie.title
  );

  return (
    <div
      className={`menu${
        isOpen ? " phone open" : isOpen !== undefined ? " phone" : ""
      }`}
    >
      <h2 className="text-3xl mb-6 font-black menu-element">
        <Link href={"/"}>Séries</Link>
      </h2>
      <div>
        <ul>
          {seriesTitle.map((title, index) => (
            <li key={index} className="menu-element">
              <Link
                href={`/serie/${index + 1}`}
                className={`listElem ${isActive(`/serie/${index + 1}`)}`}
              >
                Série {index + 1} : {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
