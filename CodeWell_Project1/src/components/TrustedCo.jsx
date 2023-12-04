import { NetflixLogo, spotify, Shopify, WalmartLogo } from "../assets/imgs";
const TrustedCo = () => {
  const Imgs = [NetflixLogo, Shopify, spotify, WalmartLogo];

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="para text-sm">
          Trusted by 3+ million people at companies like
        </p>
        <div className="flex gap-4">
          {Imgs.map((ele, id) => {
            return (
              <div key={id} className="flex fle" >
                <img src={ele} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TrustedCo;
