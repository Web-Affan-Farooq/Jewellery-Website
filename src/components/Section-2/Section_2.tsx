import React from "react";
import Image from "next/image";

const Section_2 = () => {
  return (
    <section className="text-center w-full p-5 block max-[800px]:my-[150px]">
      <h1 className="text-[45px] font-bold font-rye max-md:text-[40px] max-sm:text-[34px]">Shop By Categories</h1>
      <br />
      <br />
      <div className="flex flex-row flex-nowrap justify-evenly w-[80vw] m-auto items-center max-md:flex-wrap max-md:gap-4">
        <span className="text-custombrown lightbrown text-3xl max-sm:text-2xl font-bold ">
          Earrings
        </span>
        <span className="text-custombrown lightbrown text-3xl max-sm:text-2xl font-bold ">
          Necklace
        </span>
        <span className="text-custombrown text-3xl max-sm:text-2xl font-bold ">Bracelet</span>
        <span className="text-custombrown lightbrown text-3xl max-sm:text-2xl font-bold ">
          Rings
        </span>
      </div>
      <br />
      <div className="w-[80vw] m-auto flex flex-row flex-wrap gap-2 justify-center items-center">
        <div className="content-1 relative w-[360px] h-[300px]">
          <Image
            src={"/images/section-2-images/1.svg"}
            alt="img"
            width={360}
            height={300}
            className="object-cover w-[360px] h-[300]"
          />
        </div>
        <div className="content-1 relative w-[250px] h-[300px]">
          <Image
            src={"/images/section-2-images/2.svg"}
            alt="img"
            width={250}
            height={300}
            className="object-cover object-bottom w-[250px] h-[300px]"
          />
        </div>

        <div className="content-1 relative w-[250px] h-[300px]">
          <Image
            src={"/images/section-2-images/3.svg"}
            alt="img"
            width={250}
            height={300}
            className="object-cover object-bottom w-[250px] h-[300]"
          />
        </div>
        <div className="content-1 relative w-[250px] h-[300px]">
          <Image
            src={"/images/section-2-images/4.svg"}
            alt="img"
            width={250}
            height={300}
            className="object-cover object-left w-[250px] h-[300]"
          />
        </div>
        <div className="content-1 relative w-[250px] h-[300px]">
          <Image
            src={"/images/section-2-images/5.svg"}
            alt="img"
            width={250}
            height={300}
            className="object-cover object-bottom w-[250px] h-[300]"
          />
        </div>
        <div className="overflow-hidden content-1 relative w-[360px] h-[300px]">
          <Image
            src={"/images/section-2-images/6.svg"}
            alt="img"
            width={360}
            height={300}
            className="content-image object-cover w-[360px] h-[300]"
          />
        </div>
      </div>
    </section>
  );
};

export default Section_2;
