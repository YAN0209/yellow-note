import { Avatar, Divider } from 'antd-mobile';
import { HeartOutline } from 'antd-mobile-icons';
import { FC, useRef, useState } from 'react'
import './comment.css';
import CommentInput from '../commentInput/commentInput';

interface Props {
    comment: CommentInfo
}

interface CommentInfo {
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

    childComments: CommentInfo[]
}

const Comment: FC<Props> = props => {
    const [comment, setComment] = useState<CommentInfo>(props.comment);
    const [commentInputVisible, setCommentInputVisible] = useState<boolean>(false);
    // const [replyCommentId, setReplyCommentId] = useState<number | null>(null);
    const replyComment = useRef<CommentInfo>();

    const [showCommentCount, setShowCommentCount] = useState<number>(1);

    const showMoreCommentRef = useRef<HTMLDivElement | null>(null);

    const onClickShowMoreComment = () => {
        setShowCommentCount(comment.childComments.length);
        if (showMoreCommentRef.current) {
            showMoreCommentRef.current.style.display = 'none';
        }
    }

    const onClickFavorite = (commentId: number) => {
        // 使用函数式更新，确保基于最新状态
        setComment(prevComment => {
            // 如果当前评论是目标评论
            if (prevComment.commentId === commentId) {
                return {
                    ...prevComment,
                    favoriteCount: prevComment.favoriteCount + 1, // 更新 favoriteCount
                };
            }

            // 否则，遍历子评论
            const updatedChildComments = prevComment.childComments.map(childComment => {
                if (childComment.commentId === commentId) {
                    return {
                        ...childComment,
                        favoriteCount: childComment.favoriteCount + 1, // 更新子评论的 favoriteCount
                    };
                }
                return childComment; // 非目标评论保持不变
            });

            // 返回更新后的评论对象
            return {
                ...prevComment,
                childComments: updatedChildComments,
            };
        });
    }

    const onClickReply = (comment: CommentInfo) => {
        replyComment.current = comment;
        setCommentInputVisible(true);
    }

    const onClickCommentInputMask = () => {
        setCommentInputVisible(false);
    }

    return (<div className='post-comment'>
        <div className='user-avatar'>
            <Avatar src={comment.userAvatar} className='avatar' />
        </div>
        <div className='comment-content'>
            <div className='main-comment'>
                <div className='main-comment-content'>
                    <div className='main-comment-username'>
                        {comment.username}
                    </div>
                    <div className='main-comment-content'>
                        <span>{comment.content}
                            <div className='comment-extra-info'>
                                <span className='create-time'>{`${(comment.createTime.getMonth() + 1).toString().padStart(2, '0')}-${(comment.createTime.getDate()).toString().padStart(2, '0')}`}</span>
                                <span className='reply-button' onClick={() => onClickReply(comment)}>回复</span>
                            </div>
                        </span>
                    </div>

                    {
                        comment.isFirstComment ?
                            <div className='tag'><span>首评</span></div> : <></>
                    }
                </div>
                <div className='favorite' onClick={() => onClickFavorite(comment.commentId)}>
                    <HeartOutline fontSize={18} />
                    {
                        comment.favoriteCount > 0 ?
                            <span>{comment.favoriteCount}</span>
                            : <></>
                    }
                </div>
            </div>
            <div>

                {
                    comment.childComments.slice(0, showCommentCount)
                        .map(comment => {
                            return <div className='sub-comment' key={comment.commentId}>
                                <div className='user-avatar'>
                                    <Avatar src={comment.userAvatar} className='avatar' />
                                </div>
                                <div className='sub-comment-content'>
                                    <div className='username'>
                                        {comment.username}
                                    </div>
                                    <div className='content'>
                                        <div className='content-info'>
                                            {
                                                comment.isReply ?
                                                    <>回复 <span className='reply-to-username'>{comment.replyToUsername} :</span></>
                                                    : <></>
                                            }
                                            <span>{comment.content}</span>
                                        </div>
                                        <div className='content-extra-info'>
                                            <span className='create-time'>{`${(comment.createTime.getMonth() + 1).toString().padStart(2, '0')}-${(comment.createTime.getDate()).toString().padStart(2, '0')}`}</span>
                                            <span className='reply-button' onClick={() => onClickReply(comment)}>回复</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='favorite' onClick={() => onClickFavorite(comment.commentId)}>
                                    <HeartOutline fontSize={18} />
                                    {
                                        comment.favoriteCount > 0 ?
                                            <span>{comment.favoriteCount}</span>
                                            : <></>
                                    }
                                </div>
                            </div>
                        })
                }
                {
                    comment.childComments.length > 3 ?
                        (<div className='show-more-comment' ref={showMoreCommentRef} >
                            <div className='divider'>
                                <Divider />
                            </div>
                            <div className='show-more-button' onClick={onClickShowMoreComment}>
                                <span>展开{comment.childComments.length - 1}条回复</span>
                            </div>
                        </div>)
                        : <></>
                }
            </div>
        </div>
        <CommentInput visible={commentInputVisible} closeCommentInput={onClickCommentInputMask} replyToComment={replyComment.current} />
    </div>);
}

export default Comment;