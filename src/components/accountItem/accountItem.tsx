import { Avatar } from 'antd-mobile';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router';
import './accountItem.css';

interface Props {
    account: Account
}

interface Account {
    accountId: string,
    userAvatar: string,
    username: string,
    fans: number,
    followType: number // 0未关注 1已关注 2互相关注
}

const AccountItem: FC<Props> = ({account}) => {
    const navigate = useNavigate();

    const [followType, setFollowType] = useState<number>(account.followType);

    const onClickAccount = () => {
        navigate(`/user/${account.accountId}`)
    }

    const onClickFollow = () => {
        if (followType == 0) {
            setFollowType(1);
        } else if (followType == 1) {
            setFollowType(0);
        } else if (followType == 2) {
            setFollowType(0);
        }
    }

    const followButton = (): React.ReactNode => {
        if (followType == 0) {
            return <span className='follow' onClick={onClickFollow}>关注</span>
        } else if (followType == 1) {
            return <span className='following' onClick={onClickFollow}>已关注</span>
        } else if (followType == 2) {
            return <span className='following' onClick={onClickFollow}>互相关注</span>
        }
        return <></>;
    }

    return (<div className='account-item'>
        <div className='account-info' onClick={onClickAccount}>
            <div className='avatar-info'>
                <Avatar className='avatar' src={account.userAvatar} />
            </div>
            <div className='account-info-detail'>
                <span className='username'>{account.username}</span>
                {
                    account.fans > 0 ?
                        <span className='fans'>粉丝 ·{account.fans}</span>
                        : <></>
                }
                <span className='accountId'>小红书号：{account.accountId}</span>
            </div>
        </div>
        <div className='follow'>
            {followButton()}
        </div>
    </div>);
}

export default AccountItem;