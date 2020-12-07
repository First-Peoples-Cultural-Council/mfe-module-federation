import React from 'react';
import Header from 'fv_header/Header';
import Footer from 'fv_footer/Footer';
import Sidebar from 'fv_sidebar/Sidebar';
function App({children}) {
  return (
    <div style={{background: "rgba(0,255,0,0.5)"}}>
      <h1>App</h1>
      <Header />
      <main role="main">
        <Sidebar />
        <div>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
