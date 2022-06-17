
import './App.css';
import FirstApprovScreen from './Components/FirstApprovScreen';
import SecondApprovScreen from './Components/SecondApprovScreen';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import GidecekVeriler from './Components/GidecekVeriler';
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import PreviewTemplate from './Components/PreviewTemplate';

function App(props) {
  const form = <FirstApprovScreen  ></FirstApprovScreen>
  console.log(form.form)
  return (

    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='birincionayci'>FirstApprovScreen</Link>
        <Link to='bilgiler'>Bilgiler</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/birincionayci' element={<FirstApprovScreen />}></Route>
        <Route path='/bilgiler' element={<GidecekVeriler />} ></Route>
        <Route path='/önizlemeşablon' element={<PreviewTemplate />} ></Route>
        <Route path='/ikincionayci' element={<SecondApprovScreen subject="Mehmet" preheader={form.preheader} />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>

  )
}

export default App;
