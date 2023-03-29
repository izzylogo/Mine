import React from 'react'
import './Term.css'
import { terms } from '../../constants'
import {BsArrowRight} from 'react-icons/bs'

const Term = () => {
  return (
    <div className='term'>
            <h2>Terms & Conditions</h2>
        <div className="term-contain">
            {terms.map((term) => (
                <div className="condition">
                    <h4>{term.num}  {" "}</h4>
                    <p>{" "}{term.condition}</p>
                </div>
            ))}
        </div>
        <div className="last">
            <h2>Invite Your Friends and Start Earning Now!</h2>
            <button>
                Invite Friends             
                <BsArrowRight/>
            </button>
        </div>
    </div>
  )
}

export default Term