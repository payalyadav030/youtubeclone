import { getHomeSectionDataFromYoutubePlaylistId } from "../api/route";


export const getHomePageData = (dispatch) => {
    const ids = ["PLJ9vGQ9yB8Lyv9mjAsPH7ZqQNmYU3LihN","PLJ9vGQ9yB8LzVBjyFBYdslVKQa5dNiDqD","PLJ9vGQ9yB8LxVXWr0yR3t7wmhzgjLyVpp","PLJ9vGQ9yB8Lyz1W6aHMbkw2iWX7IepNRY"]
        Promise.all([
            getHomeSectionDataFromYoutubePlaylistId(ids[0]),
            getHomeSectionDataFromYoutubePlaylistId(ids[1]),
            // getHomeSectionDataFromYoutubePlaylistId(ids[2]),
            getHomeSectionDataFromYoutubePlaylistId(ids[3]),
        ]).then(function (responses) {
            // Get a JSON object from each of the responses
            return Promise.all(responses.map(function (response) {
                //console.log("response", response)
                return response;
            }));
        }).then(function (data) {
            // Log the data to the console
            // You would do something with both sets of data here
           // console.log(data);
            dispatch({
                type:"HOME_PAGE_DATA",
                payload:data
            })
        }).catch(function (error) {
            // if there's an error, log it
            console.log(error);
        });

}

