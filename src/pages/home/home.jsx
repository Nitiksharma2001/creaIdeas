import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'

export default function Home() {
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='w-1/2 flex flex-wrap justify-center gap-4'>
        {routes.filter(page => page.route !== '/').map((page, i) => (
          <Link to={page.route} className='link link-secondary text-3xl capitalize' key={i}>
            {page.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
