import React from 'react';
import { VictoryPie } from 'victory';
import data from '../../data/donutCharts';
import './DonutChart.css';

function DonutChart() {
    return (
        <div className='donut__wrapper'>
            <h3 className='donut__title'>
                Top emmisions by type
            </h3>
            <div className='donut__container'>
                <VictoryPie
                    data={data}
                    x={null}
                    y="value"
                    labelRadius={85}
                    colorScale={data.map(d => d.color)}
                    style={{
                        labels: { fontSize: 0 },
                        data: { width: 10 },
                    }}
                    innerRadius={75}
                    radius={95}
                    labelComponent={<></>}
                />
            </div>
            <ul className='donut__list'>
                {data?.map(data => (
                    <li><p style={{ background: `${data?.color}` }}></p><span className='donut__name'>{data?.name}</span><span className='donut__percentage'>{data?.value}%</span></li>
                ))}
            </ul>
        </div>
    );
}

export default DonutChart;
