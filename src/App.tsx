import "./App.css";
import { useEffect, useState } from "react";
import { mockService } from "./services/mockService";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
}

console.log("testim");

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<Users[]>([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // mockService.getPosts().then((resolve) => setPosts(resolve));
    // mockService.getUsers().then((resolve) => setUsers(resolve));

    Promise.all([mockService.getPosts(), mockService.getUsers()]).then(
      ([posts, users]) => {
        setPosts(posts);
        setUsers(users);
      },
    );

    (async () => {
      const [posts, users] = await Promise.all([
        mockService.getPosts(),
        mockService.getUsers(),
      ]);
      setPosts(posts);
      setUsers(users);
    })();

    return () => {};
  }, []);

  return (
    <div className="App">
      {posts.map((post) => (
        <div key={post.id}>
          <h2 key={post.id}>{post.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
