import { Footer } from 'antd-mobile';
import { FC } from 'react'
import TopicItem from '../topicItem/topicItem';
import './topicList.css';

interface Props {
    topics: Topic[]
}

interface Topic {
    topicId: number,
    title: string,
    viewCount: number,
    discussCount: number,
}

const TopicList: FC<Props> = ({ topics }) => {
    return (<div className='topic-list'>
        {
            topics.map(item => <TopicItem topic={item} key={item.topicId} />)
        }
        < Footer label='无更多话题' className='footer' />
    </div>);
}

export default TopicList;