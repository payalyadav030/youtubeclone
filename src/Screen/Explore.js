import React, { Component } from 'react'
import '../App.css';
import { BrowserRouter as Router, Route ,Link, Switch, BrowserRouter} from 'react-router-dom'

/*
Trending Videos:
https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=1&key=AIzaSyCJo8njy3mHIHBO6kWiBzHESqniQLDRzyc

*/ 
/*
Music, films, learning, sports api-using search keyword:(passing q)
https://www.googleapis.com/youtube/v3/search?q=learning&part=snippet&type=video&maxResults=25&key=AIzaSyCJo8njy3mHIHBO6kWiBzHESqniQLDRzyc
 */

/* top 10 comments:
https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyAoOwsM5RPugs3TivtJDve41LFoey6bXCw&textFormat=plainText&part=snippet&videoId=_lyAEL4Wqao
*/ 


/*
https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=25&key=AIzaSyCB6irtKfy8aLSdcyPBVHKGGp41ReGTlvM
*/
class Explore extends Component{
    render(){
        return(
            <div className="explore">
                
                <div className="explore-list">
                    <ul>
                        <Link to="/explore/trending"><li>Trending</li></Link>
                        <Link to="/explore/music"> <li>Music</li></Link>
                        
                        <Link to="/explore/sports"> <li>Sports</li></Link>
                        <Link to="/explore/learning"><li>Learning</li> </Link> 
                    </ul>
                </div>
            </div>
          
        )
    }
}




export default Explore