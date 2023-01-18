export const Header = ({ Title }: { Title: String }) => {
  return (
    <header className="pb-16 my-2 mb-1 text-white md:text-4xl text-2xl font-bold ">
      {Title}
    </header>
  );
};
