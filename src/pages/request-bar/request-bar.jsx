import React, { useEffect, useRef } from 'react'
import useRequestBar from './hooks/useRequestBar'

export default function RequestBar() {

  const { percentageElapsed, updateApiStatus } = useRequestBar()

  const apiTime = useRef()

  useEffect(() => {

    updateApiStatus(true)
    apiTime.current = Math.ceil(Math.random() * 5000)

    setInterval(() => {
      updateApiStatus(false)
    }, apiTime.current)

  }, [])

  return (
    <div className='flex flex-col gap-4 justify-center items-center h-full'>
      {Math.ceil(apiTime.current / 1000)}
      <div className="radial-progress " style={{ "--value": percentageElapsed, "--size": "12rem", "--thickness": "10px" }} role="progressbar">
        {percentageElapsed}
      </div>
    </div>
  )
}
