import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
const useFetch = (url = "http://localhost:8080/api/tasks", method = "GET", newData) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()


    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setData(response.data);

            setLoading(false);
        }

        catch (error) {
            console.log(error)
        }
    }

    console.log(method, data, newData)
    const updateData = async () => {
        try {
            await axios(url, {
                method,
                data: newData
            }).then(
                navigate(0)
            )

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        if (method !== "GET") {
            updateData()
        }
        fetchData()
    }, [url, method, newData])

    return (
        [data, loading, setData]
    )
}

export default useFetch
