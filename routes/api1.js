const request = require ( "request" ) ; 

const api1 = (req, res) =>
{
    const options = {
        method: 'GET',
        url: 'https://dad-jokes.p.rapidapi.com/random/joke',
        headers: {
          'x-rapidapi-key': '36a961c3bemshf2a385ee352af65p11bc80jsn0fbebd7d6ad0',
          'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
          useQueryString: true
        }
    };
      
    // farzi change
    request(options, function (error, response, body) {
          
        if ( error ) 
        {
            return res.send ( error ) ; 
        }

        const usefulData = JSON.parse ( body ).body[0]

        const setupOfJoke = usefulData.setup ; 
        const punchlineOfJoke = usefulData.punchline ; 

        return res.send (
        {
            setupOfJoke, 
            punchlineOfJoke,
        })
        
    });
}

module.exports = api1 ; 