import React from 'react'
import '../styles/search.css'

const Search = () => {
  return (
    <div className='search-page'>
        <div className='shipping'>
            <h1>Hassle-Free Shipping Solutions</h1>
            <p>Compare, book, and manage your freight across the world’s top logistics providers, all on one platform.</p>
        </div>
        <div className='search'>
            <div className='vectors'>
                <img src='/images/Vector.png' alt='err'/>
                <p>Origin, Port, City</p>
            </div>
            <div className='vectors'>
                <img src='/images/Vector.png' alt='err'/>
                <p>Destination, Port, City</p>
            </div>
            <div className='vectors'>
                <img src='/images/Vector2.png' alt='err'/>
                <p>13 Aprill 2023</p>
            </div>
            <div className='vectors'>
                <img src='/images/Vector1.png' alt='err'/>
                <p>Load</p>
            </div>
            <div className='arrow'>
                <img src='/images/arrow.png' alt='err'/>
            </div>

        </div>

        <div className='text'><h1>Services</h1></div>
        <div className='services'>
          
            <div className='first'>
                <div className='freight'>
                    <img className='src' src='/images/service.png' alt='err'/>
                <h3>Freight Services</h3></div>
                <img  src='/images/Line1.png' alt='err'/>
                <p>Open new Opportunites to grow your busniess.
                     Enter new markets We are with you, door-to-door.</p>
            </div>

            <div className='first'>
                <div className='freight1'>
                    <img   src='/images/Vector7.png' alt='err'/>
                <h3>Business Services</h3></div>
                <img src='/images/Line1.png' alt='err'/>
                <p>
                We support your goals for growth with
                 cargo insurance, online payments and paperless workflow. 
                Take your business to the next level.
                </p>
            </div>

            <div className='first'>
                <div className='freight'>
                    <img className='src' src='/images/world.png' alt='err'/>
                <h3>Shipping & Logistics</h3></div>
                <img src='/images/Line1.png' alt='err'/>
                <p>
                Find powerful solutions to meet your diverse transportation 
                needs.Agile solutions to handle all your supply chain needs.
                </p>
            </div>

            <div className='first'>
                <div className='freight'>
                    <img src='/images/mess.png' alt='err'/>
                <h3>24/7 Support</h3></div>
                <img src='/images/Line1.png' alt='err'/>
                <p>
                Receive support from our experts all over the world at every 
                stage of the process, 24/7.
                </p>
            </div>

        </div>
    </div>
  )
}

export default Search