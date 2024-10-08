import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa"
import CountryCard from '../CountryCard'
import Navbar from '../Navbar'
import './index.css'

const countriesList = [
  {
    id: 1,
    country: "United States",
    description: "Home to top universities like Harvard and MIT, the U.S. offers diverse programs and cultures. Experience a mix of innovation and tradition in education.",
    imageUrl: "https://img.freepik.com/free-photo/dunster-house-cambridge-usa_1268-14362.jpg?semt=ais_hybrid",
  },
  {
    id: 2,
    country: "United Kingdom",
    description: "Renowned for its rich history and prestigious institutions like Oxford and Cambridge, the UK provides a unique blend of academic excellence and cultural experiences.",
    imageUrl: "https://img.freepik.com/free-photo/tower-bridge-london-uk_268835-1403.jpg?semt=ais_hybrid"
  },
  {
    id: 3,
    country: "Canada",
    description: "Known for its welcoming environment and high-quality education, Canada is home to world-class universities like the University of Toronto.",
    imageUrl: "https://img.freepik.com/free-photo/ottawa-parliament-hill-building_649448-3632.jpg?semt=ais_hybrid" 
  },
  {
    id: 4,
    country: "Australia",
    description: "With stunning landscapes and vibrant cities, Australia offers excellent education opportunities at institutions like the University of Melbourne.",
    imageUrl: "https://img.freepik.com/free-photo/beautiful-shot-sydney-harbor-bridge-with-light-pink-blue-sky_181624-16041.jpg?semt=ais_hybrid" 
  },
  {
    id: 5,
    country: "Germany",
    description: "Famous for its strong engineering programs and no tuition fees for international students, Germany is a top choice for higher education.",
    imageUrl: "https://img.freepik.com/free-photo/building-with-columns_1160-803.jpg?semt=ais_hybrid" 
  },
  {
    id: 6,
    country: "France",
    description: "A hub of culture and art, France is home to prestigious institutions like Sorbonne University, providing a rich educational experience.",
    imageUrl: "https://img.freepik.com/free-vector/sorbonne-university-paris-historic-european-landmark_1308-160042.jpg?semt=ais_hybrid" 
  },
  {
    id: 7,
    country: "Japan",
    description: "Combining tradition and modernity, Japan offers excellent education with a focus on technology and innovation at universities like the University of Tokyo.",
    imageUrl: "https://img.freepik.com/free-photo/front-osaka-castle-japan-blue-sky_1150-10905.jpg?semt=ais_hybrid" 
  },
  {
    id: 8,
    country: "Netherlands",
    description: "Renowned for its high-quality education system and a wide range of English-taught programs, the Netherlands is a popular destination for international students.",
    imageUrl: "https://img.freepik.com/free-photo/beautiful-shot-historic-binnenhof-castle-netherlands_181624-41940.jpg?semt=ais_hybrid" 
  },
  {
    id: 9,
    country: "Singapore",
    description: "A global education hub, Singapore boasts top universities and a multicultural environment, making it an attractive destination for students.",
    imageUrl: "https://img.freepik.com/free-photo/architecture-independence-palace-ho-chi-minh-city_181624-21243.jpg?semt=ais_hybrid"
  },
  {
    id: 10,
    country: "New Zealand",
    description: "Known for its stunning landscapes and friendly locals, New Zealand offers high-quality education at institutions like the University of Auckland.",
    imageUrl: "https://img.freepik.com/free-photo/closeup-shot-two-domed-towers-old-royal-naval-college-greenwich-london_181624-44376.jpg?semt=ais_hybrid" // University of Auckland
  },
  {
    id: 11,
    country: "Sweden",
    description: "Famous for its innovative education system and emphasis on research, Sweden is home to renowned institutions like Lund University.",
    imageUrl: "https://img.freepik.com/free-photo/wide-angle-shot-schonbrunn-palace-vienna-austria-with-cloudy-blue-sky_181624-9096.jpg?semt=ais_hybrid" // Lund University
  },
  {
    id: 12,
    country: "South Korea",
    description: "With a focus on technology and innovation, South Korea's top universities, such as Seoul National University, offer a unique learning environment.",
    imageUrl: "https://img.freepik.com/free-photo/gyeongbokgung-palace_74190-3232.jpg?semt=ais_hybrid" // Seoul National University
  },
  {
    id: 13,
    country: "Italy",
    description: "Rich in history and culture, Italy offers prestigious universities like the University of Bologna, providing a unique academic experience.",
    imageUrl: "https://img.freepik.com/free-photo/beautiful-shot-osborne-cloudy-skies-uk_181624-60233.jpg?semt=ais_hybrid" // University of Bologna
  },
  {
    id: 14,
    country: "Spain",
    description: "With a vibrant culture and world-class universities like the University of Barcelona, Spain is an attractive option for international students.",
    imageUrl: "https://img.freepik.com/free-photo/view-park-guell-winter-barcelona_1398-4411.jpg?semt=ais_hybrid" // University of Barcelona
  },
  {
    id: 15,
    country: "Switzerland",
    description: "Known for its high-quality education and research institutions like ETH Zurich, Switzerland combines academic rigor with stunning landscapes.",
    imageUrl: "https://img.freepik.com/free-photo/red-footbridge-saone-river-morning_268835-4013.jpg?semt=ais_hybrid" // ETH Zurich
  },
  {
    id: 16,
    country: "Ireland",
    description: "With a rich literary history and institutions like Trinity College Dublin, Ireland offers a warm welcome to international students.",
    imageUrl: "https://img.freepik.com/free-photo/cec-bank-building_1268-14720.jpg?semt=ais_hybrid" // Trinity College Dublin
  },
  {
    id: 17,
    country: "Finland",
    description: "Renowned for its innovative education system, Finland offers a unique approach to learning at universities like the University of Helsinki.",
    imageUrl: "https://img.freepik.com/free-photo/amazing-shot-buildings-unique-architecture-gamla-stan-stockholm-sweden_181624-48921.jpg?semt=ais_hybrid" // University of Helsinki
  },
  {
    id: 18,
    country: "Belgium",
    description: "Home to institutions like KU Leuven, Belgium provides a diverse educational landscape and is known for its multilingual environment.",
    imageUrl: "https://img.freepik.com/free-photo/low-angle-shot-famous-vieille-bourse-lille-france_181624-16249.jpg?semt=ais_hybrid" // KU Leuven
  },
  {
    id: 19,
    country: "Austria",
    description: "With a rich cultural heritage and universities like the University of Vienna, Austria offers a unique blend of education and history.",
    imageUrl: "https://img.freepik.com/free-photo/wide-angle-shot-schonbrunn-palace-vienna-austria-with-cloudy-blue-sky_181624-9096.jpg?semt=ais_hybrid" // University of Vienna
  },
  {
    id: 20,
    country: "Norway",
    description: "Known for its stunning natural beauty and free education for international students, Norway is an attractive destination for higher learning.",
    imageUrl: "https://img.freepik.com/free-photo/aerial-shot-houses-buildings-city-oslo-noway_181624-34404.jpg?semt=ais_hybrid" // University of Oslo
  },
  {
    id: 21,
    country: "Malaysia",
    description: "A multicultural hub, Malaysia offers affordable education and institutions like the University of Malaya, making it a popular choice for students.",
    imageUrl: "https://img.freepik.com/free-photo/architecture-independence-palace-ho-chi-minh-city_181624-21243.jpg?semt=ais_hybrid" // University of Malaya
  }
];

const handleSearch = (event, setSearch, setFilteredCountries) => {
  setSearch(event.target.value)
  const filteredCountries = countriesList.filter(eachItem => eachItem.country.toLowerCase().includes(event.target.value.toLowerCase()))
  setFilteredCountries(filteredCountries)
}

const Home = () => {
  const [search, setSearch] = useState("")
  const [filteredCountries, setFilteredCountries] = useState(countriesList)
  return (
    <div>
      <Navbar />
      <div className='home-content'>
        <div className='search-container'>
          <input type="search" value={search} placeholder='Search' onChange={(event)=> handleSearch(event, setSearch, setFilteredCountries)} className='search-input' />
          <FaSearch className='search-icon' />
        </div>
        <div className='country-list'>
          {filteredCountries.map(eachItem => <CountryCard item={eachItem} key={eachItem.id} />)}
        </div>
      </div>
    </div>
  )
}

export default Home
