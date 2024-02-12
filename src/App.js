import './App.css';
import Header from '../src/Components/Header/index.jsx';
import VerticalLayout from '../src/Components/VerticalLayout/index.jsx';

function Dashboard() {
  return (
    <div className="App">
      <Header />
      <VerticalLayout />
    </div>
  );
}

export default Dashboard;
