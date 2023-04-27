import React from 'react'
import "../styles/booking.css"

const Booking = () => {
  return (
    <div className='booking'>
      <div className='bookflight'>
      <div >
        <div className='one'><p>1</p></div>
       <p>Search</p>
      </div>
      <div className='image' ><img src='/images/Line4.png' alt='err' /></div>
      <div>
      <div className='one'><p>2</p></div>
       <p> services</p>
      </div>
      <div className='image' ><img src='/images/Line4.png' alt='err' /></div>
      <div >
      <div className='one'><p>3</p></div>
       <p>Results</p>
      </div>
      <div className='image' ><img src='/images/Line4.png' alt='err' /></div>
      <div >
      <div className='one'><p>4</p></div>
       <p>Booking</p>
      </div>
      </div>

      <div className='updates'>
        <div className='left'>

         <div className='booking-summary'>
          <h1>Booking Summary</h1>
          <div className='mid'>
            <p>Express</p>
          <img src='/images/Vector10.png' /></div>
          <div className='destination'>
            <div className='delhi'>
              <img src='/images/vector15.png' alt='err'/>
              <p>Delhi,<br/>110003 India</p>
            </div>
            <div className='line'>
              <img src='/images/Line15.png'/>
            </div>
            <div className='delhi'>
              <img src='/images/vector15.png' alt='err'/>
              <p>Shanghai <br/>
               200080,China</p></div>
          </div>
         </div>

         <div className='second-one'>
          <div className='left-one'>
            <p>Total Weight/Volume</p>
            <img src='/images/vector12.png' />
            <p>114.21KG</p>
          </div>
          <div className='right-one'>
           <div className='h6'><p>Load</p></div> 
            <div className='palletes-one'>
            <h1>1X</h1> <div className='palletes'>
              <img src='/images/Vector3.png' alt='err'/>
              <h3>Palletes</h3>
              <p>230 X 140 X  120 CM</p>
              </div>
            </div>
          </div>
         </div>

         <div className='seller'>
          <div className='frame'>
            <p>Seller:Primetime Worldwide</p>
            <img src='/images/Frame64.png' alt='err'/>
          </div>
          <div className='worldwide'>
           <p>Insurance:Xcover.com</p>
           <h1>Xcover.com</h1>
          </div>
         </div>

        </div>



        <div className='right'>
         <div className='h3'><h3>Price details</h3></div> 
              <div className='quote'>
               <p>Seller’s Quote</p>
               <p>$ 3,659.25</p>
               </div>

               <div className='line'><img src='/images/Line1.png'/></div>

              <div className='duties'>
            <div className='taxes'><p>Duties and taxes</p>
                <p>Not Included</p></div>
                <div className='taxes'><p>Insurance</p>
                <p>$323.40</p></div>
              </div>

              
              <div className='line'><img src='/images/Line1.png'/></div>

             <div className='promo' >

              <p>Add a promo code</p></div>
              <div className='duties1'>
            <p>Platform fee</p>
                <p>$119.48</p>
              </div>
             
            
             <div className='line'><img src='/images/Line1.png'/></div>

<div className='total'>
  <h1>Total:</h1>
  <p>$ 4,102.13</p>
</div>

<button className='checkout'>Checkout</button>
             </div>
      </div>
    </div>
  )
}

export default Booking