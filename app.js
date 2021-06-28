const request = require('request');

const options = {
  method: 'GET',
  url: 'https://dad-jokes.p.rapidapi.com/random/joke',
  headers: {
    'x-rapidapi-key': '36a961c3bemshf2a385ee352af65p11bc80jsn0fbebd7d6ad0',
    'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
    useQueryString: true
  }

  // some other thing is added
};

request(options, function (error, response, body) {
	
  if ( error ) 
  {
    console.log ( "some error occured" ) ; 
    return ; 
  }

    const usefulData = JSON.parse ( body ).body[0]

    const setupOfJoke = usefulData.setup ; 
    const punchlineOfJoke = usefulData.punchline ; 

    console.log ( setupOfJoke ) ; 
    console.log ( punchlineOfJoke ) ; 
    
});