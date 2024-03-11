import axios from 'axios';
const url = `http://localhost:5000/`
const publicAxios = axios.create({
    baseURL: url,
})

const useAxiosPublic = () => {
    return publicAxios
};

export default useAxiosPublic;