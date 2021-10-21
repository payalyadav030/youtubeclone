import React , {Component} from 'react';
import {getLearningVideosExploreSection} from '../api/route'

class Learning extends Component{
    constructor(props){
        super(props)
        this.state={
            learningVid:[]
        }

        this.setState= this.setState.bind(this)
    }

    componentDidMount=()=>{
        getLearningVideosExploreSection().then((response)=>{
            console.log(response)
            this.setState({
                learningVid:[...this.state.learningVid, response.data.items]
            })
        }).catch(function(err){
            console.log(err)
        })

    }
    render(){
        return(
            <div>
            <h3>Learning</h3>
            {this.state.learningVid.map((items, index)=>{
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

export default Learning