import React from "react"
import { IoIosArrowBack } from "react-icons/io";
import CountAnimeList from "./CountAnimeList";

export default function AnimeList({animeData, clickAnime, onClickAnime, search}){

 return(
    <>
        <div className='w-full h-100 mt-11 flex justify-between'>
            <div className=' bg-blue-950 h-full w-9/20 p-4 rounded-xl'>
                <div className="relative w-full mb-4">
                    <input type="search" id="default-search" onChange={(e) => search (e.target.value)} className="block sm:w-full md:w-72 lg:w-full px-4 sm:py-2 md:py-3 sm:text-sm md:text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                    <button type="submit" className="text-white absolute end-1 bottom-1 ps-2 pt-1 pb-1.5 px-1">
                        <svg className="sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </button>
                </div>
                <CountAnimeList dataAnime={animeData}/>
                <ul className="text-white">
                {
                    animeData.map((anime) =>(
                        <React.Fragment key={anime.id}>
                            <li key={anime.id} className="h-12 leading-loose">
                                <div className="flex justify-between">
                                    <p className="cursor-pointer hover:text-gray-500  w-full" onClick={() => onClickAnime(anime.id)}>{anime.title}</p>
                                    <span>{anime.isAnimeActive ? <IoIosArrowBack/> : ''}</span>
                                </div>
                                <hr />
                            </li>
                        </React.Fragment>
                        ))
                    }
                </ul>
            </div>
            <div className='bg-blue-950 h-full w-9/20 p-4 rounded-xl'>
                    {
                        clickAnime.map((anime) => (
                            <React.Fragment key={anime.id}>
                                <div className="flex">
                                    <div className="flex-none w-40">
                                        <img src={anime.pathImg} alt={anime.title} className="h-full w-full object-center" />
                                    </div>
                                    <div className="flex-auto">
                                        <div className="flex flex-auto text-white text-xl ml-4">
                                            <div className="flex-none w-1/3 ">Title</div>
                                            <div className="flex-none w-1/12 ">:</div>
                                            <div className="flex-auto ">{anime.title}</div>
                                        </div>
                                        <div className="flex flex-auto text-white text-xl ml-4">
                                            <div className="flex-none w-1/3 ">Season</div>
                                            <div className="flex-none w-1/12 ">:</div>
                                            <div className="flex-auto ">{anime.season} {anime.onGoing ? '(On Going)' : ''}</div>
                                        </div>
                                        <div className="flex flex-auto text-white text-xl ml-4">
                                            <div className="flex-none w-1/3 ">Episode</div>
                                            <div className="flex-none w-1/12 ">:</div>
                                            <div className="flex-auto ">{anime.episode}</div>
                                        </div>
                                        <div className="flex flex-auto text-white text-xl ml-4">
                                            <div className="flex-none w-1/3 ">Rating</div>
                                            <div className="flex-none w-1/12 ">:</div>
                                            <div className="flex-auto ">{anime.rating}</div>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))
                    }
            </div>
        </div>
    </>
 )
}