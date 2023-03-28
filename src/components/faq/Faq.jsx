import React, { useState } from 'react'
import './Faq.css'
import { faq } from '../../constants'
import {IoIosArrowDown} from 'react-icons/io'

const Faq = () => {

    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
      setToggle(prevToggle => !prevToggle)
      console.log(toggle)
    }
    

  return (
    <div className='faq'>
        <h2>FAQ</h2>
        <div className="faq-contain">
            {faq.map((faqs) => (
                <div key={faqs.id} className='faqs'>
                    <div className="quest-top">
                        <h4>{faqs.question}</h4>
                        <IoIosArrowDown onClick={handleToggle} className='icon'/>
                    </div>
                    <hr />
                    {toggle ? <p>{faqs.answer}</p> : null}{console.log(faqs.id)}
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default Faq