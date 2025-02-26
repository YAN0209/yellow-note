import { Avatar, Image } from "antd-mobile";
import { FC } from "react"
import { useNavigate } from 'react-router';
import './postCard.css'
import { HeartOutline } from 'antd-mobile-icons';

interface Props {
    postId: string,
    postTitle: string,
    postCover: string,
    userAvatar: string,
    username: string,
    likeCount: number
}

const PostCard: FC<Props> = ({ postId, postTitle, postCover, userAvatar, username, likeCount }) => {
    const navigate = useNavigate()

    const onClickPost = () => {
        navigate(`/post/${postId}`);
    }

    return (<div className='post' onClick={onClickPost}>
        <div className='post-cover'>
            <Image src={postCover} fit='contain' style={{maxHeight:'220px'}} />
        </div>
        <div className='post-info'>
            <div className='post-title'>
                <span>{postTitle}</span>
            </div>
            <div className='info'>
                <div className='user-info'>
                    <div className='user-avatar'>
                        <Avatar src={userAvatar} className='avatar' />
                    </div>
                    <div className='username'>{username}</div>
                </div>
                <div className='like-info'>
                    <HeartOutline />
                    <div className='like-count'>{likeCount}</div>

                </div>
            </div>
        </div>
    </div>);
}

export default PostCard;