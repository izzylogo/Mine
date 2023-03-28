import React from 'react'
import './Tier.css'

const Tier = () => {
  return (
    <div className='tier'>
        <div className="tier-contain">
            <h2>Commission Tier</h2>
            <div className="tier-card-sec">
                <div className="tier-card">
                    <div className="card-top">
                        <p className='gold'>Get    </p>
                        <h2>$30</h2>
                        <span>USDc per NFT</span>
                    </div>
                    <p>Earn 30 USDc for each NFT minted by <br /> your referees</p>
                </div>
                <div className="tier-card">
                    <div className="card-top">
                        <p className='gold'>Extra  </p>
                        <h2> $50</h2>
                        <span>Bonus USDc</span>
                    </div>
                    <p>Earn extra 50 USDc bonus for every 5 NFT's <br /> minted b your referees</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tier