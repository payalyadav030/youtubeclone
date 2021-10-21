import React , {Component} from 'react';
import { getMusicVideosExploreSection } from '../api/route';

class Muisc extends Component{
    constructor(props){
        super(props)
        this.state={
            musicVid:[]
        }
        this.setState = this.setState.bind(this)
    }

    componentDidMount=()=>{
        getMusicVideosExploreSection().then((response)=>{
            // console.log(response.data.items)
            this.setState({
                musicVid:[...this.state.musicVid, response.data.items]
            }, ()=>{
                console.log(this.state.musicVid)
            })

        }).catch(function(err){
            console.log(err)
        })
    }
    

render(){
    return(
        <div>
            <h3>Music</h3>
            {this.state.musicVid.map((items, index)=>{
                return(
                    <div className="trending-item-div">
                        {items.map((item, index)=>{
                            return(
                                <div>
                                    <img src={item.snippet.thumbnails.medium.url} ></img>
                                    <p className="video-title">{item.snippet.title}</p>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}
}
export default Muisc