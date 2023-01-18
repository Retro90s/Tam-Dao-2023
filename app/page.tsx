import { promises as fs } from "fs";
import path from "path";
import { Gallery } from "./components/Gallery";

const Home = async () => {
  const imageDirectory = path.join(process.cwd(), "/public/pictures");
  const imageFilenames = await fs.readdir(imageDirectory);

  return (
    <div className="container mx-auto flex flex-col px-5 pt-36 py-0 items-center justify-center">
        <Title Title={"Kỷ niệm Tam Đảo 2023"} />
        <Gallery images={imageFilenames} />
    </div>
  );
};

const Title = ({ Title }: { Title: String }) => {
  return (
    <h1 className="text-white text-4xl font-bold my-2 mb-1">
      {Title}
    </h1>
  );
};

export default Home;
