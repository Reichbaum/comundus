import React, {FC, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getIsFetching, getPost} from '../../redux/selectors'
import {requestPost} from '../../redux/postsReducer'
import Preloader from '../Preloader/Preloader'
import Title from 'antd/es/typography/Title'
import {Divider, Skeleton} from 'antd'
import parse from 'html-react-parser'
import cn from 'classnames'

type PageType = {
  postId: number
}

const Page: FC<PageType> = ({postId}) => {

  const isFetching = useSelector(getIsFetching)
  const post = useSelector(getPost)
  const dispatch = useDispatch()

  useEffect(() => {
    if (postId !== post.id) {
      dispatch(requestPost(postId))
    }
  }, [post, postId, dispatch])

  const hideClassName = cn(isFetching && 'hide')

  return <>
    {
      isFetching && <div>
      <Preloader/>
      <Skeleton active />
      <Skeleton active />
      <Skeleton active />
    </div>
    }
    <Divider orientation="left" className={hideClassName}>
      <Title level={1}>{post.title.rendered}</Title>
    </Divider>
    <div className={hideClassName}>
      {parse(post.content.rendered)}
    </div>
  </>
}

export default Page


// Add nofollow and noopener - <WpApiContent content={post.content.rendered} />
function WpApiContent(props: any): any {
  return parse(props.content, {
    replace: (domNode) => {
      // @ts-ignore
      if (domNode.name === 'a' && !domNode.attribs.rel) {
        // @ts-ignore
        return (<a href={domNode.attribs.href} rel='noopener nofollow'>{domNode.attribs.href}</a>)
      }
    }
  })
}

