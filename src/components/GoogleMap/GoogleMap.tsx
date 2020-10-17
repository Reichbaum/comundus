import React from 'react'
import {GoogleMap, InfoWindow, LoadScript, Marker} from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '400px'
}
const divStyle = {
  background: `white`,
  padding: 10
}

const center = {
  lat: 51.2171,
  lng: 6.7877
}

const position = {
  lat: 51.2171,
  lng: 6.7877
}

const GoogleMapOffice = () => {

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAx4dGo5gSKn15lt1P3TJ15BP6vjqmxyfQ"
      language='de'
      region='DE'
      mapIds={['1ca9ba1f60fa8cff']}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <div className=''>Info window</div>
        <Marker
          position={position}
        />
        <InfoWindow
          position={position}
        >
          <div style={divStyle}>
            <h1>Comundus Reisen und Event GmbH</h1>
            <p>Scheurenstraße 26<br/>
              40215 Düsseldorf</p>
          </div>
        </InfoWindow>
      </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMapOffice