import React from 'react'
import {Carousel, Skeleton} from 'antd'

const HomePage = () => {

  return <div>
    <Carousel autoplay>
      <div>
        <h3 className='slider'>1</h3>
      </div>
      <div>
        <h3 className='slider'>2</h3>
      </div>
      <div>
        <h3 className='slider'>3</h3>
      </div>
      <div>
        <h3 className='slider'>4</h3>
      </div>
    </Carousel>
    <Skeleton avatar paragraph={{ rows: 4 }} />
  </div>
}

export default HomePage