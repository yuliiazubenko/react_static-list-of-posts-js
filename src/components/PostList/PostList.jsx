import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => {
        return <PostInfo key={post.id} post={post} />;
      })}
    </div>
  );
};
