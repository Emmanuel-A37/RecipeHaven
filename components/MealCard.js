import React from 'react';
import Link from 'next/link';


const MealCard = ({ meal }) => {
    return (
        <Link href={meal.strYoutube} passHref>
            <div className='relative bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-[1.15] cursor-pointer'>
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className='w-full  object-cover rounded-t-lg transition-opacity duration-300 hover:opacity-30'
                />
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
