'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/constants.js';
import { VscSearch } from "react-icons/vsc";
import Hamburger from './Hamburger';
import { gsap } from 'gsap';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const overlayRef = useRef(null);
    const linksRef = useRef(null);

    const handleInput = (e) => {
        setSearch(e.target.value);
    }

    const handleSearch = async () => {
        if (search.trim() === '') return;

        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const data = await response.json();
                
        setResult(data.meals || []);
    }

    useEffect(() => {
        setResult([]);
        handleSearch();
    }, [search]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);

        if (menuOpen) {
            gsap.to(overlayRef.current, { x: '100%', duration: 0.5, ease: 'power3.in' });   
        } else {
            gsap.to(overlayRef.current, { x: 0, duration: 0.5, ease: 'power3.out' });
            gsap.fromTo(linksRef.current.children, 
                        { opacity: 0, x: 30 }, 
                        { opacity: 1, x: 0, stagger: 0.1, duration: 0.5 });
        }
    };

    return (
        <nav className='flex w-full flex-wrap relative px-2'>
            <div className='flex w-full items-center lg:pb-[48px] lg:pt-4 lg:px-[6.9%] justify-between'>
                <div className='flex justify-start'>
                    <Link href="/" className='font-black text-3xl'>
                        RecipeHaven
                    </Link>            
                </div>
                <div className='flex flex-row gap-11 max-lg:hidden'>
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.link}
                        className='text-base text-black transform transition-transform duration-300 hover:scale-110'>
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className='flex justify-end max-lg:hidden flex-col relative'>
                    <div className='relative'>
                        <input className='rounded-full bg-[#f5f5f8] h-[29px] lg:w-[280px] py-[8px] pr-[39px] pl-[24px] w-[200px]' 
                        placeholder='SEARCH...'
                        value={search}
                        onChange={handleInput}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}></input>
                        <VscSearch className='absolute left-1 top-2 text-black-500 z-0' 
                        onClick={handleSearch}/>
                    </div>
                    {result.length > 0 && (
                    <div className='absolute top-full left-0 p-4 w-[280px] z-10 flex justify-center'>
                        <ul>
                            {result.map((meal) => (
                                <li key={meal.idMeal} className='py-1 mb-2 px-5 h-[29px] w-[280px] hover:text-blue-500 rounded-full bg-[#f5f5f8]'>
                                    <Link href={`/${meal.idMeal}`}>
                                        {meal.strMeal}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    )}
                </div>
                <div className={`relative z-50 lg:hidden ${menuOpen ? 'fixed top-0 right-0' : ''} pr-4`}>
                    <Hamburger toggleMenu={toggleMenu} />
                    <div ref={overlayRef} className={`bg-white transform lg:hidden z-10 h-[30vh] w-[25vw] absolute top-10 right-0 ${!menuOpen ? 'hidden' : ''}`} style={{ zIndex: 40 }}>
                        <div ref={linksRef} className='flex flex-col items-center gap-4'>
                            {navLinks.map((link) => (
                                <Link key={link.name} href={link.link} className='text-lg hover:text-red-500'>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center w-full lg:hidden mt-6 flex-col'>
                <div className='relative w-full px-4'>
                    <input
                        className='rounded-full bg-[#f5f5f8] h-[40px] w-full py-[8px] pr-[39px] pl-[24px]'
                        placeholder='SEARCH...'
                        value={search}
                        onChange={handleInput}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <VscSearch className='absolute left-5 top-3 text-black-500' 
                    onClick={handleSearch}/>
                </div>
                {result.length > 0 && (
                <div className='w-full p-4 z-10'>
                    <ul>
                        {result.map((meal) => (
                            <li key={meal.idMeal} className='py-2 mb-2 px-5 hover:text-blue-500 rounded-full bg-[#f5f5f8]'>
                                <Link href={`/${meal.idMeal}`}>
                                    {meal.strMeal}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                )}
            </div>
        </nav>
    );
}

export default NavBar;
