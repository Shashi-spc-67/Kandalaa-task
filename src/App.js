
// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component2/Navbar';
import Navbar2 from './Component2/Navbar2';
import Slide1 from './Component2/Slide1';


function App() {
  return (<div>
  <BrowserRouter>
<Navbar/>
<Navbar2/>
<Slide1/>
  </BrowserRouter>
  </div>
  );
}

export default App;

// ~~~~~~~~~~~~~~~~~~~~Component2~~~~~~~~~~~~~~~~//

// import React from 'react'
// // import Navbar from './Component2/Navbar'

// function App() {
//   return (
//     <div>
//       {/* <Navbar/> */}
//     </div>
//   )
// }

// export default App