function Hero(){
  return (
    <header className='bg-gradient-to-r from-teal-600 to-cyan-700 py-15 px-4 flex flex-row'>
      <article className="w-fit">
        <h1 className="text-white text-5xl font-bold text-left mb-8">
          Find the perfect recipe for any occasion
        </h1>

        <p className="text-white ">
          Discover delicious recipes for breakfast, lunch, dinner and everything in between.
        </p>

        <div className="mt-6 flex flex-row gap-0 w-full">
          <input type="text" className="outline-0 py-[0.4rem] px-4 bg-white text-[#07534a] rounded-l-md w-full" placeholder="Search recipes, ingredients"/>

          <label htmlFor="" className="text-white bg-[#07534a] py-2 px-4 rounded-r-md">Search</label>
        </div>
      </article>

      <div className="w-[50%]"></div>
    </header>
  )
}

export default Hero;