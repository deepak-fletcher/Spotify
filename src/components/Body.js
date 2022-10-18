import React from 'react'

const Body = () => {
  return (
    <div class='bg-black h-full pb-8 pt-[85px]'>
      <div class="flex flex-row h-full">
        <div class='bg-white/[.20] rounded-3xl h-full display w-[300px] mt-2 ml-2 mr-2'>
          <div class='h-[49%]  ml-[5px] mr-[5px] w-[290px] mt-[4px]'>
              <div class='bg-black/[.50] rounded-full h-[35px] p-1 text-white font-bold'>
                <p class='text-center'>Liked Songs</p>
              </div>
          </div>
          <div class='overflow-hidden sh-[50%] ml-[5px] mr-[5px] w-[290px] mt-[5px]'>
              <div class='bg-black/[.50] rounded-full h-[35px] p-1 text-white font-bold'>
                <p class='text-center'>Playlists</p>
              </div>
          </div>
        </div>
        <div class='rounded-3xl h-full w-full mt-2 mr-2'>
        <div class='h-[79%] bg-white/[.20] ml-[5px] mr-[5px] w-[98%]  rounded-3xl'>
              <div class='text-white font-bold'> <p class='text-center pt-2'>Search for songs...</p> </div>
          </div>
          <div class='h-[20%] bg-white/[.20] ml-[5px] mt-[8px] mr-[5px] w-[98%]  rounded-3xl'>
              <div class='text-white font-bold'> <p class='text-center pt-2'>Now playing</p> </div>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default Body