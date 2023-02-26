"use client";
import Image from "next/image";

export const Gallery = ({ images }: { images: Array<string> }) => {
  return (
    <>
      {images.map((id: string) => (
        <Image
          key={id}
          alt="Kỷ niệm Tam Đảo 2023"
          className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 mb-5"
          style={{ transform: "translate3d(0, 0, 0)" }}
          src={`/pictures/${id}`}
          width={720}
          height={480}
          sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
        />
      ))}
    </>
  );
};
