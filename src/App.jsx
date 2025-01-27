import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
function App() {


  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Header></Header>
        <Outlet className="max-w-5xl mx-auto"></Outlet>
      </div>



    </>
  )
}

export default App
