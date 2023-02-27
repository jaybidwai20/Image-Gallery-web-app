import React, { useState } from 'react'
import image from   './logo.png'
import SearchIcon from '@mui/icons-material/Search';
import   DarkMode from './DarkMode'
function Navbar() {
  const [bool,setbool]=useState(true);
   const toggle=()=>{
    setbool(!bool);

   }



  return (
    <>
    <div  className='a1'>
        <div className='a2'> 
            <div>
            <img src={image} className="a3"/>
            </div>

            <div>
                <div className='a4'>
                <input type="text" style={{"border":"none"}} className="a7" />
                <SearchIcon/>
                </div>
             </div>


            <div  className='a5'>
                <div >
                    <ul className='a6'>
                        <li>Explore</li>
                        <li>Collection</li>
                        <li>Community</li>
                        <DarkMode/>
                        
                    </ul>
                </div>  
                
            </div>
        </div>

    </div>
      
    </>
  )
}

export default Navbar
