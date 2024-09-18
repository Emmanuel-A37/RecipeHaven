import { CategoryCarousel } from '@/components';
import { categories } from '@/constants.js';
import React, {Suspense} from 'react';

const Home = () => {
    return (
        <div className='my-8'>
            <h1 className='text-black text-2xl text-center mb-8'>All Categories</h1>
            <div className='flex flex-col items-center gap-10'>
            <Suspense fallback={<div>Loading...</div>}>
                {categories.map((category) => (
                    <div key={category} className='flex flex-col w-full max-w-5xl'>
                        <h3 className='text-black text-start text-xl mb-1 ml-3'>{category}</h3>
                        <div className='w-full'>
                            <CategoryCarousel category={category} />
                        </div>
                    </div>
                ))}
            </Suspense>
                
            </div>
        </div>
    );
};

export default Home;
