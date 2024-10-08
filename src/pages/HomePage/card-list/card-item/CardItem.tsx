import { FC } from 'react'
import { IProduct } from '../../../../store/products/products.type';
import styles from './CardItem.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../../store/cart/cart.slice';


type CardItemProps = {
  item: IProduct
}

const CardItem: FC<CardItemProps> = ({ item }) => {

  const { products } = useAppSelector(state => state.cartSlice);
  const productMatching = products.some((product) => product.id === item.id);
  // console.log(products[0].id)
  // console.log(item.id)
  const dispathch =useAppDispatch();

  const addItemToCart = () => {
    dispathch(addToCart(item));
  };
  return (
    <li className={styles.card_item}>
      <Link to={`/product/${item.id}`}>
        <img
          src={item.image}
          width={"80%"}
          height={"200px"}
          alt="product card"
        />
      </Link>

      <h5>{item.title.substring(0, 15)}...</h5>

      <div>
        <button
          disabled={productMatching}
          onClick={() => !productMatching && addItemToCart()}
        >
          {productMatching ? "장바구니에 담긴 제품" : "장바구니에 담기"}
        </button>
        <p>$ {item.price}</p>
      </div>

    </li>
  )
}

export default CardItem