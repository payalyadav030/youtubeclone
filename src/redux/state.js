import {createStore} from 'redux';
import axios from 'axios'

// const API_KEY="AIzaSyAoOwsM5RPugs3TivtJDve41LFoey6bXCw"

let initialState={
   homePage:{
      loading:true,
      data:[],
   },
   history:[],
   liked:[],
   Watch:[],
   channelId:[],
   channelTitle:[],
   edit:true
   
   
   
}

function appReducer(state=initialState, action){
   let stateCopy=JSON.parse(JSON.stringify(state))
   // console.log(stateCopy)
   switch (action.type) {
      case "HOME_PAGE_DATA":
         stateCopy.homePage.data=action.payload
         stateCopy.homePage.loading=false
      return stateCopy;
      
      case "add_to_history":
         stateCopy.history.push(action.payload)
         // console.log(stateCopy)
      return stateCopy;
         
      case "add_liked_Videos":
         stateCopy.liked.push(action.payload)
         // console.log(stateCopy.liked)
      return stateCopy;

      case "add_watch_videos":
         stateCopy.Watch.push(action.payload)
         // console.log(stateCopy.Watch)
      return stateCopy;

      case "add_subscribe_videos":
        if(stateCopy.edit){
            let array1=[]
            array1.push(action.payload.channelTitle)
            //   console.log(array1)
         if(array1[0]!=null){
            stateCopy.channelTitle=[...stateCopy.channelTitle, array1]
         }
         let array2=[]
         array2.push(action.payload.channelId)
         if(array2[0]!=null){
            stateCopy.channelId=[...stateCopy.channelId, array2]
         }
        }
        stateCopy.edit=false
        
      //   console.log(stateCopy)
        return stateCopy

   
      default:
         break;
   }
   // stateCopy=[]


   return stateCopy

}
let store = createStore(appReducer)

export default store