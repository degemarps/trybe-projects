import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Profile from './pages/Profile';
import Drinks from './pages/Drinks';
import Explore from './pages/explore/Explore';
import ExploreDrinksByIngredients from './pages/explore/ExploreDrinksByIngredients';
import ExploreFoodsByNationalities from './pages/explore/ExploreFoodsByNationalities';
import ExploreDrinks from './pages/explore/ExploreDrinks';
import ExploreFoods from './pages/explore/ExploreFoods';
import ExploreFoodsByIngredients from './pages/explore/ExploreFoodsByIngredients';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Details from './pages/Details';
import InProgress from './pages/InProgress';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/foods/:id" component={ Details } />
        <Route exact path="/drinks/:id" component={ Details } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ ExploreFoods } />
        <Route exact path="/explore/drinks" component={ ExploreDrinks } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ ExploreFoodsByNationalities }
        />
        <Route
          exact
          path="/explore/foods/ingredients"
          component={ ExploreFoodsByIngredients }
        />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ ExploreDrinksByIngredients }
        />
        <Route
          exact
          path="/drinks/:id/in-progress"
          component={ InProgress }
        />
        <Route
          path="/foods/:id/in-progress"
          component={ InProgress }
        />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    </Provider>
  );
}

export default App;
