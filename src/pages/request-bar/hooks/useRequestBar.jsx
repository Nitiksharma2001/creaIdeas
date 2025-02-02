import { useEffect, useRef, useState } from 'react'

// props will be whether api request is pending or completed
// true meaning pending and false means completed

// return value of our custom hook will be percentage done after request invoked
export default function useRequestBar() {

    const [percentageElapsed, setPercentageElapsed] = useState(0)
    const [apiStatus, setApiStatus] = useState(false)

    function updateApiStatus(newApiStatus) {
        setApiStatus(newApiStatus)
    }

    // our requestStatus will only help us to validate whether we should increase percentage elapsed or not?
    useEffect(() => {
        if(percentageElapsed === 100){
            return 
        }

        // increase the value continously till you reach 70% (random)
        const id = setInterval(() => {

            let value = percentageElapsed + 5

            if(value > 70 && apiStatus === true){
                value = 70
            }
            if(value > 100){
                value = 100
            }

            setPercentageElapsed(value)

        }, 50);

        return () => clearInterval(id)

    }, [apiStatus, percentageElapsed])


    return { percentageElapsed, updateApiStatus }
}
