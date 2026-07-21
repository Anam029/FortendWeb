import FeedCard from "../Components/Layout/FeedCard";
import GetPost from "../api/PostApi";
import { useState, 
  useEffect
 } from "react";


export default function Feed() {

  const [posts , setPosts] = useState([])

    useEffect(() => {
      async function fetchPost(){
        try {
          const data = await GetPost()
          setPosts(data)
        } catch (error) {
          console.log(error)
        }
      }
      fetchPost()
      
    }, [])
    




  return (
    <div className="flex flex-col gap-5">
      {posts.map((post) => (
        <FeedCard key={post.id} post={post} />
      ))}
    </div>
  );
}