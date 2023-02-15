import { useState } from "react";
import Sidebar from "react-sidebar";
import Header from "./Header";
import Footer from "./Footer";
import Sidemenu from "./Sidemenu";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar
        sidebar={<Sidemenu toggleMenu={() => setIsSidebarOpen(false)} />}
        open={isSidebarOpen}
        onSetOpen={setIsSidebarOpen}
        touch
        pullRight
      >
        <Header toggleMenu={() => setIsSidebarOpen(true)} />
        <main>{children}</main>
        <Footer />
      </Sidebar>
    </>
  );
};

export default Layout;
