import { useEffect, useState } from 'react'

export default function useInfiniteScroll(infiniteSrollContainerId) {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(Array.from({ length: 20 }))

    function onScrollBottom(element) {

        // checking if the scroll has reached to bottom
        if (Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) > 1){
            return 
        }

        // remove the event listener so that when loading it won't call multiple apis
        element.removeEventListener('scroll', () => onScrollBottom(infinteContainerDiv))
        
        setIsLoading(true)

        // faking for api call
        setTimeout(() => {
            setIsLoading(false)
            setData([...data, ...Array.from({ length: 10 })])
            
        }, 2000);
    }

    useEffect(() => {
        // we don't need to add event listener when apirequest is going on
        if(isLoading){
            return 
        }
        const infinteContainerDiv = document.getElementById(infiniteSrollContainerId)
        infinteContainerDiv.addEventListener('scroll', () => onScrollBottom(infinteContainerDiv))
        
        return () => infinteContainerDiv.removeEventListener('scroll', () => onScrollBottom(infinteContainerDiv))
        
    }, [isLoading])
    return { data, isLoading }
}
