import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* <Sidebar/> */}
      <Dashboard />
    </div>
  );
};

export default App;
