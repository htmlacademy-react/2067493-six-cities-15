import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import OfferPage from '../offer-page/offer-page';
import Page404 from '../../page404/page404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';

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
        <Route path={AppRoute.MainPage} element={<MainPage offers={offers}/>}/>
        <Route path={AppRoute.LoginPage} element={<LoginPage/>}/>
        <Route path={AppRoute.FavoritesPage} element={<FavoritesPage/>}/>
        <Route path={AppRoute.OfferPage}>
          <Route path=':id' element={<OfferPage offers={offers}/>}/>
        </Route>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
