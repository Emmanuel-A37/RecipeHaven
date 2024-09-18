'use client';
import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import RecipeCard from './RecipeCard';

const SwiperCarousel = () => {
    const [randomMeals, setRandomMeals] = useState([]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const carouselMeals = async () => {
        try {
            const fetchedMeals = [];
            for (let i = 0; i < 15; i++) {
                const result = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
                const data = await result.json();
                fetchedMeals.push(data.meals[0]);
            }
            setRandomMeals(fetchedMeals);
        } catch (error) {
            console.error('Error fetching random meals:', error);
        }
    };

    useEffect(() => {
        carouselMeals();
    }, []);

  

    return (
        <div className='mt-6  mx-2 relative'>
            <button
                ref={prevRef}
                className='custom-swiper-button-prev text-xl flex items-center justify-center bg-white rounded-full w-10 h-10 text-black absolute top-1/2 transform -translate-y-1/2 z-10 left-0.5 cursor-pointer'
            >
                <FaArrowLeft />
            </button>
            <button
                ref={nextRef}
                className='custom-swiper-button-next text-xl flex items-center justify-center bg-white rounded-full w-10 h-10 text-black absolute top-1/2 transform -translate-y-1/2 z-10 right-2 cursor-pointer'
            >
                <FaArrowRight />
            </button>

            <div className='lg:hidden'>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    grabCursor={true}                    
                    loop={true}
                >
                    {randomMeals.map((meal) => (
                        <SwiperSlide key={meal.idMeal}>
                            <RecipeCard meal={meal}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='max-lg:hidden'>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={5}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    grabCursor={true}            
                    loop={true}
                >
                    {randomMeals.map((meal) => (
                        <SwiperSlide key={meal.idMeal}>
                           <RecipeCard meal={meal}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default SwiperCarousel;
