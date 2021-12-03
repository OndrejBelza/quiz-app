import { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Layout.css";

const Layout: FC<{
  username: string | undefined;
}> = ({ children, username }) => {
  return (
    <>
      <div className="p-d-flex p-flex-column" style={{ minHeight: "100vh" }}>
        <div>
          <Header username={username} />
        </div>
        <div className="content"> {children}</div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
