import React, { Component } from 'react'

import {connect} from 'react-redux';
import { BrowserRouter as Router, Route ,Link, Switch, BrowserRouter} from 'react-router-dom';

class SearchInput extends Component{
    state={
        searchTerm:""
    }
 searchValue=(value)=>{
    console.log(value)
    this.setState({
        searchTerm:value
    },()=>{
        console.log(this.state)
    })
}
render() {
        const {searchTerm} =this.state
        console.log(searchTerm)
        // if(!searchTerm){
        //     return(
        //         <div>
        //             Results not found
        //         </div>
        //     )
        // }
        return (
        
            <div>
                
                <input 
                onChange={(event)=>this.searchValue(event.target.value)} 
                className="search" type="text"
                 placeholder="search"></input>
                <Link to={`/search/`+ this.state.searchTerm}>
                <i 
                // onClick={()=>this.props.getSearchedValue(searchTerm)}
                class="fa fa-search" aria-hidden="true"></i>
                </Link>
                
            </div>
        )
    }
}
export default SearchInput