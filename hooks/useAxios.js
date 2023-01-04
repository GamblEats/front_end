import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxios = (url, method = 'GET', body = null, headers = {}, dependencies) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState('loading'); // Initialize the status to "loading"

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Use the axios request method corresponding to the specified HTTP method
                let response;
                switch (method) {
                    case 'GET':
                        response = await axios.get(url, { headers });
                        break;
                    case 'POST':
                        response = await axios.post(url, body, { headers });
                        break;
                    case 'PATCH':
                        response = await axios.patch(url, body, { headers });
                        break;
                    case 'DELETE':
                        response = await axios.delete(url, { headers });
                        break;
                    default:
                        throw new Error(`Invalid HTTP method: ${method}`);
                }
                setData(response);
                setStatus('success'); // Update the status to "success"
            } catch (err) {
                setData(err);
                setStatus('error'); // Update the status to "error"
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [dependencies]); // The effect will be re-run if any of these values change

    return { data, status };
}

//* Utilization

// function MyComponent() {
//   const { data, status } = useAxios("/some/endpoint", "POST", { name: "John" }, { "Content-Type": "application/json" });

//   if (status === "loading") {
//     return <p>Loading...</p>;
//   }

//   if (status === "error") {
//     return <p>Error: {error.message}</p>;
//   }

//   return <p>{data.message}</p>;
// }
