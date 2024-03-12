import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import OfferPage from '../offer-page/offer-page';
import Page404 from '../../page404/page404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

type offer = {
  id: string;
};

type AppProps = {
  offers: offer[];
};

function App({ offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage offers={offers}/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/favorites' element={<FavoritesPage/>}/>
        <Route path='/offer'>
          <Route path=':id' element={<OfferPage offers={offers}/>}/>
        </Route>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
