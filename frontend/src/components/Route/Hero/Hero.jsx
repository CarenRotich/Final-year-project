import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Best Collections <br /> you and your family.
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
        A Symphony of Sellers, A Symphony of Choices - Immerse yourself in the enchanting orchestration of our marketplace, 
        where a diverse ensemble of sellers contributes to a harmonious shopping experience.<br/>
        Explore the virtuosity of our sellers, each playing a unique note in the grand symphony of offerings.<br/>
        From the lyrical elegance of handmade crafts to the powerful crescendo of cutting-edge technology,<br/> every seller adds a distinctive melody to your shopping journey.

{" "}
          <br /> In this symphony of commerce, sellers are the virtuosos, and choices are the melodies that resonate with your desires.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
