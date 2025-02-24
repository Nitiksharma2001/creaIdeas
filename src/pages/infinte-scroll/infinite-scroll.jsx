import React from 'react'
import useInfiniteScroll from './hooks/useInfiniteScroll'

export default function InfiniteScroll() {
  const { data, isLoading } = useInfiniteScroll('infinite-scroll')

  return (
    <div
      className='h-full p-4 overflow-y-scroll flex flex-col items-center gap-2'
      id='infinite-scroll'
    >
      {data.map((_, level) => (
        <div
          key={level}
          className='w-full py-2 text-center font-bold border-4 border-black rounded-lg space-y-2'
        >
          {level + 1}
        </div>
      ))}
      {isLoading && <span className='loading loading-spinner loading-lg'></span>}
    </div>
  )
}
