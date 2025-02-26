import { FC } from 'react'
import Masonry from 'react-masonry-css'
import Product from '../product/product'
import './productList.css';

interface Props {
    products: Product[]
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

const ProductList:FC<Props> = ({products}) => {
    return <Masonry breakpointCols={2} className='product-list' columnClassName='product-column'>
        {
            products.map((item, index) => {
                return <Product product={item} key={index} />
            })
        }
    </Masonry>
}

export default ProductList;