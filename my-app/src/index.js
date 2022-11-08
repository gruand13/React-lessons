import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import styled from 'styled-components';

import {Button} from './App';

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
`;
// import {Header} from "./App";

// const text ="hello";

// const elem = (
//   <div>
//     <h2>TEXT: {text}</h2>
//     <input type='text'/>
//     <button>Click</button>
//   </div>
// );

// const elem = React.createElement('h2', {className: 'greeting'}, 'Hello world!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<StrictMode>
  <App/>
  <BigButton as='a'> Send a report</BigButton>

</StrictMode>  
);



