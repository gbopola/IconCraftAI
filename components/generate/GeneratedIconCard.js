import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const GeneratedIconCard = ({ icon }) => {
  const { prompt, color, image } = icon;

  return (
    <div className="rounded-md border border-gray-300 w-[220px] height-[220px] relative">
      <div
        className={`h-5 w-5 bg-${color}-500 rounded-full absolute right-4 top-4 border border-white border-2`}
      ></div>
      <Image
        src={image}
        alt="generated icon"
        width={220}
        height={220}
        className="p-1 rounded-md"
      />
      <div className="flex justify-between items-center p-3">
        <p className="text-xs">{prompt}</p>

        <Link href={image}>
          <ArrowDownTrayIcon
            className="h-4 w-4 cursor-pointer"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
};

export default GeneratedIconCard;
