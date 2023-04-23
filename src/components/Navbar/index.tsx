import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import LogoWhite from "@/assets/LogoWhite.png";
import Link from "./Link";
import { SelectedPage } from "@/utils";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ActionButton } from "@/components";

type Props = {
  isTopPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (v: SelectedPage) => void;
};

const links: Array<string> = ["Home", "Benefits", "Our Classes", "Contact Us"];

const Navbar = ({ isTopPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBG =
    isTopPage || isMenuToggled ? "" : "bg-primary-100 drop-shadow text-gray-20";
  const navLogo = isTopPage || isMenuToggled ? Logo : LogoWhite;

  const RenderList: JSX.Element[] = links.map((l) => (
    <Link
      key={l}
      pageLink={l}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
  ));

  return (
    <nav>
      <div
        className={`${navbarBG} ${flexBetween} fixed top-0 z-50 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img alt="logo" src={navLogo} />
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {RenderList}
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Became a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
            {!isAboveMediumScreens && isMenuToggled && (
              <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                <div className="flex justify-end p-12">
                  <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="h-6 w-6 text-gray-400" />
                  </button>
                </div>
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                  {RenderList}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
