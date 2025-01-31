import { useState } from 'react'
import { useEffect } from 'react'
import { getProducts } from '../../../apis/products'

export default function useFilteredData(filters) {

    const query = Object.entries(filters).map(([key, value]) => `${key}=${value}`).join('&')

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const promise = getProducts(query)
        Promise.resolve(promise).then(data => {
            setData(data)
            setIsLoading(false)
        })
    }, [filters])

    return { data, isLoading }

}
