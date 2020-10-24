import React from 'react'
import './App.less'
import {Layout} from 'antd'
import Navbar from './components/Navbar/Navbar'
import {HashRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import reduxStore from './redux/reduxStore'
import HomePage from './components/Pages/HomePage'
import Page from './components/Pages/Page'
import TripsPage from './components/Trips/TripsPage'
import Footer from './components/Footer/Footer'
import CruisesPage from './components/Pages/CruisesPage'

const {Content, Header} = Layout

const App = () => (
  <HashRouter hashType='noslash'>
    <Provider store={reduxStore}>
      <Layout className='app'>
        <Header className='app__header'>
          <Navbar/>
        </Header>
        <Content>
          <Switch>
            <Route path='/reisen'
                   render={() => <TripsPage/>}/>
            <Route path='/ueber_uns'
                   render={() => <Page postId={700}/>}/>
            <Route path='/impressum'
                   render={() => <Page postId={718}/>}/>
            <Route path='/datenschutz'
                   render={() => <Page postId={738}/>}/>
            <Route path='/kreuzfahrten'
                   render={() => <CruisesPage/>}/>
            <Route exact path='/'
                   render={() => <HomePage/>}/>
          </Switch>
        </Content>
        <Footer/>
      </Layout>
    </Provider>
  </HashRouter>
)

export default App
