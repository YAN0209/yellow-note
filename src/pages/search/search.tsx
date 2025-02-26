import { Input } from 'antd-mobile';
import { CameraOutline, CloseCircleFill, DeleteOutline, LeftOutline, MoreOutline, RedoOutline, SearchOutline } from 'antd-mobile-icons';
import { CSSProperties, FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import './search.css';
import { searchHistory as mockSearchHistory, suggest as mockSuggest, hotNew as mockHotNew } from '../../data';

interface HotNew {
    title: string,
    tag: string,
    heat: string
}

const Search: FC = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [keyword, setKeyword] = useState<string>('');
    const [searchHistory, setSearchHistory] = useState<string[]>([]);
    const [suggest, setSuggest] = useState<string[]>([]);
    const [hotNew, setHotNew] = useState<HotNew[]>([]);

    const onClickSearch = (suggestKeyword?: string) => {
        if (suggestKeyword) {
            setKeyword(suggestKeyword);
            navigate(`/searchResult?keyword=${suggestKeyword}`);
        } else {
            navigate(`/searchResult?keyword=${keyword}`);
        }
    }

    const onClickCamera = () => {
        console.log('open camera or photo');
    }

    const onClickClearHistory = () => {
        setSearchHistory([]);
    }

    const onClickRefreshSuggest = () => {
        console.log('refreshing...');
    }

    const onClickBack = () => {
        navigate(-1);
    }

    const onClickClearKeyword = () => {
        setKeyword('');
    }

    useEffect(() => {
        if (params.keyword) {
            setKeyword(params.keyword);
        }
        setSearchHistory(querySearchHistory());
        setSuggest(querySuggest());
        setHotNew(queryHotNew());
    }, []);

    const querySearchHistory = (): string[] => {
        return mockSearchHistory;
    }

    const querySuggest = (): string[] => {
        return mockSuggest;
    }

    const queryHotNew = (): HotNew[] => {
        return mockHotNew;
    }

    const calculateHotNewIndexColor = (index: number): CSSProperties => {
        if (index == 0) {
            return { color: 'rgb(255,35,66)' };
        } else if (index == 1) {
            return { color: 'rgb(255,124,5)' };
        } else if (index == 2) {
            return { color: 'rgb(255,159,15)' };
        }
        return { color: 'black' };
    }

    return (<div className='search-page'>
        <div className='search-line'>
            <LeftOutline fontSize={20} onClick={onClickBack} />
            <div className='search-input'>
                <SearchOutline fontSize={20} />
                <Input value={keyword} onChange={setKeyword} className='input' />
                {
                    keyword ? <CloseCircleFill fontSize={20} onClick={onClickClearKeyword} />
                        : <CameraOutline fontSize={20} onClick={onClickCamera} />

                }
            </div>
            <div className='search-button' onClick={() => onClickSearch()}>
                <span>搜索</span>
            </div>
        </div>
        <div className='page-info'>
            <div className='search-history'>
                <div className='title'>
                    <span>历史记录</span>
                    <DeleteOutline fontSize={18} onClick={onClickClearHistory} className='delete-search-history' />
                </div>
                <div className='content'>
                    {
                        searchHistory.map((item, index) => {
                            return <div className='item' onClick={() => onClickSearch(item)} key={index}>{item}</div>;
                        })
                    }
                </div>
            </div>

            <div className='suggest'>
                <div className='title'>
                    <span>猜你想搜</span>
                    <div className='button'>
                        <RedoOutline fontSize={18} onClick={onClickRefreshSuggest} />
                        <MoreOutline fontSize={18} />
                    </div>
                </div>
                <div className='content'>
                    {
                        suggest.map((item, index) => {
                            return <div className='item' onClick={() => onClickSearch(item)} key={index}>
                                {item}
                            </div>;
                        })
                    }
                </div>
            </div>

            <div className='hot-new'>
                <div className='title'>小黄书热点</div>
                <div className='content'>
                    {
                        hotNew.map((item, index) => {
                            return <div className='item' onClick={() => onClickSearch(item.title)} key={index}>
                                <div className='index' style={calculateHotNewIndexColor(index)}>{index + 1}</div>
                                <div className='item-content'>
                                    <span>{item.title}</span>
                                    <span>{item.tag}</span>
                                </div>
                                <div className='item-heat'>
                                    {item.heat}
                                </div>
                            </div>;
                        })
                    }
                </div>
            </div>
        </div>
    </div>);
}

export default Search;