import { Image } from 'antd-mobile';
import { RightOutline } from 'antd-mobile-icons';
import { FC } from 'react';
import { useNavigate } from 'react-router';
import './product.css';

interface Props {
    product: ProductInfo
}

interface ProductInfo {
    productId: number,
    title: string,
    picture: string,
    price: number,
    buyCount: number,
    tag: string[],
    shopId: number,
    shopName: string
}

const Product: FC<Props> = ({ product }) => {
    const navigate = useNavigate();

    const onClickProduct = () => {
        navigate(`/product/${product.productId}`);
    }

    const onClickShop = () => {
        navigate(`/shop/${product.shopId}`);
    }

    const getYuan = (): number => {
        return Math.floor(product.price / 100);
    }

    const getCent = (): number => {
        let cent = product.price % 100;
        if (cent % 10 == 0) {
            cent /= 10;
        }
        return cent;
    }

    return (<div className='product'>
        <div className='product-info' onClick={onClickProduct}>
            <div className='picture'>
                <Image src={product.picture} />
            </div>
            <div className='title'>
                {product.title}
            </div>
            <div className='buy-info'>
                <span className='price'>
                    <span className='symbol'>¥</span>
                    <span className='yuan'>{getYuan()}</span>
                    {
                        getCent() != 0 ?
                        <span className='cent'>.{getCent()}</span>
                        : <></>
                    }
                </span>
                {
                    product.buyCount > 0 ?
                        <span className='buy-count'>
                            {product.buyCount}人已买
                        </span>
                        : <></>
                }
            </div>
            {
                product.tag.length > 0 ?
                    <div className='tags'>
                        {
                            product.tag.map((item, index) => {
                                return <span className='tag' key={index}>{item}</span>
                            })
                        }
                    </div>
                    : <></>
            }
        </div>
        <div className='shop-info' onClick={onClickShop}>
            <span>{product.shopName} <RightOutline /></span>
        </div>
    </div>);
}

export default Product;