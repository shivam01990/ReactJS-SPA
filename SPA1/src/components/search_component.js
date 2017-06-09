import React from 'react';
import {Component} from 'react';
/*
const SearchComponent=()=>{
    return <input/>;
}

export default SearchComponent;*/


export default class SearchComponent
    extends React.Component{
        
        constructor(props){
            super(props);
            this.state = {term:'Initial'};
        }
        
      
        
        render()
        {
//            return( 
//            <input onChange={this.onInputChange} />
//                
//            )
            
            
            return( 
                <div>
                 <div className="col-sm-3">
                    <label className="form-label" htmlFor="search">YouTube Search:</label>
                 </div>
                <div className="col-sm-6">
                    <input  placeholder="Search" className="form-control" id="search" value={this.state.term} onChange={(event)=>this.onInputChange(event.target.value)}/>
                </div>
                <div className="col-sm-3">
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
                  value of the input {this.state.term}
              </div>  
            )
        }
        
         onInputChange(term){            
            //console.log(event); 
             this.setState({term:term})
            this.props.onSearchTermChange(term);
        }
        
    }