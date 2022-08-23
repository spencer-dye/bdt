import React from 'react'
import './Slider.css'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/core';
import slideArrow from '../../images/icons/slideArrow.svg'

// new Splide( '.splide', {
//   classes: {
// 		pagination: 'splide__pagination your-class-pagination',
// 		page      : 'splide__page',
//   },
// } );

// const splide = new Splide( '.splide' );

// splide.on( 'pagination:mounted', function ( data ) {
//   // You can add your class to the UL element
//   data.list.classList.add( 'splide__pagination--active' );

//   // `items` contains all dot items
//   data.items.forEach( function ( item ) {
//     item.button.textContent = String( item.page + 1 );
//   } );
// } );

// splide.mount();

const Slider = () => {
  return (
    <section>
        <div className="container">
            <h2 className='is--cntrAlign'>Our Impact, Their Words</h2>
            <div className="splide__wrap">
                <Splide hasTrack={ false }>
                    <SplideTrack>
                        <SplideSlide>
                            <div className="slideWrap">
                                <p className="pLarge is--cntrAlign">"I need my benefits and I tried to do it on my own, but I recently had a stroke,
                                and I couldn't figure it out. I was referred to you...without your help I would be lost."</p>
                                <div className="slideQuoteInfo">
                                    <p className="quoteName">John</p>
                                    <p className="quoteDemo">Age 67, New York</p>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="slideWrap">
                                <p className="pLarge is--cntrAlign">"I’m a senior, I’m really on a tight budget, and I’m not online. Being able to call
                                 and apply for SNAP on the phone...was a tremendous assistance."</p>
                                 <div className="slideQuoteInfo">
                                    <p className="quoteName">BDT Client</p>
                                    <p className="quoteDemo">Age 60, New York</p>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="slideWrap">
                                <p className="pLarge is--cntrAlign">"I was in a car accident that wrecked my business, and [BDT] was able to help
                                 me in every aspect of my life. I've never received so much good information – from Social Security to housing assistance."</p>
                                 <div className="slideQuoteInfo">
                                    <p className="quoteName">BDT Client</p>
                                    <p className="quoteDemo">Age 37, Pennsylvania</p>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className="slideWrap">
                                <p className="pLarge is--cntrAlign">"I called to re-certify for my SNAP benefits when my last can of food was in the cabinet. My 
                                SNAP recently was renewed and I was able to go food shopping to refill my cabinets, thank you!"</p>
                                 <div className="slideQuoteInfo">
                                    <p className="quoteName">BDT Client</p>
                                    <p className="quoteDemo">Age 56, Maryland</p>
                                </div>
                            </div>
                        </SplideSlide>
                    </SplideTrack>
                    <div className="splide__arrows">
                        <button className="splide__arrow splide__arrow--prev"><img src={slideArrow} alt="slide next" className='arrowSVG arrowFlip'/></button>
                        <button className="splide__arrow splide__arrow--next"><img src={slideArrow} alt="slide previous" className='arrowSVG'/></button>
                        <ul className="splide__pagination"></ul>
                    </div>
                    <ul className='splide'></ul>
                </Splide>
            </div>
        </div>
    </section>
  )
}

export default Slider
