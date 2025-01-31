import logo from './logo.svg';
import './App.css';
import React from 'react';
import User from './User';
import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;

function App(){
  return(
    <div className='App'>
      {/* <h1>App Component</h1> */}
      {/* <User data={{name:'amit yadav',age:26}} /> */}
      <HeaderContainer />
      <HomeContainer />
    </div>
  )
}
export default App;