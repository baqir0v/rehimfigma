import React, { useEffect, useState } from 'react'
import './index.scss'

import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
const BestSellingProducts = () => {
    const [BestSellingData, setBestSellingData] = useState([])
    useEffect(() => {
        const fetchBestSellingData = async () => {
            try {
                const res = await fetch('http://localhost:3000/product');
                const jsonBestSellingData = await res.json();
                setBestSellingData(jsonBestSellingData);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        }
        fetchBestSellingData()
    },[]);
    return (
        <section className='BestSellingProducts'>
            <div className='BestSellingProducts_container'>
                <div className='BestSellingProducts_title'>
                    <div className='BestSellingProducts_title_left'>
                        <div className='BestSellingProducts_Categories'>
                            <span></span>
                            <p>This Month</p>
                        </div>
                        <div className='BestSellingProducts_This_Month_title'>
                            <h2>Best Selling Products</h2>

                        </div>
                    </div>
                    <div className='BestSellingProducts_title_right'>

                    </div>
                </div>
                <div className='BestSellingProducts_products'>
                    <div className="myBestSellingProducts">
                        {BestSellingData && BestSellingData.map((item) => (
                            <div className='BestSellingProducts_cards'>
                                <div className='bg_image' style={{ width: '270px', height: '250px' }}>

                                    <img src={item.image} alt="" style={{ width: '210px', height: '180px' }} />
                                    <button className='BestSellingProducts_addtowishlist'><FaRegHeart /></button>
                                    <button className='BestSellingProducts_seeDetails'><IoEyeOutline /></button>
                                    <button className='BestSellingProducts_addtocard'>Add to card</button>
                                </div>

                                <div className='BestSellingProducts-txt'>
                                    <h4>{item.name}</h4>
                                    <div className='prices'>
                                        <h2 style={{ color: '#DB4444' }}>${item.newPrice}</h2>
                                        <del style={{ color: '#cfcfcf',}}>{item.oldPrice}</del>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </section>
    )
}

export default BestSellingProducts