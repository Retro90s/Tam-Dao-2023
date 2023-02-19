import { promises as fs } from "fs";
import path from "path";
import Bridge from "./components/Bridge";
import { Gallery } from "./components/Gallery";

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
                <Bridge />
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
        made by{" "}
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
