import React from "react";

interface Props {}


const SearchForm:React.FC<Props> = ()=>{

    return (
        <div>
            <form className="flex justify-between h-12 w-96  items-center border-0 rounded-md bg-white text-gray-300 text-xs shadow-md">
                <input type="text" className="bg-transparent border-0 outline-none w-3/5 px-3" value={"keywords ..."} />
                <button className="text-sm bg-blue-500 hover:bg-blue-400 m-2 text-center text-white border-0 rounded-md w-1/4  h-10">Search</button>
            </form>
        </div>
    )
}

export default SearchForm