import React from 'react';
import Image from 'next/image';

const Section_8 = () => {
  return (
    <section className='w-full flex flex-row flex-wrap justify-center text-center bg-background py-2'>
        <Image src={'/images/section-8-images/1.svg'} alt='image model' width={400} height={400} className='w-[500px] h-[500px] object-contain'/>
        <div className='flex flex-col flex-wrap text-center justify-center align-middle w-[60%] max-md:w-[60vh] text-white'>
            <h1 className='font-oswald text-3xl font-bold'>ABOUT US</h1>
            {/* <h1 className="text-[45px] font-bold font-rye max-md:text-[40px] max-sm:text-[34px]">Shop By Categories</h1> */}
            <br />
            <p className='leading-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, qui. llitia sunt ea velit minima sint nam veniam eveniet ipsum.</p>
            <br />
            <button type='button' className='py-[10px] rounded-lg font-bold text[20px] bg-white text-custombrown w-[150px] mx-auto'>View more</button>
        </div>
    </section>
  )
}

export default Section_8