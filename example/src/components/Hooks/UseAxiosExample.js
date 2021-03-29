import { useState } from "react";
import { useAxios } from "light-hooks";
import styles from "../common.module.scss";

const baseUrl = "https://jsonplaceholder.typicode.com";

const UseAxiosExample = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState("");
  const { get: getPhotos, data: photos, isLoading: isPhotosLoading } = useAxios(
    `${baseUrl}/photos`
  );
  const posts = useAxios(`${baseUrl}/posts`, "");
  const userPosts = useAxios(`${baseUrl}/users/${id}/posts`, "");

  return (
    <>
      <div>
        <button className={styles.btn} onClick={() => getPhotos()}>
          {isPhotosLoading ? "loading..." : "get photos"}
        </button>
        <div
          style={{
            maxHeight: 480,
            overflow: "auto",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {photos.map((data) => (
            <img
              key={`photos_${data.id}`}
              src={data.thumbnailUrl}
              alt="example img"
            />
          ))}
        </div>
      </div>
      <div>
        <input
          className={styles.input}
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="user id"
        />
        <button className={styles.btn} onClick={() => userPosts.get()}>
          {userPosts.isLoading ? "loading..." : "get user posts"}
        </button>
        {<div>{JSON.stringify(userPosts.data)}</div>}
      </div>
      <div>
        <input
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />
        <input
          className={styles.input}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="body"
        />
        <button
          className={styles.btn}
          onClick={() => posts.post({ title, body })}
        >
          {posts.isLoading ? "loading..." : "post posts"}
        </button>
        {<div>{JSON.stringify(posts.data)}</div>}
      </div>
    </>
  );
};

export default UseAxiosExample;
