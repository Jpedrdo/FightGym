import { useState, useEffect } from "react";
import { Navbar, Footer } from "@/components";
import { Home, Benefits, OurClasses, ContactUs } from "@/pages";
import { SelectedPage } from "@/utils";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopPage, setTopPage] = useState<boolean>(true);
  const cProps = { setSelectedPage };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTopPage(true);
        setSelectedPage(SelectedPage.Home);

        return;
      }

      setTopPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar isTopPage={isTopPage} selectedPage={selectedPage} {...cProps} />
      <Home {...cProps} />
      <Benefits {...cProps} />
      <OurClasses {...cProps} />
      <ContactUs {...cProps} />
      <Footer />
    </div>
  );
};

export default App;
