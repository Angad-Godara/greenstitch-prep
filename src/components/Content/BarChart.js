import React from 'react';
import { VictoryChart, VictoryGroup, VictoryStack, VictoryBar, VictoryAxis } from 'victory';
import barData from '../../data/barCharts'
import './BarChart.css'

function BarChart() {

    return (
        <div className='barchart__wrapper'>
            <div className='baroptions'>
                <h2 className='bar__title'>Carbon Footprint</h2>
                <ul className='bar__list'>
                    {barData?.map(data => (
                        <li><p style={{ background: `${data?.color}` }}></p>{data?.name}</li>
                    ))}
                </ul>
                <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.854187" y="0.359421" width="36.4375" height="36.5391" rx="10" fill="#F4F7FE" />
                    <g clip-path="url(#clip0_0_237)">
                        <path d="M12.0989 13.6404H12.2989C13.0689 13.6404 13.6989 14.2704 13.6989 15.0404V22.0404C13.6989 22.8104 13.0689 23.4404 12.2989 23.4404H12.0989C11.3289 23.4404 10.6989 22.8104 10.6989 22.0404V15.0404C10.6989 14.2704 11.3289 13.6404 12.0989 13.6404ZM17.6989 9.44035C18.4689 9.44035 19.0989 10.0704 19.0989 10.8404V22.0404C19.0989 22.8104 18.4689 23.4404 17.6989 23.4404C16.9289 23.4404 16.2989 22.8104 16.2989 22.0404V10.8404C16.2989 10.0704 16.9289 9.44035 17.6989 9.44035ZM23.2989 17.4404C24.0689 17.4404 24.6989 18.0704 24.6989 18.8404V22.0404C24.6989 22.8104 24.0689 23.4404 23.2989 23.4404C22.5289 23.4404 21.8989 22.8104 21.8989 22.0404V18.8404C21.8989 18.0704 22.5289 17.4404 23.2989 17.4404Z" fill="#18FF59" />
                    </g>
                    <defs>
                        <clipPath id="clip0_0_237">
                            <rect width="24" height="24" fill="white" transform="translate(5.69891 4.44035)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <VictoryChart domainPadding={{ x: 50 }} width={700} height={200}>
                <VictoryAxis
                    tickValues={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]}
                    style={{
                        axisLabel: { fill: '#5F6980', fontSize: 13 },
                        tickLabels: { fill: '#5F6980', fontSize: 13 },
                    }}
                />
                <VictoryAxis dependentAxis
                    tickFormat={(t) => t > 1000 ? `${Math.round(t / 1000)}k` : t}
                    style={{
                        axisLabel: { fill: '#5F6980', fontSize: 13 },
                        tickLabels: { fill: '#5F6980', fontSize: 13 },
                    }}
                />
                <VictoryGroup offset={20} style={{ data: { width: 15 } }}>
                    <VictoryStack colorScale={barData.map(dataSet => dataSet.color)} >
                        {barData.map((dataSet, index) => (
                            <VictoryBar
                                key={`dataset-${index}`}
                                data={dataSet.values}
                                style={{
                                    data: {
                                        borderRadius: index === barData.length - 1 ? 20 : 0,
                                        width: 45,
                                    }
                                }}
                            />
                        ))}
                    </VictoryStack>
                </VictoryGroup>
            </VictoryChart>
        </div>
    );
}

export default BarChart;
