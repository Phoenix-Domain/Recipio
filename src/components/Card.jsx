function Card({ name, image, category, region, source, youtube}){
  return(
    <article className='flex flex-col w-full bg-gray-300 shadow-md rounded-3xl'>
      <div className="relative w-full rounded-3xl">
        <div className="flex flex-col relative rounded-3xl">
          <div className="w-full h-[100%] absolute top-0 left-0 z-2 bg-[rgba(0,0,0,0.6)] rounded-3xl">

          </div>
          <div className="text-white flex justify-between py-2 px-1 absolute top-0 right-0 z-3">
            <p className="text-4xl bg-[rgba(255,255,255,0.9)] rounded-full px-2 font-bold text-gray-700">♡</p>
          </div>

          <div className="bg-[rgba(0,0,0,0.9)] text-white flex justify-between py-2 px-4 absolute bottom-0 left-0 z-3 w-full">
            <p className="bg-gray-800 p-1 rounded-full">{category}</p>

            <p className="bg-gray-800 p-1 rounded-full">{region}</p>
          </div>
        <img src={image} alt={`Photo of ${name}`} className="rounded-3xl"/>

        
        </div>
      </div>

      <div className="p-4 w-full">
        <h3 className="text-xl font-semibold">
          {name}
        </h3>

        <p className="bg-gray-800 p-1 rounded-full my-4 w-fit py-2 px-4">
          <a href={source} className="text-white" target="_blank">Click here for the source link</a>
        </p>

        <p className="bg-gray-800 p-1 rounded-full my-4 w-fit py-2 px-4">
          <a href={youtube} className="text-white" target="_blank">Watch the tutorial</a>
        </p>        
        
      </div>
      
    </article>
  )
}

export default Card;