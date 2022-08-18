import React from 'react'
import CardGrid from '../CardGrid/CardGrid.jsx'
import './Hero.css'
import heroImg from '../../images/hero-header-fam-o.png'

const Hero = () => {
  return (
    <main>
        <section className="heroColor">
            <div className="heroContainer">
                <img src={heroImg} alt="A lady with 2 young children, all smiling." className='heroImg'/>
                <div className="heroTextWrap">
                    <h1>Helping people today, modernizing benefits access for tomorrow</h1>
                    <p className="pLight is--contentTop">Each year, $60 billion in food, healthcare, and other assistance goes untapped-we are committed to closing that gap to 
                    reduce hunger and poverty and build pathways to economic mobility</p>
                    <div className="btnWrap">
                        <button className="heroBtn">Learn more</button>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <CardGrid />
        </section>
    </main>
  )
}

export default Hero