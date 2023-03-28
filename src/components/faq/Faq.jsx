import React from 'react'
import './Faq.css'
import { faq } from '../../constants'
import {IoIosArrowDown} from 'react-icons/io'

const Faq = () => {
  return (
    <div className='faq'>
        <h2>FAQ</h2>
        <div className="faq-contain">
            {faq.map((faqs) => (
                <div key={faqs.id} className='faqs'>
                    <div className="quest-top">
                        <h4>{faqs.question}</h4>
                        <IoIosArrowDown className='icon'/>
                    </div>
                    <hr />
                    <p>{faqs.answer}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Faq