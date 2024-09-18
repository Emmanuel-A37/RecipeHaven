'use client';
import { CategoryCarousel, MealCard } from '@/components';
import { numbers } from '@/constants.js';
import {useEffect, useState} from 'react'

const Home = ({params}) => {
    const mealId = params.mealId;
    const [details, setDetails] = useState([]);

    const fetchDetails = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        const data = await response.json();
        setDetails(data.meals[0]);
    }

    useEffect(() => {
        fetchDetails();
    }, [])

    useEffect(() => {
        console.log(details);
        
    }, [details])

  return (
    <div>
        {
            details.length < 1 ?
            <div className='text-center text-2xl my-10'>Loading...</div>
            :
            <div className='my-10 flex flex-col items-center w-full gap-10'>
                <div className='w-[68%] lg:w-[40%]'>
                    <MealCard meal={details}/>
                </div>
                <div className='w-full flex justify-center items-center flex-col flex-wrap'>
                    <h2 className='text-black text-2xl mb-10'>{` Categories : ${details.strTags}`}</h2>
                    <h2 className='text-xl text-black'>Ingredients</h2>
                    <ul>   
                        {
                            numbers.map((i) => {
                                const ingredient = details[`strIngredient${i}`];
                                const measure = details[`strMeasure${i}`];

                                if (ingredient){
                                    return(
                                        <li key={i} className='text-base text-gray-700'>
                                            {`${measure} ${ingredient}`}
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                    <h3 className='text-xl mt-9 text-black'>Instructions</h3>
                    <div className='flex flex-col items-center justify-center max-lg:w-[70vw] lg:w-[60vw]'>
                        {
                        details.strInstructions.split(/(?=\d\))/g).map((instruction, index) => (
                            instruction.trim() && ( 
                            <p key={index} className='mb-1 text-base text-gray-700 text-wrap '>
                                {`${instruction.trim()}.`}
                            </p>
                                )
                            ))
                        }
                    </div>
                    <h3 className='text-xl mt-9 text-black'>Similar Recipes</h3>
                    <div className='w-[80vw] '>
                    <CategoryCarousel category={details.strCategory} />
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default Home