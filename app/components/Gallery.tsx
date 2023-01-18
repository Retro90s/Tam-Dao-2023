"use client";
import Image from "next/image";

export const Gallery = ({ images }: { images: Array<string> }) => {
  return (
    <div className="container mx-auto flex flex-col px-5 pt-36 py-0 items-center justify-center">
      <div className="columns-1 md:columns-2 lg:columns-3">
        <div className="relative mb-4">
          {images.map((el: string) => (
            <Image
              onClick={(e) => console.log(e)}
              className="w-full rounded-md"
              width={150}
              height={150}
              alt={"alt"}
              src={`/pictures/${el}`}
              key={el}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
