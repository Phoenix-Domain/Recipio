function Nav(){
  return(
    <nav className='flex justify-between items-center'>
      <h3 className='text-xl font-bold'>DevSnack</h3>

      <ul>
        <li>Home</li>
      </ul>
      <ul>
        <li>Search</li>
      </ul>
      <ul>
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