import React from 'react'
import './App.less'
import { Layout } from 'antd'
import Navbar from './components/Navbar/Navbar'
import {TripsPage} from './components/Trips/TripsPage'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import reduxStore from './redux/reduxStore'

const { Content } = Layout;


const App = () => (
  <BrowserRouter>
    <Provider store={reduxStore}>
  <Layout>
    <Navbar/>
    <Content className='app__content container'>
      <TripsPage/>
    </Content>
  </Layout>
    </Provider>
  </BrowserRouter>
)

export default App
