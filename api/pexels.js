import axios from "axios"

export const getImages=async(searchTerm="nature")=>{
    const res = await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`,{
        headers:{
            Authorization:"AweYizwlj6qATbuK6H5NsCJNlF3GGHZlzLJZk3Q6jcFg5SsuwRSFxz5p"
        }
    })

    return res;
}