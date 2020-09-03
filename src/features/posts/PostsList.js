import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { TimeAgo } from '../posts/timeAgo'
import { PostAuthor } from './PostAuthor'

export const PostsList = () => {
  const posts = useSelector(state => state.posts)

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map(post => {
    return (
      <article className="post-excerpt" key={post.id}>
        <h3>{post.title}</h3>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.content.substring(0, 100)}</p>
        <Link to={`/posts/${post.id}`} className="button muted-button">
          View Post
        </Link>
      </article>
    )
  })
  
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}
