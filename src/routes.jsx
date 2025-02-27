import React from 'react'
import Home from './pages/home/home'
import InfiniteScroll from './pages/infinte-scroll/infinite-scroll'
import RequestBar from './pages/request-bar/request-bar'
import ChessMain from './pages/chess/chess_main'

export const routes = [
  {
    name: 'home',
    route: '/',
    component: <Home />,
  },
  {
    name: 'chess',
    route: 'chess',
    component: <ChessMain />,
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
