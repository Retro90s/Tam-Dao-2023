import { promises as fs } from "fs";
import path from "path";
import Image from "next/image";

const Home = async () => {
  const imageDirectory = path.join(process.cwd(), "/public/pictures");
  const imageFilenames = await fs.readdir(imageDirectory);

  return (
    <>
      <main className="mx-auto max-w-[1960px] p-4">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <div className="after:content relative mb-5 flex h-[500px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex max-h-full max-w-full items-center justify-center">
                <Photo />
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            <h1 className="mt-8 mb-4 font-bold uppercase tracking-widest">
              KỶ NIỆM TAM ĐẢO 2023
            </h1>
            <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
              Hành trình Tam Đảo 2023, cùng nhau chúng tôi tạo nên những kỷ
              niệm.
            </p>
          </div>
          <Gallery images={imageFilenames} />
        </div>
      </main>
      <footer className="p-6 text-center text-white/80 sm:p-12">
        made with ❤️ by{" "}
        <a
          href="https://torn4dom4n.github.io"
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        >
          Long Nhat Nguyen
        </a>
      </footer>
    </>
  );
};

export default Home;

const Gallery = ({ images }: { images: Array<string> }) => {
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

function Photo() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path d="M48.68 58.259H4.174V16.89H48.68v41.369zm-42.506-2H46.68V18.89H6.174v37.369z" />
      <path d="M5.011 42.688l-.721-1.866 18.866-7.297 10.964 5.22 7.215-2.992 6.889 4.467-1.088 1.677-6.006-3.894-7.067 2.93-10.989-5.232zM13.535 30.313a3.575 3.575 0 01-3.572-3.571c0-1.969 1.603-3.57 3.572-3.57s3.572 1.602 3.572 3.57a3.576 3.576 0 01-3.572 3.571zm0-5.142c-.867 0-1.572.705-1.572 1.57 0 .866.705 1.571 1.572 1.571s1.572-.705 1.572-1.571-.705-1.57-1.572-1.57z" />
      <path d="M54.252 50.291h-2V13.315H10.748v-2h43.504z" />
      <path d="M59.826 44.717h-2V7.741H16.322v-2h43.504z" />
    </svg>
  );
}
