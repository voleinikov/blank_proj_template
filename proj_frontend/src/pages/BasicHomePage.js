import { useState, useEffect } from 'react';

function BasicHomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [apiTestMsg, setApiTestMsg] = useState('');

  useEffect(() => {
    setIsLoading(true);

    fetch(
      'http://localhost:3001/api/v1/ping',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then((response) => {
      // This actually returns a promise too, because it takes some time 
      // to jsonify the response.  So we need to use another .then() 
      // statement after this
      return response.json();
    }).then((data) => {
      const testMsg = data['msg'][0];
      setApiTestMsg(testMsg);
      setIsLoading(false);
    })
  }, []);

  if (isLoading){
    return <section>
      <p>Loading...</p>
    </section>;
  }
  else {
    return <section>
      <h2>Welcome To Your React Frontend</h2>
      <p>Rails API backend says: {apiTestMsg}</p>
    </section>;
  }
}

export default BasicHomePage;