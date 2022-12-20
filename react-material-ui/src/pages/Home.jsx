import React from 'react';

const Home = () => {
  return (
    <>
    
        <p> 
            <strong> Install using NPM:</strong> <br />
            npm install @mui/material @emotion/react @emotion/styled --save  <br />
            yarn add @mui/material @emotion/react @emotion/styled --save <br /> <br />
        </p>

        <p>
            <strong> Material Icon: </strong> <br />
            npm install @mui/icons-material --save <br />
            yarn add @mui/icons-material --save <br />
        </p>

        <p>
            <strong> Font install: </strong><br />
            npm install @fontsource/roboto --save <br />
            yarn add @fontsource/roboto --save <br /> <br />

            <strong> For Import: </strong> <br />
            import '@fontsource/roboto/300.css'; <br />
            import '@fontsource/roboto/400.css'; <br />
            import '@fontsource/roboto/500.css'; <br />
            import '@fontsource/roboto/700.css'; <br />


        </p>

    </>
  )
}

export default Home