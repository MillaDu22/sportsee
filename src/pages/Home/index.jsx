import React from 'react';
import './Home.css';
import Introduction from '../../Components/Introduction/index.jsx';
import SimpleBarChart from '../../Components/SimpleBarChart/index.jsx';
import SimpleRadarChart from '../../Components/SimpleRadarChart/index.jsx';
import TinyLineChart from '../../Components/TinyLineChart/index.jsx';
import PieBarChart from '../../Components/PieBarChart/index.jsx';
import AsideColumn from '../../Components/AsideColumn/index.jsx';

/**
 * Composant React représentant la page d'accueil de l'application.
 * @returns {JSX.Element} - Élément JSX représentant la page d'accueil.
 */
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