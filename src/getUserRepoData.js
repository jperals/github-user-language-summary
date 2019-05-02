import {get} from './apiRequest'

export default async (username) => {
    const data = await get(`https://api.github.com/users/${username}/repos`)
    return data
}
