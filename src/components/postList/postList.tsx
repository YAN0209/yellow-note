import { FC } from 'react'
import Masonry from 'react-masonry-css';
import PostCard from '../postCard/postCard';
import './postList.css';

interface Props {
    postList: Post[]
}

interface Post {
    postId: string,
    postTitle: string,
    postCover: string,
    userAvatar: string,
    username: string,
    likeCount: number
}

const PostList: FC<Props> = ({ postList }) => {

    return (
        <Masonry breakpointCols={2} className='post-list' columnClassName='post-column'>
            {postList.map(post => {
                return <PostCard key={post.postId} postId={post.postId} postTitle={post.postTitle} postCover={post.postCover} userAvatar={post.userAvatar} username={post.username} likeCount={post.likeCount} />
            })}
        </Masonry>
    );
}

export default PostList;