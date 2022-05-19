import React from 'react';

const Welcome = (name)=>{
    let sayHi = `Hey ${name.name}!`;
    let greetingMessage = `Welcome to Newton School.`;
    return (
      <div>
          <h1>{sayHi}</h1>
          <h2>{greetingMessage}</h2>
      </div>
    );
}

export default Welcome;