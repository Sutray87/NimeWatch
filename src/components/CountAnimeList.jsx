export default function CountAnimeList({dataAnime}){
    return(
        <div className="text-white text-sm w-full flex justify-center">
            found {dataAnime.length} result
        </div>
    )
}