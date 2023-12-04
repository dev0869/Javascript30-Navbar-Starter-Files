import { useState } from "react";
import { Logo } from "../assets/imgs";
import DrpDwn from "./DrpDwn";

export const Button = () => {
  return (
    <>
      <div className="rounded-[4px] w-fit text-white p-2 bg-[#133416]">
        <p className=" text-sm px-4 py-1 bg-[#133416]">Try For Free</p>
      </div>
    </>
  );
};

const Navbar = () => {
  const [hover, setHover] = useState(true);

  const Options = ["Product", "Challenges", "Resources", "Other Links"];

  const handleDropDown = (option) => {
    if (option === "Product") {
      setHover(true);
    } else {
      setHover(false);
    }
  };

  return (
    <>
      <nav className=" flex items-center justify-between">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="relative flex  gap-8">
          {Options.map((ele) => (
            <>
              <p
                onMouseEnter={() => handleDropDown(ele)}
                className="  cursor-pointer hover:font-gray-900  text-gray-700"
              >
                {ele}
              </p>
            </>
          ))}
          {hover ? <DrpDwn /> : null}
        </div>
        <div className="flex gap-6 items-center">
          <p className="  text-gray-700">Sign In</p>
          <Button />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
