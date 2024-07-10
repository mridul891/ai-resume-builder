import { Button } from "@/components/ui/button";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";
const Header = () => {
  const {  isSignedIn } = useUser();
  return (
    <div className="p-3 px-5 flex justify-between items-center shadow-md">
      <Link to={"/"}>
        <img src={logo} height={100} width={100} />
      </Link>
      {isSignedIn ? (
        <div className="flex gap-2 items-center ">
          <Link to={"/dashboard"}>
            <Button>DashBoard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
