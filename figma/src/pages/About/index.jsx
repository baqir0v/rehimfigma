import AboutSquares from "../../components/AboutSquares"
import OurService from "../../components/Delivery"
import OurPersonels from "../../components/Our Personel"
import OurStory from "../../components/Our Story"

function AboutPage() {
  return (
    <div>
        <OurStory/>
        <AboutSquares/>
        <OurPersonels/>
        <OurService/>
    </div>
  )
}

export default AboutPage