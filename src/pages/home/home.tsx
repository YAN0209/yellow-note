import { FC, useEffect, useRef, useState } from 'react';
import { posts as mockPosts } from '../../data';
import { Button, SafeArea } from 'antd-mobile';
import { SearchOutline, UnorderedListOutline } from 'antd-mobile-icons';
import PostList from '../../components/postList/postList';
import './home.css';
import { useNavigate } from 'react-router';

interface Post {
    postId: string,
    postTitle: string,
    postCover: string,
    userAvatar: string,
    username: string,
    likeCount: number
}

const Home: FC = () => {
    const navigate = useNavigate();

    const [headerTab, setHeaderTab] = useState<number>(1);
    const [posts, setPosts] = useState<Post[]>([]);

    const followRef = useRef<HTMLDivElement>(null);
    const discoverRef = useRef<HTMLDivElement>(null);
    const addressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setPosts(mockPosts);
    }, []);

    const onClickSearch = () => {
        navigate('/search');
    }

    useEffect(() => {
        if (followRef.current && discoverRef.current && addressRef.current) {
            followRef.current.className = '';
            discoverRef.current.className = '';
            addressRef.current.className = '';

            if (headerTab === 0) {
                followRef.current.className = 'selected';
            } else if (headerTab === 1) {
                discoverRef.current.className = 'selected';
            } else if (headerTab === 2) {
                addressRef.current.className = 'selected';
            }
        }
    }, [headerTab, followRef, discoverRef, addressRef]);


    return (<div className='home'>
        <div className='header'>
            <SafeArea position='top' />
            <div className='buttons'>
                <div className='menu-button'>
                    <UnorderedListOutline fontSize={22} />
                </div>
                <div className='header-tabs'>
                    <span ref={followRef} onClick={() => setHeaderTab(0)}>关注</span>
                    <span ref={discoverRef} onClick={() => setHeaderTab(1)} className='selected'>发现</span>
                    <span ref={addressRef} onClick={() => setHeaderTab(2)}>地点</span>
                </div>
                <div className='search-button' onClick={onClickSearch}>
                    <SearchOutline fontSize={22} />
                </div>
            </div>
        </div>
        <div className='content'>
            <PostList postList={posts} />
        </div>
        <div className='tabs'>
            <div className='buttons'>
                <span className='selected'>首页</span>
                <span>热门</span>
                <span><Button className='add-post' shape='default'><span>+</span></Button></span>
                <span>消息</span>
                <span>我</span>
            </div>
            <SafeArea position='bottom' />
        </div>
    </div>)
}

export default Home;