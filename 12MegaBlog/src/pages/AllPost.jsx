import appWriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useEffect, useState } from "react";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appWriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap gap-4">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
