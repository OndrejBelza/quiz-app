import { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: FC<{
  username: string | undefined;
}> = ({ children, username }) => {
  return (
    <>
      <Header username={username} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
