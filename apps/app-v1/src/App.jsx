import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
function App({children}) {
  return (
    <div className="AppV1">
      <Header className="AppV1__header" />
      <main role="main" className="AppV1__main">
        <Sidebar className="AppV1__sidebar"/>
        <div className="AppV1__mainContent">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Quis sit dicta distinctio tempora, voluptatibus illum tenetur a veritatis.</p>
          <p>Inventore quisquam earum incidunt sequi maiores voluptates nemo tempore.</p>
          <p>Perspiciatis cumque accusamus!</p>
        </div>
      </main>
      <Footer className="AppV1__footer" />
    </div>
  );
}

export default App;
