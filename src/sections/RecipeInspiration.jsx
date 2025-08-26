import Button from "../components/button"

function RecipeInspiration(){
  return(
    <section className='p-1'>
      <div className='flex justify-between my-4 items-center'>
        <h2 className='text-3xl font-bold'>
          Recipe Inspiration
        </h2>
        
        <a href="" className='text-cyan-800 font-semibold'>
          <Button content='Next Recipe' />
        </a>
      </div>

      <article className='grid grid-cols-2 gap-5 p-4'>
        
      </article>

    </section>
  )
}

export default RecipeInspiration