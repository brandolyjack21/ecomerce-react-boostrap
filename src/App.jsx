import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import { useSelector } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';

function App() {
  const carValue = useSelector((state) => state.car.value);

  return (
    <>
      <Header/>
      <Body/>
      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default App
