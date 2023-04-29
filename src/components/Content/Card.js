import React from 'react'
import './Home.css'

function Card({ numcount = 1, title, number, gas, percentage, from = null, grey }) {
    return (
        <div className='card'>
            <p className='title'>{title}</p>
            <h2 className='number'>{number}</h2>
            <h3 className={`${numcount === 2 ? 'number' : 'gas'}`}>{gas}</h3>
            <div className='percentage__wrapper'>
                <p className={`green__percentage ${grey ? 'grey' : ''} ${numcount === 1 ? 'addpadding' : ''}`}>{percentage}</p>
                {from
                    ?
                    <span>From {from}</span>
                    :
                    <></>
                }
            </div>
        </div>
    )
}

export default Card