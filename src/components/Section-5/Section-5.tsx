import React from 'react';
import Image from 'next/image';
import Button_2 from '../Button/Button-2';

const Section_5 = () => {
  return (
   <section className='w-full bg-custombrown flex flex-row flex-wrap justify-center items-center gap-5 p-5'>
    <Image src={'/images/section-5-images/1.svg'} alt='img' width={400} height={400} className='w-1/2 h-full'/>
    <div className='bg-transparent w-200px p-4 flex flex-col justify-center items-center max-md:h-[220px]'>
        <h1 className='text-3xl text-white font-bold'>Jewelery for Every
        Occasion</h1>
        <br />
        <Button_2/>
    </div>
    <Image src={'/images/section-5-images/2.svg'} alt='jewelery image' width={250} height={350}/>
   </section>
  )
}

export default Section_5;