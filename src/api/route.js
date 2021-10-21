import { getRequest } from "./request"
import { getRelatedVideos } from "./request"
import { getDetailsOfClickedVideos } from "./request"
import { getTrendingVideos } from "./request"
import { getMusicVideos } from "./request"
import { getSportsvideos } from "./request"
import { getLearningvideos } from "./request"
import { getSearchVideos } from "./request"
import { getCommentsVideo } from "./request"
import { getSubscribeVideo } from "./request"

// url for homepage- most popular:
/*
https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=25&key=AIzaSyAoOwsM5RPugs3TivtJDve41LFoey6bXCw

*/
// HOME PAGE:
export const getHomeSectionDataFromYoutubePlaylistId = async (id)=>{
    let playListUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${id}&key=AIzaSyAoOwsM5RPugs3TivtJDve41LFoey6bXCw`
    let data = await getRequest(playListUrl)
    return data;
}

// RELATED VIDEOS:

//  https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&relatedToVideoId=3OMBdYxaXi8&type=video&key=AIzaSyCJo8njy3mHIHBO6kWiBzHESqniQLDRzyc
export const getRelatedVideosOfPlayedVideos = async (id)=>{
    //  console.log(id)
    let relatedVideos =`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&relatedToVideoId=${id}&type=video&key=AIzaSyCJo8njy3mHIHBO6kWiBzHESqniQLDRzyc`
    let data = await getRelatedVideos(relatedVideos)
    // console.log(data)
    return data
}

// DETAILS OF CLICKED VIDEO:
export const getDetailsOfTheClickedVideos= async(id)=>{
    let details= `https://content-youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyAoOwsM5RPugs3TivtJDve41LFoey6bXCw`
    let data = await getDetailsOfClickedVideos(details)
    return data
}

////Trending videos:
export const getTrendingVideosExploreSection= async ()=>{
    let trendingVideos =`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=28&key=AIzaSyAoOwsM5RPugs3TivtJDve41LFoey6bXCw`
    let data = await getTrendingVideos(trendingVideos)
    // console.log(data)
    return data
}

/// music videos:
export const getMusicVideosExploreSection= async()=>{
    let musicVideos = `https://www.googleapis.com/youtube/v3/search?q=music&part=snippet&type=video&maxResults=28&key=AIzaSyAoOwsM5RPugs3TivtJDve41LFoey6bXCw`
    let data = await getMusicVideos(musicVideos)
    return data
}
// sports videos:
export const getSportsvideosExploreSection=async()=>{
    let sportsVideos =`https://www.googleapis.com/youtube/v3/search?q=sports&part=snippet&type=video&maxResults=28&key=AIzaSyAoOwsM5RPugs3TivtJDve41LFoey6bXCw`
    let data = await getSportsvideos(sportsVideos)
    return data
}

//learning videos;
export const getLearningVideosExploreSection=async()=>{
    let learningVideos=`https://www.googleapis.com/youtube/v3/search?q=learning&part=snippet&type=video&maxResults=28&key=AIzaSyAoOwsM5RPugs3TivtJDve41LFoey6bXCw`
    let data = await getLearningvideos(learningVideos)
    return data
}

// Search videos list;
export const getSearchedVideosFromUser=async(search)=>{
    let searchVideos=`https://www.googleapis.com/youtube/v3/search?q=${search}&part=snippet&type=video&maxResults=25&key=AIzaSyAoOwsM5RPugs3TivtJDve41LFoey6bXCw`
    let data = await getSearchVideos(searchVideos)
    return data
}

// comments on a video:
/*
https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyCJo8njy3mHIHBO6kWiBzHESqniQLDRzyc&textFormat=plainText&part=snippet&videoId=lX3vT_Gm_HE&maxResults=15
*/
export const getAllCommentsOfVideo= async(id)=>{
    let commentsVideo = `https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyCJo8njy3mHIHBO6kWiBzHESqniQLDRzyc&textFormat=plainText&part=snippet&videoId=${id}&maxResults=50`
    let data = await getCommentsVideo(commentsVideo)
    return data
}

// subscription video:
export const getAllVideosOfSubscribedChannel= async(id)=>{
    let subscribedVideo= `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCJo8njy3mHIHBO6kWiBzHESqniQLDRzyc&channelId=${id}&part=snippet,id&order=date&maxResults=30`
    let data = await getSubscribeVideo(subscribedVideo)
    return data

}