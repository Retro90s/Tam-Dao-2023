"use client";
import Image from "next/image";

export const Gallery = ({ images }: { images: Array<string> }) => {
  return (
    <div className="columns md:columns-2 lg:columns-3">
      {images.map((id: string) => (
          <Image
            className="w-full rounded-md mb-4"
            width={1080}
            height={1080}
            alt={"Alt Text"}
            src={`/pictures/${id}`}
            key={id}
          />
      ))}
    </div>
  );
};
