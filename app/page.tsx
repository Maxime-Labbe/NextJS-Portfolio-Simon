import Image from "next/image";
import MainPicture from "@/components/MainPicture";

export default function Home() {
  return (
    <div className="flex flex-column w-[85%] mx-auto mt-10">
      <div className="w-[70%] relative">
        <MainPicture image="/A7300248.jpg" />
      </div>
    </div>
  );
}
