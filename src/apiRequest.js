import axios from 'axios'

const axiosInstance = axios.create({
    headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_TOKEN}`
    }
})

export async function get(url) {
    const response = await axiosInstance.get(url)
    try {
        return response.data
    } catch(error) {
        throw new Error(error)
    }
}
