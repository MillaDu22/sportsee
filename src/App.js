import './App.css';
import Header from '../src/Components/Header/index.jsx';
import VerticalLayout from '../src/Components/VerticalLayout/index.jsx';
import Home from '../src/pages/Home/index.jsx';

function Dashboard() {
    return (
        <div className = "container-dashboard">
            <Header />
            <VerticalLayout />
            <Home />
        </div>
    );
}
export default Dashboard;
