import React from 'react';
import './Home.css';
import Introduction from '../../Introduction/index.jsx';
import SimpleBarChart from '../../SimpleBarChart/index.jsx';
import SimpleRadarChart from '../../SimpleRadarChart/index.jsx';
import TinyLineChart from '../../TinyLineChart/index.jsx';
import PieBarChart from '../../PieBarChart/index.jsx';
import AsideColumn from '../../AsideColumn/index.jsx';


function Home() {
    return (
        <div className = "container-home">
            <div className = "dash-center">
                <Introduction />
                <SimpleBarChart />
                <AsideColumn />
                <div className ='charts-row'>
                    <TinyLineChart />
                    <SimpleRadarChart />
                    <PieBarChart />
                </div>
            </div>
        </div>
    );
}
export default Home;