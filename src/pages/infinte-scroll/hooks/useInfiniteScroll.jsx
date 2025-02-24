import { useEffect, useState } from 'react'

export default function useInfiniteScroll(infiniteSrollContainerId) {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  function onScrollBottom(e) {
    // checking if the scroll has reached to bottom
    if (
      Math.abs(e.srcElement.scrollHeight - e.srcElement.clientHeight - e.srcElement.scrollTop) > 4
    )
      return

    setIsLoading(true)

    // faking for api call
    setTimeout(() => {
      setIsLoading(false)
      setData([...data, ...Array.from({ length: 10 })])
    }, 2000)
  }

  useEffect(() => {
    if (isLoading) return

    const infinteContainerDiv = document.getElementById(infiniteSrollContainerId)

    if (!infinteContainerDiv) return

    infinteContainerDiv.addEventListener('scroll', onScrollBottom)

    return () => infinteContainerDiv.removeEventListener('scroll', onScrollBottom)
  }, [isLoading])

  useEffect(() => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setData([...data, ...Array.from({ length: 20 })])
    }, 2000)
  }, [])

  return { data, isLoading }
}
