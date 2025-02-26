import { Avatar, Input } from 'antd-mobile';
import { LeftOutline, MessageOutline, MoreOutline, SearchOutline, TextOutline, UserSetOutline } from 'antd-mobile-icons';
import { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import PostList from '../../components/postList/postList';
import './user.css';

interface UserInfo {
    userId: string,
    username: string,
    userAvatar: string,
    userTags: string[],
    following: number,
    follower: number,
    like: number,

    background: string,
    followType: number // 0未关注 1被关注 2已关注
}

interface PostInfo {
    postId: string,
    postTitle: string,
    postCover: string,
    userAvatar: string,
    username: string,
    likeCount: number
}

const User: FC = () => {
    const navigate = useNavigate();
    const params = useParams();
    const userId = params.userId;

    const [userInfo, setUserInfo] = useState<UserInfo>({
        userId: '',
        username: '',
        userAvatar: '',
        userTags: [],
        following: 0,
        follower: 0,
        like: 0,
        background: '',
        followType: 0
    });
    const [posts, setPosts] = useState<PostInfo[]>([]);
    const [keyword, setKeyword] = useState<string>('');
    const [showSearchInput, setShowSearchInput] = useState<boolean>(false);

    useEffect(() => {
        if (userId) {
            setUserInfo(queryUser());
            setPosts(queryPost());
        } else {
            navigate(-1);
        }
    }, []);

    const showInteractive = (): React.ReactNode => {
        if (userInfo.followType == 0) {
            return <>
                <span className='follow'>关注</span>
                <span className='send-message-icon'><MessageOutline /></span>
            </>
        } else if (userInfo.followType == 1) {
            return <>
                <span className='follow'>回关</span>
                <span className='send-message-icon'><MessageOutline /></span>
            </>
        } else if (userInfo.followType == 2) {
            return <>
                <span className='send-message'>发私信</span>
                <span className='send-message-icon'><UserSetOutline /></span>
            </>
        }
    }

    const queryUser = (): UserInfo => {
        return {
            userId: '123456',
            username: 'Kwyun.Hwang',
            userAvatar: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wikipedia_facial_expression.jpg',
            userTags: ['25岁', '猛男'],
            following: 5,
            follower: 3,
            like: 0,
            background: '',
            followType: 2
        };
    }

    const queryPost = (): PostInfo[] => {
        return [];
    }

    return (<div className='user-page'>
        <div className='background'>
            <div className='nav-bar'>
                <LeftOutline />
                <MoreOutline />
            </div>
            <div className='user-info'>
                <div className='main-info'>
                    <div className='avatar'>
                        <Avatar src={userInfo.userAvatar} style={{ '--border-radius': '25px', '--size': '80px' }} />
                    </div>
                    <div className='username-id'>
                        <span className='username'>
                            {userInfo.username}
                        </span>
                        <span className='user-id'>
                            小红书号：{userInfo.userId}
                        </span>
                    </div>
                </div>
                <div className='tags'>
                    {
                        userInfo.userTags.map(item => {
                            return <div className='tag'>{item}</div>;
                        })
                    }
                </div>
                <div className='other-info'>
                    <div className='user-count-data'>
                        <div className='following'>
                            <span className='following-count'>{userInfo.following}</span>
                            <span>关注</span>
                        </div>
                        <div className='follower'>
                            <span className='follower-count'>{userInfo.follower}</span>
                            <span>粉丝</span>
                        </div>
                        <div className='like-and-col'>
                            <span className='like-and-col-count'>{userInfo.like}</span>
                            <span>获赞与收藏</span>
                        </div>
                    </div>
                    <div className='interactive'>
                        {showInteractive()}
                    </div>

                </div>
            </div>
        </div>
        <div className='post-info'>
            <div className='search-bar'>
                {
                    showSearchInput ? <>
                        <span className='sear-input'>
                            <SearchOutline />
                            <Input value={keyword} placeholder='搜索ta的笔记' onChange={setKeyword} />
                        </span>
                        <span className='cancel' onClick={() => setShowSearchInput(false)}>取消</span>
                    </>
                        : <>
                            <span className='title'>笔记</span>
                            <span className='search' onClick={() => setShowSearchInput(true)}><SearchOutline /></span>
                        </>
                }

            </div>
            <div className='posts'>
                {
                    posts.length > 0 ? <PostList postList={posts} />
                        : <div className='no-post'>
                            <span className='no-post-icon'><TextOutline /></span>
                            <span>TA还没有发布笔记哦</span>
                        </div>
                }

            </div>
        </div>
    </div>);
}

export default User;