import React, { useState } from 'react';
import './App.css';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import PfeifferHeader from "./components/Header"
import { notification } from 'antd';

import { Layout } from 'antd';
import Dashboard from './components/Dashboard';
import 'antd/dist/antd.css';

const { Header, Footer, Content } = Layout;


const client = new W3CWebSocket('ws://127.0.0.1:8000');
const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Connection failed',
    description:
      'Connection failed. Please check your internet access',
  });
};


function App() {

  const [data, setData] = useState({})
  const [isConnected, setIsConnected] = useState(false)

  client.onopen = () => {
    console.log('WebSocket Client Connected');
    setIsConnected(true)
    
  };
  client.onconnectFailed = (error) => {
    console.log('Connect Error: ' + error.toString());
  }

  client.onerror= (error) => {
    console.log("Connection failed: " + error.toString())
    setIsConnected(false)
    openNotificationWithIcon("error")
  }

  client.onclose = () => {
    console.log("Websocket connection closed")
    setIsConnected(false) 
    openNotificationWithIcon("error")

  }

  client.onmessage = (message) => {
    console.log(JSON.parse(message.data).IotData);
    setData(JSON.parse(message.data).IotData)
  };


  return (
    <div className="App">
      <Layout>
        <Header style={{background: "#fff"}}><PfeifferHeader /></Header>
        <Content>        
          <Dashboard isConnected={isConnected} style={{margin: 20}} data={data} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Pfeiffer Vacuum GmbH ©2020</Footer>
    </Layout>
    </div>
  );
}
 
export default App;
