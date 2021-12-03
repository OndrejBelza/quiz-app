import { FC } from "react";
import { Menubar } from "primereact/menubar";
import { Link } from "react-router-dom";
const Header: FC<{
  username: string | undefined;
}> = ({ username }) => {
  const end = <>{username && <span className="p-mr-2">{username}</span>}</>;
  return (
    <>
      <Menubar
        className="menu"
        start={
          <>
            <Link to="/">
              <span className="p-ml-2 p-text-bold ">Quiz app</span>
            </Link>
          </>
        }
        end={end}
      />
    </>
  );
};

export default Header;
