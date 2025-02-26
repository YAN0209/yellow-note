import { Button, Popup, TextArea } from 'antd-mobile';
import { FC, useEffect, useState } from 'react'
import './commentInput.css';

interface Props {
    visible: boolean,
    closeCommentInput: () => void,
    replyToComment? : Comment
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

const CommentInput: FC<Props> = props => {
    const [comment, setComment] = useState<string>('');
    const [placeholder, setPlaceholder] = useState<string>('说点什么...');

    useEffect(() => {
        if (props.replyToComment) {
            setPlaceholder(`回复 @${props.replyToComment.username}`);
        }
    }, [props.replyToComment]);

    const onClickSendComment = () => {
        console.log(comment);
        setComment('');
        props.closeCommentInput();
    }

    return (
        <Popup visible={props.visible} onMaskClick={props.closeCommentInput} >
            <div className='popup-comment-input'>
                <div className='comment-text-area'>
                    <TextArea value={comment} autoSize={{ minRows: 3 }} showCount maxLength={140} placeholder={placeholder} onChange={setComment} />
                </div>
                <div className='send-button'>
                    <Button className='send-comment-button' color='danger' onClick={onClickSendComment} disabled={comment.length <= 0}>发送</Button>
                </div>
            </div>
        </Popup >)
}

export default CommentInput;