import React from 'react'
import spotify from '../assets/spotify.png'
import dp from '../assets/displayPicture.jpeg'
import {ImSearch} from 'react-icons/im';
import LoggedInUser from './LoggedInUser';

const NavBar = () => {
  return (
    <div class="fixed bg-black w-full h-[70px] flex flex-column">
      <div class='w-[35%] flex'>
        <img  src={dp}  class='rounded-full h-[40px] w-[40px] mt-auto mb-auto ml-2'></img>
        <p class='pl-2 font-bold text-[15px] bg-black text-white mt-auto mb-auto ml-2'>Deepak Fletcher</p>
      </div>
      <div class="bg-black m-auto flex">
        <img src={spotify} class="bg-black h-[40px] w-[40px]"></img>
        <p class='pl-2 font-bold text-2xl bg-black text-white m-auto'>Spotify</p>
      </div>
      <div class='w-[35%] flex'>
        <div class='w-[150px] grow bg-white ml-[40%] mt-auto mb-auto h-[25px] rounded-full pr-2'>
        </div>
        <ImSearch class='text-white mt-auto mb-auto ml-[10px] mr-[10px] w-[40px] text-[25px]'/>
      </div>
    </div>
  )
}

export default NavBar