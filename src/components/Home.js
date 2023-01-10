import axios from "axios";
import {useEffect, useCallback} from 'react';

const Home = () => {

const callBck=useCallback(async () =>{


const options = {
  method: 'GET',
  url: 'https://api.football-data.org/v2/teams/67/matches?status=SCHEDULED&limit=1',
  headers: {
    'X-Auth-Token':'24b6711002744c65a971e59d3f9f36b1'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
},[])

// useEffect(()=>{
//  callBck();
// },[callBck]);


return(
	
<button onClick={e=>{
	e.preventDefault()
	callBck();
}}>hy</button>
	);
}

export default Home;