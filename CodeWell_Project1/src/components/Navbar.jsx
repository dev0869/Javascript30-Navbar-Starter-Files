import { useState } from "react";
import { Logo, Menu } from "../assets/imgs";
import DrpDwn, { MobDrpdwn } from "./DrpDwn";
import { signal } from "@preact/signals-react";

export const mobhover = signal(false);

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
  const [hover, setHover] = useState(false);
  // const [mobhover, setMobhover] = useState(false);

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
        <div className="relative flex  max-[1020px]:hidden gap-8">
          {Options.map((ele) => (
            <>
              <p
                onMouseEnter={() => handleDropDown(ele)}
                className="  cursor-pointer hover:text-[#251C3B] text-gray-700"
              >
                {ele}
              </p>
            </>
          ))}
          {hover ? <DrpDwn /> : null}
        </div>
        <div className="cursor-pointer  max-[1020px]:hidden flex gap-6 items-center">
          <p className="  text-gray-700">Sign In</p>
          <Button />
        </div>
        <img
          onClick={() => (mobhover.value = !mobhover.value)}
          className="block lg:hidden"
          src={Menu}
          alt=""
        />
        {mobhover ? <MobDrpdwn /> : null}
      </nav>
    </>
  );
};

export default Navbar;
