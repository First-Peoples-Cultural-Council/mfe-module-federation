import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
function App({children}) {
  return (
    <div className="AppA">
      <Header className="AppA__header" />
      <main role="main" className="AppA__main">
        <Sidebar className="AppA__sidebar"/>
        <div className="AppA__mainContent">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Quis sit dicta distinctio tempora, voluptatibus illum tenetur a veritatis.</p>
          <p>Inventore quisquam earum incidunt sequi maiores voluptates nemo tempore.</p>
          <p>Perspiciatis cumque accusamus!</p>
        </div>
      </main>
      <Footer className="AppA__footer" />
    </div>
  );
}

export default App;
