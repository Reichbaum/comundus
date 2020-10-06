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
    if (!post.id) {
      dispatch(requestPost(postId))
    }
  }, [post])

  const dividerClassName = cn(isFetching && 'hide')

  return <div>
    {isFetching && <div><Preloader/><Skeleton active /></div>}
    <Divider orientation="left" className={dividerClassName}>
      <Title level={1}>{post.title.rendered}</Title>
    </Divider>
    <div>{parse(post.content.rendered)}</div>
  </div>
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

