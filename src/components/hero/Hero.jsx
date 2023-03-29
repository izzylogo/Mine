import React from 'react'
import './Hero.css'
import Tab from './Tab'
import {BsArrowRight} from 'react-icons/bs'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={logo} alt="logo" className='logo' />
      <div className="hero-contain">
        <div className="hero-left">
          <h3>
            Earn $30 per NFT minted by your Friends
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, id magnam amet accusantium fugiat similique commodi impedit voluptas placeat ipsum exercitationem eveniet iusto sapiente vel.
          </p>
          <Link to='./invite'>
            <button>
              Learn More 
              <BsArrowRight/>
            </button>
          </Link>
        </div>
        <div className="hero-right">
          <Tab/>
        </div>
      </div>
    </div>
  )
}

export default Hero