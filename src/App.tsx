import React from 'react'
import './App.less'
import {BackTop, Layout} from 'antd'
import Navbar from './components/Navbar/Navbar'
import {HashRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import reduxStore from './redux/reduxStore'
import HomePage from './components/Pages/HomePage'
import Page from './components/Pages/Page'
import TripsPage from './components/Trips/TripsPage'

const {Content, Header, Footer} = Layout

const App = () => (
  <HashRouter hashType='noslash'>
    <Provider store={reduxStore}>
      <Layout>
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
            <Route exact path='/'
                   render={() => <HomePage/>}/>
          </Switch>
        </Content>
        <Footer>
          <BackTop/>
        </Footer>
      </Layout>
    </Provider>
  </HashRouter>
)

export default App
