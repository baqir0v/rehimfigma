import "./index.scss"
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id='contactpage'>
      <div className="container">
        <div className="contactbox">
          <div className="contactleft">
            <div className="lefttop">
              <ul>
                <li><div className='circle'><FaPhoneAlt /></div> <h3>Call To Us</h3></li>
                <li>We are available 24/7, 7 days a week.</li>
                <li>Phone: +8801611112222</li>
              </ul>
            </div>
            <hr />
            <div className="leftbottom">
              <ul>
                <li><div className="circle"><FaRegEnvelope /></div> <h3>Write To US</h3></li>
                <li>Fill out our form and we will contact you within 24 hours.</li>
                <li>Emails: customer@exclusive.com</li>
                <li>Emails: support@exclusive.com</li>
              </ul>
            </div>
          </div>
          <div className="contactright">
            <ul>
              <li><input type="text" placeholder="Your Name"/></li>
              <li><input type="text" placeholder="Your Email"/></li>
              <li><input type="text" placeholder="Your Phone"/></li>
            </ul>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Massage"></textarea>
            <div className="btndiv">
              <button>Send Massage</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact