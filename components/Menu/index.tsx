"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import picturesData from "@/data/pictures.json";
import styles from "./menu.module.css";

export default function Menu({ isOpen }: { isOpen?: boolean }) {
  const pathname = usePathname();
  const isActive = (path: string) => (pathname === path ? "active" : "");
  const seriesTitle: string[] = Object.values(picturesData).map(
    (serie) => serie.title
  );

  return (
    <div
      className={`${styles.menu}${
        isOpen
          ? ` ${styles.phone} ${styles.open}`
          : isOpen !== undefined
          ? ` ${styles.phone}`
          : ""
      }`}
    >
      <h2 className={`text-3xl mb-6 font-black ${styles.menuElement}`}>
        <Link href={"/"}>Séries</Link>
      </h2>
      <div>
        <ul>
          {seriesTitle.map((title, index) => (
            <li key={index} className={`mt-[10px] ${styles.menuElement}`}>
              <Link
                href={`/serie/${index + 1}`}
                className={`${styles.listElem} ${
                  isActive(`/serie/${index + 1}`) ? styles.active : ""
                }`}
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
