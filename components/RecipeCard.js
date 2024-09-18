import React from 'react';
import Link from 'next/link';

const RecipeCard = ({ meal }) => {
    return (
        <Link href={`/${meal.idMeal}`} className=' h-full'>
            <div className='bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-[1.15] '>
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className='w-full h-48 object-cover rounded-t-lg'
                />
                <div className='p-4'>
                    <h3 className='text-center text-lg h-20  overflow-hidden font-semibold text-gray-800'>
                        {meal.strMeal}
                    </h3>
                </div>
            </div>
        </Link>
    );
};

export default RecipeCard;
