import Hero from "../components/Hero"
import Popular from "../components/popular/popular"
import Offers from "../components/Offers/offers"
import NewCollection from "../components/Newcollection/Newcollection"
import NewsLetter from "../components/NewsLetter/NewsLetter"

const Shop = () => {
  return (
    <div>
    <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </div>
  )
}
export default Shop;