
import Header from 'components/layout/Header';
import MainRouter from './MainRouter';
import { Reset } from 'styled-reset';
import { BrowserRouter } from 'react-router-dom';
import './assets/scss/common.scss'


const App = () => {
  return (
    <>
        <BrowserRouter>
          <Reset />
          <Header />
          <MainRouter />
        </BrowserRouter>
    </>
  )
}

export default App;
