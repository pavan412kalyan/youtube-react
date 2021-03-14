import axios from 'axios'


const KEY = 'AIzaSyD_eSNIuPj--zXb_HdVrItmKlBpnOTN0Ks'

export default axios.create({

baseURL : 'https://www.googleapis.com/youtube/v3/',
params : {
 part : 'snippet',
 maxResults : 5,
 type : 'video',
 key : KEY

}

});


