import React from 'react';

const Section_10 = () => {
  return (
    <section className='w-full p-5 text-center'>
      <h1 className="text-[45px] font-bold font-rye max-md:text-[40px] max-sm:text-[34px]">Newsletter</h1>              <br />
              <p className='text-[20px] leading-10 text-custombrown'>Sign-up to receive 10% off your next purchase. Plus hear about new arrivals and offers.</p>
              <br />
              <br />
              <div className='flex flex-row flex-nowrap gap-3 m-auto justify-center align-middle'>
                <input type="text" name='email' id='email' placeholder='Email address' required className='w-[280px] px-[10px] py-[5px]'/>
                <button type="button" className='px-[25px] py[10px] bg-background rounded-lg text-white text-[20px] max-md:px[20px]'>Subscribe</button>
              </div>
    </section>
  )
}

export default Section_10;