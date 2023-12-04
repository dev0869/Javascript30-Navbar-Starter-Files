import { NetflixLogo, spotify, Shopify, WalmartLogo } from "../assets/imgs";
const TrustedCo = () => {
  const Imgs = [NetflixLogo, Shopify, spotify, WalmartLogo];

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="para ">
          Trusted by 3+ million people at companies like
        </p>
        <div className="flex  flex-wrap gap-9 justify-center">
          {Imgs.map((ele, id) => {
            return (
              <div key={id} className="flex  " >
                <img src={ele} alt="" className="w-[150px]" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TrustedCo;
