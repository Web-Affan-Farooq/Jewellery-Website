import React from 'react'

const Button = ({text}:{text:string}) => {
  return (
    <button type="button" className='py-2 px-6 text-[17px] gap-[8.6px] rounded-[8.6px] bg-background font-medium text-white text-center'>{text}</button>
  )
}

export default Button