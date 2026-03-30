import Hero from '../Components/Hero/Hero.jsx'
import Popular from '../Components/Popular/Popular.jsx'
import Offers from '../Components/Offers/Offers.jsx'
import Collections from '../Components/NewCollections/NewCollections.jsx'
import NewsLetter from '../Components/NewsLetter/NewsLetter.jsx'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Collections/>
      <Offers/>
      <Popular/>
      <NewsLetter/>
    </div>
  )
}

export default Shop