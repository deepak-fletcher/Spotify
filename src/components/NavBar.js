import React from 'react'
import spotify from '../assets/spotify.png'
import dp from '../assets/displayPicture.jpeg'
import {ImSearch} from 'react-icons/im';
import LoggedInUser from './LoggedInUser';

const NavBar = () => {
  return (
    <div className="bg-black w-full h-[70px] flex flex-column">
      <div className='w-[35%] flex'>
        <img  src={dp}  className='rounded-full h-[40px] w-[40px] mt-auto mb-auto ml-2'></img>
        <p className='pl-2 font-bold text-lg bg-black text-white mt-auto mb-auto ml-2'>Deepak Fletcher</p>
      </div>
      <div className="bg-black m-auto flex">
        <img src={spotify} className="bg-black h-[40px] w-[40px]"></img>
        <p className='pl-2 font-bold text-2xl bg-black text-white m-auto'>Spotify</p>
      </div>
      <div className='w-[35%] flex'>
        <div className='w-[200px] bg-white ml-[40%] mt-auto mb-auto h-[30px] rounded-full pr-2'>
        </div>
        <ImSearch className='text-white m-auto h-[35px] w-[35px]'/>
      </div>
    </div>
  )
}

export default NavBar