import { CapterraLogo, Hero } from "../assets/imgs";
import { Button } from "./Navbar";
import { AlternativeToLogo } from "../assets/imgs";
const Content = () => {
  return (
    <>
      <div className=" flex  items-center gap-[35px] my-[35px] md:my-[20px]">
        <div className="flex flex-col">
          <h1 className="text-[35px] md:text-[55px] leading-[44px] md:leading-[65px] text-[#171615] font-bold">
            Onedeck is your Remote{" "}
            <span className="text-[#F6B200]">conference calling tool</span>
          </h1>
          <p className="para my-4">
            OneDeck is a service that allows you to create beautiful, online,
            and encrypted video calls for you find vour remate team.
          </p>
          <div>
            <Button />
          </div>

          <div className="my-6">
            <p className="para flex gap-5 ">
            Rating based on reviews from: <span className="flex gap-2">
            <img src={AlternativeToLogo} alt="" />
            <img src={CapterraLogo} alt="" />
            </span>
    
            </p>
          </div>
        </div>

        <div className="max-[1020px]:hidden  py-[60px]">
          <img src={Hero} alt="img" width={565} />
        </div>
      </div>
    </>
  );
};

export default Content;
