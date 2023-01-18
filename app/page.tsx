import { promises as fs } from "fs";
import path from "path";
import { Header } from "./components/Header";
import { Gallery } from "./components/Gallery";

const Home = async () => {
  const imageDirectory = path.join(process.cwd(), "/public/pictures");
  const imageFilenames = await fs.readdir(imageDirectory);

  return (
    <div className="flex flex-col container mx-auto px-2 py-4 items-center justify-center">
      <Header Title={"Tam Đảo 2023"} />
      <Gallery images={imageFilenames} />
    </div>
  );
};

export default Home;
