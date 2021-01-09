import { Product } from '../types';
import ProductCard from './ProductCard';

type Props = {
  products: Product[];
};

const ProductsList: React.FC<Props> = ({ products }) => {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              description={product.description}
              imageUri={product.imageUri}
              price={product.price}
              name={product.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
