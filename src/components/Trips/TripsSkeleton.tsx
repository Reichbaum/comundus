import {Skeleton} from 'antd'
import React from 'react'

const TripsSkeleton = () => {
  return <div className='trips__skeleton-wrapper'>
    <div className='trips__skeleton-item'>
      <Skeleton.Avatar active size={314} shape='square'/>
      <Skeleton active paragraph={false}/>
    </div>
    <div className='trips__skeleton-item'>
      <Skeleton.Avatar active size={314} shape='square'/>
      <Skeleton active paragraph={false}/>
    </div>
    <div className='trips__skeleton-item'>
      <Skeleton.Avatar active size={314} shape='square'/>
      <Skeleton active paragraph={false}/>
    </div>
  </div>
}

export default TripsSkeleton