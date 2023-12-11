import "./index.scss"
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CgAppleWatch } from "react-icons/cg";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";  
import { IoGameController } from "react-icons/io5";

const Browse = () => {
    return (
        <section id="browse">
            <div className="container">
                <div className="browsebox">
                    <div className="browsetop">
                        <div className="redtop">
                            <div className="redbox"></div>
                            <p>Categories</p>
                        </div>
                        <h2>Browse By Category</h2>
                    </div>
                    <div className="browsebottom">
                        <div className="card">
                            <span><IoPhonePortraitOutline /></span>
                            <p>Phones</p>
                        </div>
                        <div className="card">
                            <span><HiOutlineDesktopComputer /></span>
                            <p>Computers</p>
                        </div>
                        <div className="card">
                            <span><CgAppleWatch /></span>
                            <p>Smart Watch</p>
                        </div>
                        <div className="card">
                            <span><CiCamera /></span>
                            <p>Camera</p>
                        </div>
                        <div className="card">
                            <span><CiHeadphones /></span>
                            <p>Headphones</p>
                        </div>
                        <div className="card">
                            <span><IoGameController /></span>
                            <p>Gaming</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Browse