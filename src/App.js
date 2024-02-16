import './App.css';
import Header from '../src/Components/Header/index.jsx';
import VerticalLayout from '../src/Components/VerticalLayout/index.jsx';
import Introduction from './Components/Introduction/index.jsx';
import SimpleBarChart from './Components/SimpleBarChart/index.jsx';
import SimpleRadarChart from './Components/SimpleRadarChart/index.jsx';
import TinyLineChart from './Components/TinyLineChart/index.jsx';
import RadialBarChart from './Components/RadialBarChart/index.jsx';
import AsideColumn from '../src/Components/AsideColumn/index.jsx';


function Dashboard() {
    return (
        <div className = "container-dashboard">
            <Header />
            <VerticalLayout />
            <div className = "dash-center">
                <Introduction />
                <SimpleBarChart />
                <AsideColumn />
                <div className ='charts-row'>
                    <TinyLineChart />
                    <SimpleRadarChart />
                    <RadialBarChart />
                </div>
            </div>
        </div>
    );
}
export default Dashboard;
