"use client"

import React , {useState} from "react"

import Search from "./search"


const allusers = ["home","About","cusor","border","width","contact-us","landing"]

interface GlobalSearchProps{}

const GlobalSearch = ({}:GlobalSearchProps)=>{
    
   const [users, setUsers]= useState(allusers)

   const handleSearch = (text: string) => {
    const filteredSearch = allusers.filter((user) =>user.includes(text))
    setUsers(filteredSearch)
}

    return(
        <>
          <div>
            <Search onchange={handleSearch}/> 
          </div>
          <div>
            <ul>
                {users.map((user)=>(
                    <li key={user}>
                      <a href={`/search/${user}`}>{user}</a>
                    </li>
                ))}
            </ul>
          </div>
        </>
    )
}

export default GlobalSearch;