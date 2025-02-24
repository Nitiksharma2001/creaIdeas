import React from 'react'
import Chess from './pages/chess/chess'
import Home from './pages/home/home'
import InfiniteScroll from './pages/infinte-scroll/infinite-scroll'
import RequestBar from './pages/request-bar/request-bar'

export const routes = [
  {
    name: 'home',
    route: '/',
    component: <Home />,
  },
  {
    name: 'chess',
    route: 'chess',
    component: <Chess />,
  },
  {
    name: 'request bar',
    route: 'request-bar',
    component: <RequestBar />,
  },
  {
    name: 'infinte scroll',
    route: 'infinite-scroll',
    component: <InfiniteScroll />,
  },
]
