
import Header from 'components/layout/Header';
import MainRouter from './router/MainRouter';
import { Reset } from 'styled-reset';
import { BrowserRouter } from 'react-router-dom';
import './assets/scss/common.scss'
import { RecoilRoot } from 'recoil';


const App = () => {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Reset />
          <Header />
          <MainRouter />
        </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App;
