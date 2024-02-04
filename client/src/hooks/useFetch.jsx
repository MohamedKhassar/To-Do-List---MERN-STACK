import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url = "http://localhost:8080/api/tasks", method = "GET", newData) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const fetchData = async () => {
        try {
            let response;
            if (method === "GET") {
                response = await axios.get(url);
                setData(response.data);
            } else if (method === "POST") {
                await axios.post(url, newData);
                method = "GET"
                url = "http://localhost:8080/api/tasks"
                response = await axios.get(url);
                setData(response.data);
            } else if (method === "PUT") {
                await axios.put(url, newData);
                method = "GET"
                url = "http://localhost:8080/api/tasks"
                response = await axios.get(url);
                setData(response.data);
            }
            setLoading(false);
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url, method, newData])

    return (
        [data, loading]
    )
}

export default useFetch
