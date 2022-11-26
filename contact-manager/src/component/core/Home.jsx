import React from 'react'

const Home = () => {
  return (
    <>
    <h3>Information:</h3>
    <hr/>
    <p>To view this project, follow the below instruction:</p>
    <p><strong>Run the project by:</strong> 
      <br />npm run</p>
    <p><strong>Run the json-server using:</strong> 
      <br /> npm json-server "server/db.json" --watch 
      <br /><strong>OR</strong>
      <br /> npx json-server "server/db.json" --watch 
    </p>
    </>
  )
}

export default Home