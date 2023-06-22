import { useState, useEffect, useContext } from "react"

import PostCard from "./PostCard"
import { GlobalContext } from "../App"


export default function PostsCollection() {

  const { api } = useContext(GlobalContext)

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`${api}/posts.json`)
    .then(r => r.json())
    .then(postsData => {
      setPosts(postsData)
    })
  }, [])

  console.log(posts)

  const postCardComponents = posts.map((post) => {
    return <PostCard key={post.id} post={post} />
  })


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center mx-auto">
      {postCardComponents}
    </div>
  )
}