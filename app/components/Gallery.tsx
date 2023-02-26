"use client";
import Image from "next/image";

const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

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
          placeholder="blur"
          blurDataURL={rgbDataURL(192, 192, 192)}
          width={720}
          height={480}
          sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
          priority
        />
      ))}
    </>
  );
};
