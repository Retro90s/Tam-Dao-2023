import { promises as fs } from "fs";
import path from "path";
import styles from "./page.module.css";
import { Gallery } from "./components/Gallery";

const { container, main, title } = styles;

const Home = async () => {
  const imageDirectory = path.join(process.cwd(), "/public/pictures");
  const imageFilenames = await fs.readdir(imageDirectory);

  return (
    <div className={container}>
      <div className={main}>
        <Title Title={"Kỷ niệm Tam Đảo 2023"} />
        <Gallery images={imageFilenames} />
      </div>
    </div>
  );
};

const Title = ({ Title }: { Title: String }) => {
  return (
    <h1 className={title}>
      {Title}
    </h1>
  );
};

export default Home;
