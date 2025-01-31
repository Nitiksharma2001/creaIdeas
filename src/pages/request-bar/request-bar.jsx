import React, { useEffect, useRef, useState } from 'react'

export default function RequestBar() {
  const [currenPercentage, setCurrentPercentage] = useState(0)
  const [isApiRequestDone, setIsApiRequestDone] = useState(false)
  const [requestTimeRandom, setRequestTimeRandom] = useState(0)
  let id = useRef()

  useEffect(() => {

    let time = Math.ceil(Math.random()*5000)
    setRequestTimeRandom(time)

    setInterval(() => {
      setIsApiRequestDone(true)
    }, time);

    id.current = setInterval(() => {
      setCurrentPercentage(prevPercentage => {
        if (prevPercentage >= 70) {
          return prevPercentage
        }
        return prevPercentage + 5
      })
    }, 250)

  }, [])

  useEffect(() => {

    if (isApiRequestDone) {
      clearInterval(id.current)
      setCurrentPercentage(100)
      return
    }

  }, [currenPercentage, isApiRequestDone])
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-full'>
      {requestTimeRandom/1000} secs
      <div className="radial-progress " style={{ "--value": currenPercentage,  "--size": "12rem", "--thickness": "10px" }} role="progressbar">
        {currenPercentage}
      </div>
    </div>
  )
}
