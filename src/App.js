import './App.css';
import backgroundH from './background.gif';

const styles = {
  
      backgroundImage: `url(${backgroundH})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
  
};
function App() {
  return (
    <div  style={styles}>
        <div className='App'>
          
        </div>
    </div>
    
  );
}

export default App;
