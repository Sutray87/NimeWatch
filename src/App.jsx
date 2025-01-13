import { useState } from 'react'
import Topbar from './layout/topbar'
import Carousel from './components/Carousel'
import AnimeList from './components/AnimeList';
import { useEffect } from 'react';

function App() {
  let animeDatas = [
    {
      id: 1,
      title: "Bleach",
      pathImg: "/images/carousel/bleach.jpg",
      sinopsis:
        "Ichigo Kurosaki never asked for the ability to see ghosts -- he was born with the gift. When his family is attacked by a Hollow -- a malevolent lost soul -- Ichigo becomes a Soul Reaper, dedicating his life to protecting the innocent and helping the tortured spirits themselves find peace.",
      onGoing: true,
      season: 17,
      episode: 366,
      rating: 9.0,
    },
    {
      id: 2,
      title: "Gintama",
      pathImg: "/images/carousel/gintama.jpg",
      sinopsis:
        "Gintoki Sakata adalah seorang samurai nyentrik. Ia selalu mengenakan kimono putih dengan corak biru di bagian lengannya. Gintoki hidup di zaman ketika umat manusia diserang oleh bangsa alien bernama Amanto.",
      onGoing: false,
      season: 9,
      episode: 367,
      rating: 8.9,
    },
    {
      id: 3,
      title: "Naruto",
      pathImg: "/images/carousel/naruto.jpg",
      sinopsis:
        "Dua belas tahun yang lalu, pernah ada seekor rakasa jahat yang dikenal sebagai Rubah Iblis Ekor Sembilan. Suatu malam, rubah itu menyerang desa Konoha dan membunuh banyak orang tak bersalah. Tak satu pun ninja dari Konoha yang bisa menghentikannya, sehingga pemimpin desa, Hokage Keempat, ikut ambil bagian untuk menyelamatkan desa, dan mempertaruhkan nyawanya untuk menyegel Ekor Sembilan ke dalam anak laki-laki yang baru lahir.",
      onGoing: false,
      season: 5,
      episode: 220,
      rating: 8.6,
    },
    {
      id: 4,
      title: "One Piece",
      pathImg: "/images/carousel/onePiece.jpg",
      sinopsis:
        "One Piece adalah nama yang diberikan dunia untuk semua harta yang diperoleh oleh Raja Bajak Laut Gol D. Roger. Setidaknya sebagian darinya pernah menjadi milik Joy Boy selama Abad Kekosongan. Harta karun tersebut konon memiliki nilai yang tak terbayangkan, dan saat ini berada di pulau terakhir dari Grand Line: Raftel.",
      onGoing: true,
      season: 20,
      episode: 1080,
      rating: 9.3,
    },
    {
      id: 5,
      title: "One Punch Man",
      pathImg: "/images/carousel/onePunchMan.jpg",
      sinopsis:
        "Awal kisahnya bermula dari pemuda bernama Saitama yang memiliki hobi unik sedari kecil yaitu menjadi seorang pahlawan. Untuk mewujudkan impiannya itu Saitama berupaya keras dengan terus berlatih serta berguru tanpa henti selama tiga tahun.",
      onGoing: true,
      season: 2,
      episode: 24,
      rating: 8.7,
    },
    {
      id: 6,
      title: "Spy X Family",
      pathImg: "/images/carousel/spyXFamily.jpg",
      sinopsis:
        "Untuk menjaga perdamaian antara negara-negara saingan Westalis dan Ostania, agen Westalis dengan nama sandi 'Twilight' ditugaskan untuk memata-matai Donovan Desmond, pemimpin partai politik ekstremis di Ostania.",
      onGoing: true,
      season: 2,
      episode: 25,
      rating: 8.8,
    },
  ];

  const [currentAnime, setCurrentAnime]   = useState(1)

  let getAnimeDataById = animeDatas.filter((anime) => anime.id === currentAnime)

  let active = [...animeDatas].map((anime) => ({
      ...anime,
      isAnimeActive : anime.id === getAnimeDataById[0].id
  }));


  function handleClickAnime(id){
    setCurrentAnime(id)
}

  const [searchAnimeVal, setSearchAnimeVal]   = useState('')
  const [arrAnimeBySearch, setArrAnimeBySearch] = useState(Array())
  
  let searchVal = (value) =>{
    setSearchAnimeVal(value)
  }

  useEffect(() => {
    if(searchAnimeVal === ''){
      setArrAnimeBySearch([...active])
      return
    }

    let regex = new RegExp(searchAnimeVal, 'i')
    const filterAnime = active.filter((anime) => regex.test(anime.title))
    setArrAnimeBySearch(filterAnime)
    
  }, [searchAnimeVal])

  return (
    <>
    <div className="container h-screen w-screen mx-auto">
      <div className='W-full bg-bodyBg bg-fixed bg-center -z-50'>
        <div className="h-full w-full bg-black-900 bg-opacity-70">
          <Topbar/>
          <div className='w-8/12 mx-auto bg-black-900 bg-opacity-60 rounded-xl'>
            <Carousel carouselItems={animeDatas}/>
          </div>
          <div className='w-8/12 mx-auto rounded-xl'>
            <AnimeList animeData={arrAnimeBySearch} clickAnime={getAnimeDataById} onClickAnime={handleClickAnime} search={searchVal}/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
