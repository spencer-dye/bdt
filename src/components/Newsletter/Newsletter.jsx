import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <section>
        <div className="container">
            <div className="newsletter">
                <div>
                    <h3 className='is--whiteTxt'>Subscribe to our newsletter</h3>
                    <p className="pLight is--topPadSmall">Get updates, learn about job opportunities, and stay in the loop on our work to modernize benefits access.</p>
                </div>
                <form>
                    <input type="email" name="emailNewsletter" id="emailNewsletter" placeholder='Email address' required/>
                    <button className="mainBtn mainBtnAltHover">Subscribe</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Newsletter
