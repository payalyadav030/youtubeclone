import React , {Component} from 'react';
import { getSportsvideosExploreSection } from '../api/route';


class Sports extends Component{
    constructor(props){
        super(props)
        this.state={
            sportsVid:[]
        }
        this.setState= this.setState.bind(this)
    }

    componentDidMount=()=>{
        getSportsvideosExploreSection().then((response)=>{
            console.log(response)
            this.setState({
                sportsVid:[...this.state.sportsVid, response.data.items]
            })
        }).catch(function(err){
            console.log(err)
        })
    }



    render(){
        return(
            <div>
            <h3>Sports</h3>
            {this.state.sportsVid.map((items, index)=>{
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
export default Sports