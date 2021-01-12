import React, {Suspense} from 'react';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import Sidebar from './Sidebar';

// Proof of concept for resiliant Federated Modules
// import Header from 'app_v2/Header';
const loadScope = (url, scope) => {
  const element = document.createElement('script');
  const promise = new Promise((resolve, reject) => {
    element.src = url
    element.type = 'text/javascript'
    element.async = true
    element.onload = () => resolve(window[scope])
    element.onerror = reject
  })
  document.head.appendChild(element)
  promise.finally(() => document.head.removeChild(element))
  return promise
}

const loadModule = async (url, scope, module) => {
  try {
    const container = await loadScope(url, scope)
    await __webpack_init_sharing__('default')
    await container.init(__webpack_share_scopes__.default)
    const factory = await container.get(module)
    return factory()
  } catch (error) {
    console.error('Error loading module:', error)
    throw error
  }
}

const Header = React.lazy(() => loadModule(
  'http://localhost:8001/remoteEntry.js',
  'app_v2',
  './Header'
))
const HeaderBackup = React.lazy(() => import('./fallbacks/Header'))
// Proof of concept for resilient Federated Modules

function App({children}) {
  return (
    <div className="AppV1">
      {/* Proof of concept for resilient Federated Modules */}
      <Suspense fallback={<div>Loading...</div>}><ErrorBoundary fallback={<HeaderBackup className="AppV1__header" />}><Header className="AppV1__header" /></ErrorBoundary></Suspense>
      {/* Proof of concept for resilient Federated Modules */}
      <main role="main" className="AppV1__main">
        <Sidebar className="AppV1__sidebar"/>
        <div className="AppV1__mainContent">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Quis sit dicta distinctio tempora, voluptatibus illum tenetur a veritatis.</p>
          <p>Inventore quisquam earum incidunt sequi maiores voluptates nemo tempore.</p>
          <p>Perspiciatis cumque accusamus!</p>
        </div>
      </main>
      <Footer className="AppV1__footer">App V1 - © 2020</Footer>
    </div>
  );
}

export default App;
