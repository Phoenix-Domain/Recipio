function Card({ name, image, category, region}){
  return(
    <article className='flex flex-col gap-2'>
      <div className="relative">
        <div className="flex flex-col relative">
          <div className="w-full h-[100%] absolute top-0 left-0 z-2 bg-[rgba(0,0,0,0.6)]">

          </div>
          <div className="text-white flex justify-between py-2 px-1 absolute top-0 right-0 z-3">
            <p className="text-4xl bg-[rgba(255,255,255,0.9)] rounded-full px-2 font-bold text-gray-700">♡</p>
          </div>

          <div className="bg-[rgba(0,0,0,0.9)] text-white flex justify-between py-2 px-1 absolute bottom-0 left-0 z-3 w-full ">
            <p className="bg-gray-800 p-1 rounded-full">{category}</p>

            <p className="bg-gray-800 p-1 rounded-full">{region}</p>
          </div>
        <img src={image} alt={`Photo of ${name}`} className="rounded-md"/>

        
        </div>
      </div>

      <div className="border">
        <h3>{name}</h3>
      </div>
      
    </article>
  )
}

export default Card;