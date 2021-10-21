import axios from "axios"

// Home Page youtube video data
export const getRequest = async (url) => {
    let response = await axios.get(url)
    return response
}

//  clicked on any video, videos related to that clicked videos:
export const getRelatedVideos = async (url)=>{
    let response = await axios.get(url)
    // console.log(response)
    return response

}

// details of clicked video:
export const getDetailsOfClickedVideos= (url)=>{
    let response = axios.get(url)
    return response
}

// trending videos:
export const getTrendingVideos = async(url)=>{
    let response = await axios.get(url)
    // console.log(response)
    return response
}

// music videos:
export const getMusicVideos = async(url)=>{
    let response = await axios.get(url)
    return response
}

// sports videos:
export const getSportsvideos = async(url)=>{
    let response = await axios.get(url)
    console.log(response)
    return response
}

// learning videos:
export const getLearningvideos=async(url)=>{
    let response = await axios.get(url)
    return response
}

// search videos:
export const getSearchVideos=async(search)=>{
    let response = await axios.get(search)
    return response
}

// comments:
export const getCommentsVideo= async(id)=>{
    let response = await axios.get(id)
    return response
}

//subscription:
export const getSubscribeVideo=async(id)=>{
    let response=await axios.get(id)
    return response
}
