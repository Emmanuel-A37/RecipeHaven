'use client';
import { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import RecipeCard from './RecipeCard';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PAGE_SIZE = 12; 

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const recipeRefs = useRef([]); 
  const sectionRef = useRef(null); 

  useEffect(() => {
    const fetchRecipes = async () => {
      const categoryResponse = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const categoryData = await categoryResponse.json();
      const categories = categoryData.meals.map(meal => meal.strCategory);
      
      let allMeals = [];

      for (const category of categories) {
        const mealResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const mealData = await mealResponse.json();
        allMeals = allMeals.concat(mealData.meals);
      }
      if (allMeals) {
        const totalRecipes = allMeals.length;
        setTotalPages(Math.ceil(totalRecipes / PAGE_SIZE));
        setRecipes(allMeals.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE));
      }
    };

    fetchRecipes();
  }, [currentPage]);

  useEffect(() => {
    recipeRefs.current.forEach((ref, index) => {
      if (ref) { 
        gsap.fromTo(ref, 
          { opacity: 0, y: 20 }, 
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: ref,
              start: 'top 80%', 
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });
  }, [recipes]);


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full p-4 mt-20 " id='recipes' ref={sectionRef}>
      <h3 className='text-center text-3xl mb-8'>All Recipes</h3>
      <div className="grid grid-cols-3 gap-4 lg:grid-cols-5">
        {recipes.map((recipe, index) => (
          <div 
            key={recipe.idMeal} 
            ref={el => (recipeRefs.current[index] = el)}
          >
            <RecipeCard meal={recipe} />
          </div>
        ))}
      </div>
      <div className=" flex justify-center items-center mt-4 space-x-4">
        <button 
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} 
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          <FaArrowLeft />
        </button>
        <h3>{`Page ${currentPage} of ${totalPages}`}</h3>
        <button 
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))} 
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Recipes;
