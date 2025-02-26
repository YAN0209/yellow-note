import { Avatar, Button, Divider, Image, Swiper } from 'antd-mobile';
import { EditSOutline, HeartOutline, LeftOutline, MessageOutline, SendOutline, StarOutline } from 'antd-mobile-icons';
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import './post.css';
import Comment from '../../components/comment/comment';
import { comment, postDetail } from '../../data';
import CommentInput from '../../components/commentInput/commentInput';

interface PostInfo {
    postId: string,
    postTitle: string,
    postContent: string,
    postPhotos: string[],
    createTime: string,

    userId: string,
    userAvatar: string,
    username: string,

    likeCount: number,
    favoriteCount: number,
    commentCount: number,
    shareCount: number
}

interface Comment {
    commentId: number,
    content: string,
    createTime: Date,
    favoriteCount: number,
    isFirstComment: boolean,

    isReply: boolean,
    replyToUserId: string,
    replyToUsername: string,
    replyToUserAvatar: string,

    userId: string,
    username: string,
    userAvatar: string,

    childComments: Comment[]
}

const Post: FC = () => {
    const params = useParams();
    const postId = params.postId;
    const navigate = useNavigate();
    
    const [sendCommentPopUpVisiable, setSendCommentPopUpVisiable] = useState<boolean>(false);
    const [post, setPost] = useState<PostInfo>({
        postId: '',
        postTitle: '',
        postContent: '',
        postPhotos: [],
        createTime: '',
        userId: '',
        userAvatar: '',
        username: '',
        likeCount: 0,
        favoriteCount: 0,
        commentCount: 0,
        shareCount: 0
    });
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        setPost(postDetail.filter(post => post.postId == postId)[0]);
        setComments(comment);
    }, []);

    const onClickBack = () => {
        navigate(-1)
    }

    const onClickSendComment = () => {
        setSendCommentPopUpVisiable(true);
    }

    const onClickSendCommentMask = () => {
        setSendCommentPopUpVisiable(false);
    }

    return (<div className='post-detail'>
        <div className='header'>
            <div className='user-info'>
                <LeftOutline fontSize={20} onClick={onClickBack}/>
                <Avatar src={post.userAvatar} className='avatar' />
                <span className='username'>{post.username}</span>
            </div>
            <div className='follow'>
                <Button fill='outline' shape='rounded' color='danger' className='follow-button'>关注</Button>
            </div>
        </div>
        <div className='content'>
            <div className='photo'>
                <Swiper indicatorProps={{
                    style: {
                        "--active-dot-color": 'red'
                    }
                }} style={{ '--track-padding': '0 0 16px' }}>
                    {post.postPhotos.map((photo, i) => {
                        return <Swiper.Item key={i}>
                            <Image src={photo} />
                        </Swiper.Item>
                    })}
                </Swiper>
            </div>
            <div className='post-title'>
                {post.postTitle}
            </div>
            <div className='post-content'>
                {post.postContent}
            </div>
            <div className='create-time'>
                {post.createTime}
            </div>
            <div className='divider'>
                <Divider />
            </div>
            <div className='comment'>
                {
                    comments.map(comment => {
                        return <Comment key={comment.commentId} comment={comment} />
                    })
                }
            </div>
            <div className='end'>
                <Divider>到底了</Divider>
            </div>
        </div>
        <div className='footer'>
            <div className='comment-input' onClick={onClickSendComment}>
                <EditSOutline fontSize={26} color='grey' />
                <span>说点什么...</span>
            </div>
            <div className='buttons'>
                <div className='like'>
                    <HeartOutline fontSize={24} />
                    <span>{post.likeCount}</span>
                </div>
                <div className='favorite'>
                    <StarOutline fontSize={24} />
                    <span>{post.favoriteCount}</span>
                </div>
                <div className='comment'>
                    <MessageOutline fontSize={24} />
                    <span>{post.commentCount}</span>
                </div>
                <div className='share'>
                    <SendOutline fontSize={24} />
                    <span>{post.shareCount}</span>
                </div>
            </div>

        </div>
        <CommentInput visible={sendCommentPopUpVisiable} closeCommentInput={onClickSendCommentMask}/>
    </div>);
}

export default Post