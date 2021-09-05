import React from 'react'

function CardsImage({coverSrc,price,serviceTime,rating,title,deliveryFee}) {
    console.log(coverSrc)
    return (
        <>
              <div className='listItem-wrap'>
                                <img src={coverSrc} alt='' />
                                <header>
                                      <h4>{title}</h4>
                                      <span>🌟{rating}</span>
                                </header>
                                <footer>
                                        <p>
                                            <b>{serviceTime}</b> <span> Delivery Fee ${deliveryFee}</span>
                                        </p>
                                        <p>
                                            <b>${price}</b>
                                        </p>
                                </footer>
                </div>




                {/* <div className="vendor">

               
                 <div class="box-container"> */}
                               {/* <div class="box">
                                    <img src={value.coverSrc} alt=""/>
                                    <img src={value.coverSrc} alt='' />
                                <header>
                                      <h4>{value.title}</h4>
                                      <span>🌟{value.rating}</span>
                                </header>
                                <footer>
                                        <p>
                                            <b>{value.serviceTime}</b> <span> Delivery Fee ${value.deliveryFee}</span>
                                        </p>
                                        <p>
                                            <b>${value.price}</b>
                                        </p>
                                </footer>
                                </div> */}
                 {/* </div>

                 </div> */}
        </>
    )
}

export default CardsImage
