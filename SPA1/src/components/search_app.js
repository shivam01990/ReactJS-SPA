import React from 'react';
import {Component} from 'react';
import youtube from 'youtube-api-search';
import SearchComponent from './search_component';
import SearchResults from './search_results';
import SearchHistory from './search_history';

export default class SearchApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],historyitems:[]
        }
    }

    searchYoutube(searchtext){
    //searchYoutube=(searchtext)=>{
        const API_KEY = 'AIzaSyCpzd-Fb8gSgdnduWtxTs2fezZNvYiBESU';
        youtube({key: API_KEY,term: searchtext}, data => {
            console.log(data);
            var history=this.state.historyitems;
            if(searchtext.trim()!="")
                {
                  history.push(searchtext);
                }
            this.setState({results:data,historyitems:history});            
        });
    };
    
    render(){
        return (
            <div className="col-sm-12">
                <div className="col-sm-7">                
                    <SearchComponent onSearchTermChange={this.searchYoutube.bind(this)}/>
                    <SearchResults results={this.state.results} />
                </div>
                <div className="col-sm-5">  
                    <SearchHistory historyitems={this.state.historyitems}/>
                </div>
           </div>
        );
        
        //return (
        //    <div>                
        //        <SearchComponent onSearchTermChange={this.searchYoutube.bind(this)}/>
        //        <SearchResults results={this.state.results} />
        //    </div>
        //);
    };
}