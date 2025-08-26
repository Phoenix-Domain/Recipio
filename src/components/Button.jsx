function Button({ content, onClick }){
  return(
    <button className="text-white bg-[#07534a] py-2 px-4 rounded-md" onClick={onClick}>
      {content}
    </button>
  )
}

export default Button