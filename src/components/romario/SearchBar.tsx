import { useRouter } from 'next/router';
import SearchIcon from '../icons/SearchIcon';
import React, { FormEvent, useState } from 'react';
import { ROUTES } from "@lib/routes";
interface SearchProps{
    background:boolean,
    classNames:string
    
}
export default function SearchBar({background,classNames} : SearchProps){
    const [searchText,setSearchText] = React.useState('')
    const router = useRouter()

    const handleSearchSubmit = async(e: FormEvent) => {
        e.preventDefault()
        router.push(`${ROUTES.SEARCH}?q=${searchText}`)
    }

    return (
       <div className={ (background) ? classNames + ' searchbar-wrapper bg-gray-100' : classNames + ''}>
        <form className='flex' onSubmit={handleSearchSubmit}>
            <input type="text" name="q" onChange={(e) => {setSearchText(e.target.value)}} className='w-full focus:outline-0' placeholder='Search Keywords here'/>
            <button>
                <SearchIcon/>
            </button>
        </form>
       </div>
    )
}