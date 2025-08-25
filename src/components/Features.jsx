import { useState, useEffect} from 'react'
import axios from 'axios'

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
      <article className=''>

      </article>
    </section>
  )
}

export default Features