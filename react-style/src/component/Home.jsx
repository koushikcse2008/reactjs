import React from 'react';

const Home = () => {
  return (
    <>
        <p>This project covers style options like inline, internal and external.</p>
        <p><strong>Inline:</strong> The css written withinthe element like p tag, span tag, h1 tag etc.</p>
        <p><strong>Internal:</strong> Here you can create one style object and add that object in any element or tag you want.</p>
        <p><strong>External:</strong> You can use stylesheet seperator like css classes from any files which resides in your project.</p>
        <p><strong>Module:</strong> You can use external style module file like css classes from any files which resides in your project.</p>
    </>
  )
}

export default Home;