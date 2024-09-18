'use client';
import React, {useEffect, useRef, useState} from 'react';
import {gsap} from 'gsap';

const Hamburger = ({toggleMenu}) => {
    const burg1 = useRef(null);
    const burg2 = useRef(null);
    const burg3 = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            gsap.to(burg1.current, { rotate: 45, y: 4, backgroundColor: '#000', duration: 0.3 });
            gsap.to(burg2.current, { opacity: 0, duration: 0.3 });
            gsap.to(burg3.current, { rotate: -45, y: -8, backgroundColor: '#000', duration: 0.3 });
          } else {
            gsap.to(burg1.current, { rotate: 0, y: 0, backgroundColor: '#000', duration: 0.3 });
            gsap.to(burg2.current, { opacity: 1, duration: 0.3 });
            gsap.to(burg3.current, { rotate: 0, y: 0, backgroundColor: '#000', duration: 0.3 });
          }

    }, [isOpen])

    const handleClick = () => {
        setIsOpen(!isOpen);
        toggleMenu();
    }

  return (
    <div onClick={handleClick} className='hover:cursor-pointer z-20'>
        <div ref={burg1} className='h-0.5 w-6 bg-black mb-1'></div>
        <div ref={burg2} className='h-0.5 w-6 bg-black mb-1'></div>
        <div  ref={burg3} className='h-0.5 w-6 bg-black'></div>
    </div>
  )
}

export default Hamburger;