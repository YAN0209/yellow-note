import { ContentOutline } from 'antd-mobile-icons';
import { FC } from 'react';
import { useNavigate } from 'react-router';
import './topicItem.css';

interface Props {
    topic: Topic
}

interface Topic {
    topicId: number,
    title: string,
    viewCount: number,
    discussCount: number,
}

const TopicItem: FC<Props> = ({ topic }) => {
    const navigate = useNavigate();

    const onClickDiscuss = () => {
        navigate(`/topic/${topic.topicId}`);
    }

    const convertNumber = (value: number): string => {
        if (value < 10000) {
            return String(value);
        } else {
            return `${String(value / 10000)}万`;
        }
    }

    return (<div className='topic-item' onClick={onClickDiscuss}>
        <div className='topic-info'>
            <div className='title'>
                <ContentOutline fontSize={16}/>
                <span>{topic.title}</span>
            </div>
            <div className='topic-data'>
                <span>{`${convertNumber(topic.viewCount)}浏览 | ${convertNumber(topic.discussCount)}讨论`}</span>
            </div>
        </div>
        <div className='discuss'>
            <span className='go-discuss'>去讨论</span>
        </div>
    </div>);
}

export default TopicItem;