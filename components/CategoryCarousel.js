'use client';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import RecipeCard from './RecipeCard';

const CategoryCarousel = ({ category }) => {
    const [meals, setMeals] = useState([]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const carouselMeals = async () => {
        try {
            const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            const data = await result.json();
            setMeals(data.meals);
        } catch (error) {
            console.error('Error fetching random meals:', error);
        }
    };

    useEffect(() => {
        carouselMeals();
    }, []);

    return (
        <div className='mt-6 mx-2 relative'>
            
            <button
                ref={prevRef}
                className='custom-swiper-button-prev text-xl flex items-center justify-center bg-white rounded-full w-10 h-10 text-black absolute top-1/2 transform -translate-y-1/2 z-20 left-0.5 cursor-pointer'
            >
                <FaArrowLeft />
            </button>
            <button
                ref={nextRef}
                className='custom-swiper-button-next text-xl flex items-center justify-center bg-white rounded-full w-10 h-10 text-black absolute top-1/2 transform -translate-y-1/2 z-20 right-2 cursor-pointer'
            >
                <FaArrowRight />
            </button>

            <div className='lg:hidden'>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={3}
                    grabCursor={true}
                    loop={true}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    onSwiper={(swiper) => {
                        setTimeout(() => {
                            swiper.navigation.init();
                            swiper.navigation.update();
                        });
                    }}
                >
                    {meals.map((meal) => (
                        <SwiperSlide key={meal.idMeal}>
                            <RecipeCard meal={meal} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='max-lg:hidden'>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={5}
                    grabCursor={true}
                    loop={true}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    onSwiper={(swiper) => {
                        setTimeout(() => {
                            swiper.navigation.init();
                            swiper.navigation.update();
                        });
                    }}
                >
                    {meals.map((meal) => (
                        <SwiperSlide key={meal.idMeal}>
                            <RecipeCard meal={meal} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CategoryCarousel;
