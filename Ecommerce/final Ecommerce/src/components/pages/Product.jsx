import React, { useContext } from 'react'
import {ShopContext} from '../context/Shopcontext'
import {useParams} from 'react-router-dom'
import Breadcrum from '../components/Breadcrums/Breadcrum';
import DisplayProdct from '../components/displayProduct/displayProdct';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../components/RelatedProducts/RelatedProduct';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {ProductId} = useParams();
  const product = all_product.find((e) => e.id === Number(ProductId));

  // console.log('all_product:', all_product);
  // console.log('ProductId:', ProductId);
  console.log('Found product:', product);
  return (
    <div>
      <Breadcrum product={product}/>
      <DisplayProdct product={product}/>
      <DescriptionBox />
      <RelatedProduct />
    </div>
  )
}

export default Product
