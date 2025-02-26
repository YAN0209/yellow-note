import { Input, Mask } from 'antd-mobile';
import { CloseCircleFill, FilterOutline, LeftOutline, LoopOutline, SearchOutline, UpOutline } from 'antd-mobile-icons';
import { FC, useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import PostList from '../../components/postList/postList';
import './searchResult.css'
import { posts as mockPosts, searchResultTag as mockTag, accounts as mockAccounts, topics as mockTopics, products as mockProducts } from '../../data';
import AccountItem from '../../components/accountItem/accountItem';
import TopicList from '../../components/topicList/topicList';
import Masonry from 'react-masonry-css';
import Product from '../../components/product/product';
import ProductList from '../../components/productList/productList';

interface Post {
    postId: string,
    postTitle: string,
    postCover: string,
    userAvatar: string,
    username: string,
    likeCount: number
}

interface Account {
    accountId: string,
    userAvatar: string,
    username: string,
    fans: number,
    followType: number // 0未关注 1已关注 2互相关注
}

interface Topic {
    topicId: number,
    title: string,
    viewCount: number,
    discussCount: number,
}

interface Product {
    productId: number,
    title: string,
    picture: string,
    price: number,
    buyCount: number,
    tag: string[],
    shopId: number,
    shopName: string
}

interface SearchFilter {
    sortType: number,
    noteType: number,
    createTime: number,
    searchRange: number,
    address: number
}

const SearchResult: FC = () => {
    const searchTypes = ['全部', '账号', '话题', '商品'];
    const sortType = ['综合', '最新', '最多点赞', '最多评论', '最多收藏'];
    const noteType = ['不限', '视频', '图文', '直播'];
    const createTime = ['不限', '一天内', '一周内', '半年内'];
    const searchRange = ['不限', '已看过', '未看过', '已关注'];
    const address = ['不限', '同城', '附近'];

    const navigate = useNavigate();
    const [params] = useSearchParams();

    const [keyword, setKeyword] = useState<string>('');
    const [posts, setPosts] = useState<Post[]>([]);
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [topics, setTopics] = useState<Topic[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [searchType, setSearchType] = useState<number>(0);
    const [searchResultTag, setSearchResultTag] = useState<string[]>([]);
    const [selectedSearchResultTag, setSelectedSearchResultTag] = useState<number>(0);
    const [searchFilter, setSearchFilter] = useState<SearchFilter>({
        sortType: 0,
        noteType: 0,
        createTime: 0,
        searchRange: 0,
        address: 0
    });
    const [showFilter, setShowFilter] = useState<boolean>(false);

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setKeyword(params.get('keyword') as string);
        const searchType = params.get('searchType');
        if (searchType == null) {
            setSearchType(0);
        } else {
            setSearchType(parseInt(searchType));
        }
        setSearchResultTag(querySearchResultTag());
        setPosts(queryPost());
    }, []);

    const onClickBack = () => {
        navigate('/search');
    }

    const onClickClearKeyword = () => {
        navigate('/search');
    }

    const onClickSearch = () => {
        switch (searchType) {
            case 0: setPosts(queryPost()); break;
            case 1: setAccounts(queryAccount()); break;
            case 2: setTopics(queryTopic()); break;
            case 3: setProducts(queryProduct()); break;
        }
    }

    const onClickSearchResultTag = (index: number) => {
        setSelectedSearchResultTag(index);
        setPosts(queryPost());
    }

    const onClickSearchType = (newSearchType: number) => {
        if (searchType == 0 && newSearchType == 0) {
            setShowFilter(!showFilter);
        } else if (searchType != newSearchType) {
            setSearchType(newSearchType);
            switch (newSearchType) {
                case 0: setPosts(queryPost()); break;
                case 1: setAccounts(queryAccount()); break;
                case 2: setTopics(queryTopic()); break;
                case 3: setProducts(queryProduct()); break;
            }
        }
    }

    const onClickMask = () => {
        setShowFilter(false);
    }

    const onClickSearchFilterTag = (type: 'sortType' | 'noteType' | 'createTime' | 'searchRange' | 'address', value: number) => {
        setSearchFilter({ ...searchFilter, [type]: value });
        setPosts(queryPost());
    }

    const onClickResetSearchFilterTag = () => {
        setSearchFilter({
            sortType: 0,
            noteType: 0,
            createTime: 0,
            searchRange: 0,
            address: 0
        });
        setPosts(queryPost());
    }

    const showContent = (): React.ReactNode => {
        switch (searchType) {
            case 0: return <PostList postList={posts} />;
            case 1: return accounts.map(item => <AccountItem account={item} key={item.accountId} />);
            case 2: return <TopicList topics={topics} />;
            case 3: return <ProductList products={products} />;
        }
    }

const queryPost = (): Post[] => {
    return mockPosts;
    // return [];
}

const queryAccount = (): Account[] => {
    return mockAccounts;
}

const queryTopic = (): Topic[] => {
    return mockTopics;
}

const queryProduct = (): Product[] => {
    return mockProducts;
}

const querySearchResultTag = (): string[] => {
    return mockTag;
}

return (<div className='search-result-page'>
    <div className='search-area'>
        <div className='search-line'>
            <LeftOutline fontSize={20} onClick={onClickBack} />
            <div className='search-input'>
                <SearchOutline fontSize={20} />
                <Input value={keyword} onChange={setKeyword} className='input' />
                <CloseCircleFill fontSize={20} onClick={onClickClearKeyword} />
            </div>
            <div className='search-button' onClick={() => onClickSearch()}>
                <span>搜索</span>
            </div>
        </div>
        <div className='search-type'>
            {
                searchTypes.map((item, index) => {
                    return <span onClick={() => onClickSearchType(index)} key={index}>
                        <span className={searchType == index ? 'selected' : ''}>{item}</span>
                        {index == 0 ? <FilterOutline style={{ color: 'black' }} /> : <></>}</span>
                })
            }
        </div>
        <Mask visible={showFilter} opacity={0} style={{ top: 'unset', left: 'unset' }} onMaskClick={onClickMask} />
    </div>


    <div className='search-result-area'>
        {
            searchResultTag.length > 0 && searchType == 0 ?
                <div className='search-result-tag'>
                    {
                        searchResultTag.map((item, index) => (
                            <div
                                className={'tag' + (index == selectedSearchResultTag ? ' selected' : '')}
                                key={index}
                                onClick={() => onClickSearchResultTag(index)}
                            >
                                {item}
                            </div>
                        ))
                    }
                </div>
                : <></>
        }
        <div className='content' ref={contentRef}>
            {
                showContent()
            }
        </div>
        <Mask visible={showFilter} opacity='thin' style={{ top: 'unset', left: 'unset', "--z-index": '1001' }} onMaskClick={onClickMask}>
            <div className='search-filter'>
                <div className='filter'>
                    <div className='sort-type'>
                        <div className='title'>排序依据</div>
                        <div className='items'>
                            {
                                sortType.map((item, index) => {
                                    return <div className={'item ' + (index == searchFilter.sortType ? 'selected' : '')} onClick={() => onClickSearchFilterTag('sortType', index)} key={index}>{item}</div>
                                })
                            }
                        </div>
                    </div>
                    <div className='note-type'>
                        <div className='title'>笔记类型</div>
                        <div className='items'>
                            {
                                noteType.map((item, index) => {
                                    return <div className={'item ' + (index == searchFilter.noteType ? 'selected' : '')} onClick={() => onClickSearchFilterTag('noteType', index)} key={index}>{item}</div>
                                })
                            }
                        </div>
                    </div>
                    <div className='create-time'>
                        <div className='title'>发布时间</div>
                        <div className='items'>
                            {
                                createTime.map((item, index) => {
                                    return <div className={'item ' + (index == searchFilter.createTime ? 'selected' : '')} onClick={() => onClickSearchFilterTag('createTime', index)} key={index}>{item}</div>
                                })
                            }
                        </div>
                    </div>
                    <div className='search-range'>
                        <div className='title'>搜索范围</div>
                        <div className='items'>
                            {
                                searchRange.map((item, index) => {
                                    return <div className={'item ' + (index == searchFilter.searchRange ? 'selected' : '')} onClick={() => onClickSearchFilterTag('searchRange', index)} key={index}>{item}</div>
                                })
                            }
                        </div>
                    </div>
                    <div className='address'>
                        <div className='title'>位置距离</div>
                        <div className='items'>
                            {
                                address.map((item, index) => {
                                    return <div className={'item ' + (index == searchFilter.address ? 'selected' : '')} onClick={() => onClickSearchFilterTag('address', index)} key={index}>{item}</div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='buttons'>
                    <span onClick={onClickResetSearchFilterTag}><LoopOutline /> 重置</span>
                    <span onClick={onClickMask}><UpOutline /> 收起</span>
                </div>
            </div>
        </Mask>
    </div>

</div>);
}

export default SearchResult;
