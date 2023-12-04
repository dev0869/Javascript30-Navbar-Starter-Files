import { Spense_Icon, Gradie_Icon, Fiber_Icon } from "../assets/imgs";
import { Close } from "../assets/imgs";
import { mobhover } from "./Navbar";

export const MobDrpdwn = () => {
  return <>{mobhover.value ? <DrpDwn /> : null}</>;
};

const DrpDwn = () => {
 
  const DrpMessage = [
    {
      heading: "spense",
      para: "  Spense is a landing page for writers. Great for practicing absolute positioning and flex layouts.",
      icon: Spense_Icon,
    },
    {
      heading: "Fiber Landing Page",
      para: "  An online portt0110 generator, Great to practice flex/grid layouts. and absolute positioning.",
      icon: Fiber_Icon,
    },
    {
      heading: "Gradie Sign Up Page",
      para: "  GsradIe IS a simple Sign up page, great to practice centering layouts.",
      icon: Gradie_Icon,
    },
  ];

  return (
    <>
      <div className="  absolute right-[20px]  md:right-[55px] left-[20px] md:left-[-33px] top-[12px] md:top-[50px] drpdown">
        <div className="flex mb-8  min-[1020px]:hidden bg-white justify-between">
          <p className="bg-white text-gray-500 font-bold">Products</p>
          <img
            onClick={() => (mobhover.value = !mobhover.value)}
            className="bg-white"
            src={Close}
            alt=""
          />
        </div>

        {DrpMessage.map((ele, id) => {
          return (
            <div
              className="cursor-pointer flex items-start  bg-white gap-2"
              key={id}
            >
              <img className=" bg-white" src={ele.icon} alt="" />

              <div className=" flex pb-2 bg-white  flex-col">
                <p className="bg-white text-[#251c3be5]  font-semibold">
                  {ele.heading}
                </p>
                <p className="bg-white text-gray-500 text-[14px]">{ele.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DrpDwn;
