import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/utils";

type Props = {
  pageLink: string;
  selectedPage: SelectedPage;
  setSelectedPage: (v: SelectedPage) => void;
};

const Link = ({ pageLink, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = pageLink
    .toLocaleLowerCase()
    .replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      <>{pageLink}</>
    </AnchorLink>
  );
};

export default Link;
