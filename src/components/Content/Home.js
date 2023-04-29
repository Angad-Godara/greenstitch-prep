import React from 'react'
import './Home.css'
import Card from './Card'
import cards from '../../data/cards'
import BarChart from './BarChart'
import DonutChart from './DonutChart'

function Home() {
    return (
        <main className='home__wrapper'>
            <div className='card__wrapper'>
                {cards?.map(data => (
                    <Card
                        title={data?.title}
                        number={data?.number}
                        gas={data?.gas}
                        percentage={data?.percentage} numcount={data?.numcount}
                        from={data?.from}
                        grey={data?.grey} />
                ))}
            </div>
            <div className='charts'>
                <BarChart />
                <DonutChart />
            </div>
        </main>
    )
}

export default Home