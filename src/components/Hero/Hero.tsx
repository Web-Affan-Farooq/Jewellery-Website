import React from 'react';
import Button from '../Button/Button';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='w-full flex flex-row flex-wrap justify-center items-center h-[573px] gap-10 max-md:my-[100px] max-md:p-4 max-sm:mb-[100px]'>
      <div className='w-1/2 max-md:w-full'>
        <h1 className='text-4xl font-bold leading-[62px] tracking-[2.5%] text-left'>IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1>
        <br />
        <p className='font-medium leading-[48.1px text-left tracking-wide text-custombrown'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
        <br />
        <Button text='Explore Now'/>
      </div>
      <div>
        <Image src={'/images/hero-img.svg'} alt='hero lady image' width={400} height={500} className='w-[350px] h-[450px] max-md:m-auto'/>
      </div>
    </section>
  )
}

export default Hero;