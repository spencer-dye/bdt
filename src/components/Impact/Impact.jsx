import React from 'react'
import './Impact.css'
import rightArrowWht from '../../images/icons/rightArrowIconWht.svg'

const Impact = () => {
  return (
    <div>
      <section>
        <div className="container">
            <div className="impactCard">
                <h2 className='is--whiteTxt'>Our Historic Impact</h2>
                <div className="impactContent">
                    <div className="impactItem">
                        <h2 className="is--whiteTxt">1.2M+</h2>
                        <p className="pLight is--topPadSmall">households screened for benefits</p>
                    </div>
                    <div className="impactItem">
                        <h2 className="is--whiteTxt">800,000</h2>
                        <p className="pLight is--topPadSmall">benefit enrollments</p>
                    </div>
                    <div className="impactItem">
                        <h2 className="is--whiteTxt">$9B+</h2>
                        <p className="pLight is--topPadSmall">secured in assistance for families<br></br>nationwide</p>
                    </div>
                </div>
                    <div className="btnWrapLrg">
                        <button className="mainBtn">
                            Learn more about our strategies
                            <img src={rightArrowWht} alt="an arrow pointing right" className='linkArrow'/>
                            </button>
                    </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Impact
