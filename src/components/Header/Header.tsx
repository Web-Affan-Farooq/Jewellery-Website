import React from "react";

const Header = () => {
  return (
    <header className={`w-full fixed bg-custombrown px-[40px] py-[20px] flex flex-row flex-wrap justify-between items-center max-[860px]:flex-col max-[860px]:items-start max-[860px]:gap-4 max-md:gap-4 z-10 max-[400px]:px-3 max-[400px]:py-7`}>

        <div>
        <h1 className="text-3xl text-white font-rye">MANZZARI</h1>
        </div>

        <div className={`bg-white w-[400px] 2xl:w-[550px] flex flex-nowrap flex-row justify-between items-center rounded-lg max-[860px]:m-auto max-sm:w-[300px]`}>
          <input type="text" name="searchQuerry" id="search-query" placeholder="Search jewellery" required className="w-[85%] px-[20px] py-2 rounded-lg"/>
          <button type="button" className="py-2 px-4 rounded-lg"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>

        <div className={`flex flex-norwap flex-row gap-3 max-[860px]:m-auto`}>
        <i className="fa-regular fa-heart text-white"><div className="w-5 h-5 rounded-full bg-red-500 text-white text-center ">1</div></i>
         <i className="fa-regular fa-user text-white"><div className="w-5 h-5 rounded-full bg-red-500 text-white text-center ">1</div></i>
         <i className="fa-solid fa-cart-shopping text-white"><div className="w-5 h-5 font-normal rounded-full bg-red-500 text-white text-center">1</div></i>
        </div>

    </header>
  );
};

export default Header;