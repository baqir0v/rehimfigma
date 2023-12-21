import React from 'react'
import Categories from '../../components/Categories'
import Browse from '../../components/BrowseByCategories'
import FlashSales from '../../components/FlashSales'
import BestSellingProducts from '../../components/BestSelling'
import EnhanceYourMusicExperience from '../../components/EnhanceMusic'
import NewArrival from '../../components/newArrivals'

function Home() {
  return (
    <div>
        <Categories/>
        <Browse/>
        <FlashSales/>
        <BestSellingProducts/>
        <EnhanceYourMusicExperience/>
        <NewArrival/>
    </div>
  )
}

export default Home