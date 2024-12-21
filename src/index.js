import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyApp from './MyApp';
import MaterialApp from './MaterialApp';
import ResponsiveAppBar from './Header'
import MiniDrawer from './Sidebar'
import ColorTabs from './Tabs'
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyApp/> */}
    {/* <MaterialApp/> */}
    {/* <ResponsiveAppBar/>
    <MiniDrawer/> */}
      <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
