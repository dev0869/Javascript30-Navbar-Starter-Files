import { Logo } from "../assets/imgs";

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
  const Options = ["Product", "Challenges", "Resources", "Other Links"];

  return (
    <>
      <nav className=" flex items-center justify-between">
        <div>
          <img src={Logo} alt=""  />
        </div>
        <div className="flex gap-4">
          {Options.map((ele) => (
            <>
              <p className="  text-gray-700">{ele}</p>
            </>
          ))}
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
