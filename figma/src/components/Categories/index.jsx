import { useState } from "react";
import "./index.scss"
import { FaArrowRight } from "react-icons/fa";

const Categories = () => {
    const [img1, setImg1] = useState("../../../imgs/hero_endframe__cvklg0xk3w6e_large 2.png")
    const [img2, setImg2] = useState("https://images.news18.com/ibnlive/uploads/2022/02/samsung-galaxy-s21-ultra.jpg")
    const [img3, setImg3] = useState("https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/10/iphone-12-pro-15-920x512.png")
    const [defaultImage, setDefaultImage] = useState("../../../imgs/hero_endframe__cvklg0xk3w6e_large 2.png")
    const [defaultIcon, setDefaultIcon] = useState("../../../imgs/1200px-Apple_gray_logo 1.png")
    const [icon1, setIcon1] = useState("../../../imgs/1200px-Apple_gray_logo 1.png")
    const [icon2, setIcon2] = useState("https://almasiran.ir/wp-content/uploads/2021/06/samsung-logo.png")
    const [defaultSeries, setDefaultSeries] = useState("Samsung S Series")
    const [serie1,setSerie1] = useState("Iphone 14 Series")
    const [serie2,setSerie2] = useState("Samsung S Series")


    const firstImage = ()=>{
        setDefaultImage(img1)
        setDefaultIcon(icon1)
        setDefaultSeries(serie1)
    }
    const secondImage = ()=>{
        setDefaultImage(img2)
        setDefaultIcon(icon2)
        setDefaultSeries(serie2)
    }
    const thirdImage = ()=>{
        setDefaultImage(img3)
        setDefaultIcon(icon1)
        setDefaultSeries(serie1)
    }
    return (
        <section id="categories">
            <div className="container">
                <div className="categoriesbox">
                    <div className="catleft">
                        <ul id >
                            <li>Women's Fashion</li>
                            <li>Men's Fashion</li>
                            <li>Electronicss</li>
                            <li>Home & Lifestyle</li>
                            <li>Medicine</li>
                            <li>Sports and Outdoors</li>
                            <li>Baby's and Toys</li>
                            <li>Groceries & Pets</li>
                            <li>Health & Beauty</li>
                        </ul>
                    </div>
                    <div className="catright">
                        <div className="swipebuttons">  
                            <button onClick={firstImage}></button>
                            <button onClick={secondImage}></button>
                            <button onClick={thirdImage}></button>
                        </div>
                        {/* <img src="../../../imgs/Frame 560.png" alt="" /> */}
                        <div className="phones">
                            <div className="phonesleft">
                                <div className="top">
                                    <img src={defaultIcon} alt="" />
                                    <p>{defaultSeries}</p>
                                </div>
                                <div className="mid">
                                    <h4>Up to 10% off Voucher</h4>
                                </div>
                                <div className="bottom">
                                    <button>Shop Now <FaArrowRight /></button>
                                </div>
                            </div>
                            <div className="phonesright">
                                <img src={defaultImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories