function Nav(){
  return(
    <nav className='flex justify-between items-center py-4 px-2'>
      <h3 className='text-xl font-bold'>DevSnack</h3>

      <ul className='*:hover:text-[#14B8A6] font-semibold flex justify-between gap-3'>
        <li>Home</li>
        <li>Search</li>
        <li>Favorites</li>
      </ul>

      <div className='bg-[#14B8A6] text-white py-1 px-1 rounded-full text-xl flex justify-start'>
        {/* toggle div */}
      <button className="mr-10 rotate-90">
        🌙
      </button>
      </div>
    </nav>
  )
}

export default Nav;