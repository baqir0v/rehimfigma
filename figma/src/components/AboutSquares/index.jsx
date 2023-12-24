import "./index.scss"
import { CiShop } from "react-icons/ci";
import { ImCoinDollar } from "react-icons/im";
import { CiGift } from "react-icons/ci";
import { TbMoneybag } from "react-icons/tb";


function AboutSquares() {
    return (
        <section id="squares">
            <div className="container">
                <div className="squaresdiv">
                    <div className="square">
                        <div className="icon">
                            <CiShop />
                        </div>
                        <h2>10.5k</h2>
                        <p>Sallers active our site</p>
                    </div>
                    <div className="square">
                        <div className="icon">
                            <ImCoinDollar />
                        </div>
                        <h2>33k</h2>
                        <p>Mopnthly Produduct Sale</p>
                    </div>
                    <div className="square">
                        <div className="icon">
                            <CiGift />
                        </div>
                        <h2>45.5k</h2>
                        <p>Customer active in our site</p>
                    </div>
                    <div className="square">
                        <div className="icon">
                            <TbMoneybag />
                        </div>
                        <h2>25k</h2>
                        <p>Anual gross sale in our site</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSquares