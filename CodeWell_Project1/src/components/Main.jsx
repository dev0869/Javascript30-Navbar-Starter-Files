import Content from "./Content";
import Navbar from "./Navbar";
import TrustedCo from "./TrustedCo";
const Main = () => {
  return (
    <div className=" px-[20px] md:px-[80px] py-3">
      <Navbar />
      <Content />
      <TrustedCo/>
    </div>
  );
};

export default Main;
