import React from 'react';
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component{

 state = { videos : [], selecteVideo : null };

  componentDidMount(){

    this.onTermSubmit('hello');

  }



  onTermSubmit =  async term => {
    
      //console.log(term);
 
    const response =await youtube.get('/search',{

       params : {
        
        q : term

       }
     });

      this.setState(
        {
          
          videos : response.data.items,
          selecteVideo : response.data.items[0]

        
        })

  };


onVideoSelect = (video) => {

  this.setState({selecteVideo : video});
//console.log("Invoked frrom child--in App");


};


    render(){

      return (

      <div className="ui container">
          <SearchBar   onFormSubmit = {this.onTermSubmit} />
          <div className = "ui grid">
           <div className="ui row">
      
       <div className="eleven wide column">
       <VideoDetail video= {this.state.selecteVideo}></VideoDetail>
       </div>
         
          <div className="five wide column"> 
         <VideoList    onVideoSelect={this.onVideoSelect}       videos = {this.state.videos}   />   

         </div>
             
             
          </div> 
          

          </div>
        
          
      </div>
      
      );

    }


}

export default App;