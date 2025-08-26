import Button from "../components/button"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from "../components/Card";

function RecipeInspiration(){
  const [meal, setMeal] = useState(null);

  async function fetchData(){
    try{
      const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');

      if(data.meals && data.meals.length > 0){
        setMeal(data.meals[0])
      }
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  
  return(
    <section className='p-1'>
      <div className='flex justify-between my-4 items-center'>
        <h2 className='text-3xl font-bold'>
          Recipe Inspiration
        </h2>
        
        <a href="" className='text-cyan-800 font-semibold'>
          <Button content='Next Recipe' onClick={fetchData} />
        </a>
      </div>

      <article className='grid grid-cols-2 gap-5 p-4'>
        {meal && <Card name={meal.strMeal} image={meal.strMealThumb} category={meal.strCategory} region={meal.strArea} source={meal.strSource} youtube={meal.strYoutube}/>}
      </article>

    </section>
  )
}

export default RecipeInspiration