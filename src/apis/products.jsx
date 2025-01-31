import axios from 'axios'
export async function getProducts(query) {
    try {
        const { data, statusText } = await axios.get(import.meta.env.VITE_BACKEND_ENDPOINT + query)
        if (statusText === 'OK') {
            return data
        }
    } catch (err) {
        console.log(err)
    }
}