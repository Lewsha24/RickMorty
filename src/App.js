import React, {lazy, Suspense} from "react";
import {useRoutes} from "react-router-dom"
import './App.css';
import Header from "./component/Header";
// import HomeComponent from "./page/HomeComponent";
// import HeroComponent from "./page/HeroComponent";
// import HeroIdComponent from "./page/HeroIdComponent";
// import LocationsComponent from "./page/LocationsComponent";
// import LocationsIdComponent from "./page/LocationsIdComponent";
// import EpisodeComponent from "./page/EpisodeComponent";
// import EpisodeIdComponent from "./page/EpisodeIdComponent";
// import NoneFound from "./page/NoneFound";
// import LoginComponent from "./page/LoginComponent";
import PrivateRoute from "./component/PrivateRoute";
import {AuthProvider} from "./Context/AuthContext";

function App () {
    const HomeComponent = lazy(() => import('./page/HomeComponent'))

    const LoginComponent = lazy(() => import('./page/LoginComponent').then(module => ({
        default: module.LoginComponent
    })))

    const HeroComponent = lazy(() => import('./page/HeroComponent').then(module => ({
        default: module.HeroComponent
    })))
    const HeroIdComponent = lazy(() => import('./page/HeroIdComponent').then(module => ({
        default: module.HeroIdComponent
    })))
    const LocationsComponent = lazy(() => import('./page/LocationsComponent').then(module => ({
        default: module.LocationsComponent
    })))
    const LocationsIdComponent = lazy(() => import('./page/LocationsIdComponent').then(module => ({
        default: module.LocationsIdComponent
    })))
    const EpisodeComponent = lazy(() => import('./page/EpisodeComponent').then(module => ({
        default: module.EpisodeComponent
    })))
    const EpisodeIdComponent = lazy(() => import('./page/EpisodeIdComponent').then(module => ({
        default: module.EpisodeIdComponent
    })))
    const NoneFound = lazy(() => import('./page/NoneFound').then(module => ({
        default: module.NoneFound
    })))

  const element = useRoutes([
    {
      path: '/',
      element: <HomeComponent/>
    },
      {
          path: '/login',
          element: <LoginComponent/>
      },
      {
          path: '/hero',
          element: <HeroComponent/>,

      },
      {
          path: '/hero/:id',
          element: <HeroIdComponent/>
      },
      {
          path: '/location',
          element: <LocationsComponent/>
      },
      {
          path: '/location/:id',
          element: <LocationsIdComponent/>
      },
      {
          path: '/episodes',
          element: <EpisodeComponent/>
      },
      {
          path: '/episodes/:id',
          element: <EpisodeIdComponent/>
      },
      {
          path: '*',
          element: <NoneFound/>
      },

  ])
  return (
      <>
          <AuthProvider>
              <Header/>
              <Suspense fallback={<div>Loading...</div>}>
                  {element}
              </Suspense>
        </AuthProvider>
      </>
  );
}

export default App;
