import { useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card';

function Features(){
  const [meal, setMeal] = useState([]);

  async function fetchData(){
    try{
      const requests = Array.from({length:10}, () => 
      axios.get('https://www.themealdb.com/api/json/v1/1/random.php'));

      const response = await Promise.all(requests);

      const mealData =  response.map(res => res.data.meals[0])

      setMeal(mealData);
    }catch(err){
      console.log(err)
    }
  }


  useEffect(() => {
    fetchData();
  },[])

  
  return (
    <section>
      <h2>Featured recipes</h2>
      <article className='grid grid-cols-2 gap-5 p-4'>
        {meal.map((meal, index) =>{
          return <Card key={index} name={meal.strMeal} image={meal.strMealThumb} category={meal.strCategory} region={meal.strArea} source={meal.strSource} youtube={meal.strYoutube}/>
        })}
      </article>
    </section>
  )
}

export default Features