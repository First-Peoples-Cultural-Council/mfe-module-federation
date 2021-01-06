import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Aside from './Aside';
function App({children}) {
  return (
    <div className="AppV2">
      <Header className="AppV2__header" />
      <main role="main" className="AppV2__main">
        <Sidebar className="AppV2__sidebar"/>
        <div className="AppV2__mainContent">
          <p>Et quasi suscipit doloribus optio corrupti ad minus minima voluptatibus dignissimos nostrum ratione asperiores.</p>
          <p>Officia consectetur placeat dolore, inventore laudantium illum? Tempore.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <Aside className="AppV2__aside"/>
      </main>
      <Footer className="AppV2__footer" />
    </div>
  );
}

export default App;
