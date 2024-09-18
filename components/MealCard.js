import React from 'react';
import Link from 'next/link';
import { FaYoutube } from 'react-icons/fa';

const MealCard = ({ meal }) => {
    return (
        <Link href={meal.strYoutube} passHref>
            <div className='relative bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-[1.15] cursor-pointer'>
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className='w-full  object-cover rounded-t-lg transition-opacity duration-300 hover:opacity-30'
                />
                <div className='absolute top-18 left-16 -right-7  z-10 flex items-center justify-center w-12 h-12 bg-red-600 rounded-full text-white opacity-0 hover:opacity-100 transition-opacity duration-300'>
                    <FaYoutube className='text-2xl' />
                </div>
                <div className='p-4'>
                    <h3 className='text-center text-lg font-semibold h-20  overflow-hidden text-gray-800'>
                        {meal.strMeal}
                    </h3>
                </div>
            </div>
        </Link>
    );
};

export default MealCard;
