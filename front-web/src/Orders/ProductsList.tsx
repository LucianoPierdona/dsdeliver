import { Product } from '../types';
import { checkIsSelected } from './helpers';
import ProductCard from './ProductCard';

type Props = {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  selectedProducts: Product[];
};

const ProductsList: React.FC<Props> = ({
  products,
  onSelectProduct,
  selectedProducts,
}) => {
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
              onSelectProduct={(product) => onSelectProduct(product)}
              isSelected={checkIsSelected(selectedProducts, product)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
