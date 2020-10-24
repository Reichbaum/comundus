import React from 'react'

const CruisesPage = () => {

  const windowScroll = () => {
    window.scrollTo(0,0);
  }

  const IframeComponent = {
    width: "100%"
  }

  return <div className='container'>
    <iframe id="CPIFrame" onLoad={windowScroll} className='cruises'
            src="https://www.cruiseportal.de/modul/vs2/welcome.html?ref=cruiseportal" height="2000" frameBorder="0"
            style={IframeComponent}></iframe>
  </div>
}

export default CruisesPage