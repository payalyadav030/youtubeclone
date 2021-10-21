import React , {Component} from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route ,Link, Switch, BrowserRouter} from 'react-router-dom';

class Watch extends Component{
    
    render(){
        // console.log(this.props.historyList)
        // let data = this.props;
        return(
            <div className="trending-item-div">
                {this.props.WatchList.map((item, index)=>{
                    console.log(item)
                    return(
                        <Link to={`/playingvideo/`+item.id}>
                        <div>
                         <img src={item.url} ></img>
                         <p className="video-title">{item.title}</p>
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
        WatchList:state.Watch
    }
}

const mapStateToDispatch=(dispatch)=>{
    return{
        dispatch:dispatch
    }
}
export default connect(mapStateToProps, mapStateToDispatch)(Watch)