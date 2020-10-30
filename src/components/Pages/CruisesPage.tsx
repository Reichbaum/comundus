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
            src="https://cpa.cruisec.net/?aid=204857" height="800" frameBorder="0"
            style={IframeComponent} title='Kreuzfahten'></iframe>
  </div>
}

export default CruisesPage