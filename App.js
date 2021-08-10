import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import RightSidebar from './RightSidebar';
import Sidebar from './Sidebar';
import { useStateValue } from './Stateprovider';
import Widgets from './Widgets';



function App() {
  const [{user}, dispatch] = useStateValue();
  return (

    <div className="App">
     
    {!user ? 
    (
    <Login/> 
    )

    : (
  
      <>
      <Header/>

      <div className="app__body">
      <Sidebar/>

      <Feed/>

      <Widgets/>
      </div>
      </>
    )}
      
    
    </div>
  );
}

export default App;
