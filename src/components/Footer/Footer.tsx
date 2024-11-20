import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='px-2 text-center bg-background text-white'>
        <div className='flex flex-row flex-wrap gap-6 justify-start items-center p-4'>
            <div className='p-3'>
                <h2 className='text-[20px] font-bold'>MY ACCOUNT</h2>
                <br />
                <div className='flex flex-col flex-wrap text-left gap-2'>
                    <span>
                        <Link href={'/'} className='roboto'>Career at Eldy</Link>
                    </span>
                    <span>
                        <Link href={'/'} className='roboto'>About us</Link>
                    </span>
                    <span>
                        <Link href={'/'} className='roboto'>Sustainability</Link>
                    </span>
                    <span>
                        <Link href={'/'} className='roboto'>Press</Link>
                    </span>
                </div>
            </div>

            <div className='p-3'>
                <h2 className='text-[20px] font-bold'>HELP</h2>
                <br />
                <div className='flex flex-col flex-wrap text-left gap-2'>
                    <span>
                        <Link href={'/'} className='roboto'>FAQ</Link>
                    </span>
                    <span>
                        <Link href={'/'} className='roboto'>Shipping</Link>
                    </span>
                    <span>
                        <Link href={'/'} className='roboto'>Returns</Link>
                    </span>
                    <span>
                        <Link href={'/'} className='roboto'>Order Status</Link>
                    </span>
                </div>
            </div>

            <div className='p-3'>
                <h2 className='text-[20px] font-bold'>FOLLOW US ON</h2>
                <br />
                <div className='flex flex-col flex-wrap text-left gap-2'>
                    <span>
                        <Link href={'/'} className='roboto'>Twitter </Link>
                    </span>
                    <span>
                        <Link href={'/'} className='roboto'>Facebook</Link>
                    </span>
                    <span>
                        <Link href={'/'} className='roboto'>Google Plus</Link>
                    </span>
                    <span>
                        <Link href={'/'} className='roboto'>Instagram</Link>
                    </span>
                </div>
            </div>

            <div className='p-3'>
                <h2 className='text-[20px] font-bold'>ABOUT US</h2>
                <br />
                <div className='flex flex-col flex-wrap text-left gap-2'>
                    <div className='text-black roboto'>Email:<span className='text-white roboto'>purity_jewel@gmail.com</span></div>
                    <div className='text-black roboto'>Phone:<span className='text-white roboto'>0987654321</span></div>
                </div>
            </div>
        </div>
        <br />
        <div className='text-white p-5 bg-[#5e5844]'>
            <p>&copy; MANZARRI X Muhammad Affan 2024 | All rights reserved .</p>
        </div>
    </footer>
  )
}

export default Footer;