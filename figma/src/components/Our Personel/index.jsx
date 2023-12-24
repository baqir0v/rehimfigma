import "./index.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules'
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


function OurPersonels() {
    const TomCruise = "https://phantom-marca.unidadeditorial.es/bf4baa5b85e3daf46477e4b5a959535e/resize/828/f/jpg/assets/multimedia/imagenes/2023/12/08/17020335295791.png"
    const EmmaWatson = "https://www.muscleandfitness.com/wp-content/uploads/2017/06/1280-emma-watson-7.jpg?w=1180&quality=86&strip=all"
    const WillSmith = "https://ca-times.brightspotcdn.com/dims4/default/7e5654d/2147483647/strip/true/crop/5271x3630+0+0/resize/1200x826!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F76%2Fab%2F18f51cc9485281532d04cbd7a187%2Ffilm-emancipation-80020.jpg"


  return (
    <section className='OurPersonals'>
    <div className='OurPersonals_container'>
    <Swiper
        slidesPerView={3}
        spaceBetween={140}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='slide'>
          <img src={WillSmith} alt="" />
          <h2>Will Smith</h2>
          <p>Product Designer</p>
          <div className='social_medias'>
          <CiTwitter/>
            <FaInstagram/>
            <FaLinkedinIn/>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={EmmaWatson} alt="" />
          <h2>Emma Watson</h2>
          <p>Managing Director</p>
          <div className='social_medias'>
            <CiTwitter/>
            <FaInstagram/>
            <FaLinkedinIn/>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={TomCruise} alt="" />
          <h2>Tom Cruise</h2>
          <p>Founder & Chairman</p>
          <div className='social_medias'>
            <CiTwitter/>
            <FaInstagram/>
            <FaLinkedinIn/>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
        <img src={WillSmith} alt="" />
        <h2>Will Smith</h2>
        <p>Product Designer</p>
        <div className='social_medias'>
          <CiTwitter/>
            <FaInstagram/>
            <FaLinkedinIn/>
        </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
        <img src={EmmaWatson} alt="" />
        <h2>Emma Watson</h2>
        <p>Managing Director</p>
        <div className='social_medias'>
          <CiTwitter/>
            <FaInstagram/>
            <FaLinkedinIn/>
        </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
        <img src={TomCruise} alt="" />
        <h2>Tom Cruise</h2>
        <p>Founder & Chairman</p>
        <div className='social_medias'>
          <CiTwitter/>
            <FaInstagram/>
            <FaLinkedinIn/>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
   </section>
  )
}

export default OurPersonels