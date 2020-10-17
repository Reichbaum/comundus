import React from 'react'
import Page from './Page'

const AboutPage = React.memo(() => {

  const postId = 700

  return <Page postId={postId}/>
})

export default AboutPage