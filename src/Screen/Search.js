import React , {Component} from 'react';

import {getSearchedVideosFromUser} from '../api/route'
import { BrowserRouter as Router, Route ,Link, Switch, BrowserRouter} from 'react-router-dom'

class Search extends Component{
    state={
        searchItems:[]
    }

    componentDidMount=()=>{
        let search= this.props.match.params.search
        // console.log(search)

        getSearchedVideosFromUser(search).then((response)=>{
            // console.log(response)
            this.setState({
                searchItems:[...this.state.searchItems, response.data.items]
            }, ()=>{
                // console.log(this.state.searchItems)
            })

        }).catch(function(err){
            console.log(err)
        })
    }
    render(){
        // {console.log(this.props)}
        return(
            <div>
                <SearchItem data={this.state.searchItems}/>
            </div>
        )
    }
}

const SearchItem=(props)=>{
    console.log(props)
    return(
        <div>
            {props.data.map((items, index)=>{
                return(
                    <div className="searched-items" >
                        {items.map((item,index)=>{
                            return(
                                <Link to={`/playingvideo/`+item.id.videoId} >
                                <div>
                                    <img src={item.snippet.thumbnails.medium.url} ></img> 
                                     <p className="video-title">{item.snippet.title}</p>
                                </div>
                             </Link>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )

}
export default Search