import axios from 'axios'

export default axios.create({
    baseURL: 'https://meusic.herokuapp.com',
    withCredentials: true,
    credentials: "include",
});