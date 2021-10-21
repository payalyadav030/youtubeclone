import React , {Component} from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route ,Link, Switch, BrowserRouter} from 'react-router-dom';

class History extends Component{
    
    render(){
        // console.log(this.props.historyList)
        // let data = this.props;
        return(
            <div className="trending-item-div">
                {this.props.historyList.map((item, index)=>{
                    console.log(item)
                   return(
                       <Link to={`/playingvideo/`+item.id}>
                       <div>
                        <img className="history-page-img" src={item.snippet.thumbnails.medium.url} ></img>
                        <p className="video-title">{item.snippet.title}</p>
                       </div>
                       </Link>  
                   )
                })}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        historyList:state.history
    }
}

const mapStateToDispatch=(dispatch)=>{
    return{
        dispatch:dispatch
    }
}
export default connect(mapStateToProps, mapStateToDispatch)(History)