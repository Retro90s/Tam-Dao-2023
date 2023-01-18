import { promises as fs } from "fs";
import path from "path";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";

const Home = async () => {
  const imageDirectory = path.join(process.cwd(), "/public/pictures");
  const imageFilenames = await fs.readdir(imageDirectory);

  return (
    <div className="flex flex-col container items-center justify-center mx-auto px-2 py-4">
      <Header Title={"Tam Đảo 2023"} />
      <Gallery images={imageFilenames} />
      <Footer />
    </div>
  );
};

export default Home;
