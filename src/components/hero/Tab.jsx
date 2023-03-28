import React, { useState } from 'react'
import Loader from '../loader/Loader'
import './Tab.css'


const Tab = () => {

    const [load, setLoad] = useState(false)

  return (
    <div className='tab'>
        <div className="tab-contain">
            <h4>
                Earn Commissions by Inviting Friends
            </h4>
            <div className="form">
                <div className="code">
                    <label htmlFor="code">Refferal Code</label>
                    <input type="password" />
                </div>
                <div className="link">
                    <label htmlFor="link">Refferal Link</label>
                    <input type="password" />
                </div>
                <div className="wallet">
                    <label htmlFor="wallet">My Wallet</label>
                    <input type="password" />
                </div>
            </div>
            <div className="bu">
                <p>My Commission <br /> <span>NFT's Minted by your Friends: 20</span></p>
                <h4>$800</h4>
            </div>
            
                {
                    load ? 
                    <div className='connect'>
                        <button>Connet Wallet</button>
                    </div>
                    :
                    <Loader/>
                }
           
        </div>
    </div>
  )
}

export default Tab