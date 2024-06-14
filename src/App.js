import React from "react";
import {useRoutes} from "react-router-dom"
import './App.css';
import HomeComponent from "./page/HomeComponent";
import Header from "./component/Header";
import HeroComponent from "./page/HeroComponent";
import HeroIdComponent from "./page/HeroIdComponent";
import LocationsComponent from "./page/LocationsComponent";
import LocationsIdComponent from "./page/LocationsIdComponent";
import EpisodeComponent from "./page/EpisodeComponent";
import EpisodeIdComponent from "./page/EpisodeIdComponent";
import NoneFound from "./page/NoneFound";
import LoginComponent from "./page/LoginComponent";
import PrivateRoute from "./component/PrivateRoute";
import {AuthProvider} from "./Context/AuthContext";

function App() {
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
                  {element}
        </AuthProvider>
      </>
  );
}

export default App;
