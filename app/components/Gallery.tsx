"use client";
import Image from "next/image";

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

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
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(720, 480)
          )}`}
          width={720}
          height={480}
          sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
          loading="eager"
        />
      ))}
    </>
  );
};
