import React from 'react'
import './Invite.css'
import v1 from '../../assets/v1.png'
import v2 from '../../assets/v2.png'
import v3 from '../../assets/v3.png'

const Invite = () => {
  return (
    <div className='invite'>
        <div className="invite-contain">
            <div className="sect sect1">
                <img src={v1} alt="image" />
                <h3>Invite Friends</h3>
                <p>Share your reference code or link woth your friends and encourage them to explore our project.</p>
            </div>
            <div className="sect sect2">
                <img src={v2} alt="image" />
                <h3>Invite Friends</h3>
                <p>Share your reference code or link woth your friends and encourage them to explore our project.</p>
            </div>
            <div className="sect sect3">
                <img src={v3} alt="image" />
                <h3>Invite Friends</h3>
                <p>Share your reference code or link woth your friends and encourage them to explore our project.</p>
            </div>
        </div>
    </div>
  )
}

export default Invite