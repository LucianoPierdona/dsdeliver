import { Product } from '../types';
import { formatPrice } from './helpers';

interface Props extends Product {
  onSelectProduct: (product: Product) => void;
  isSelected: boolean;
}

const ProductCard: React.FC<Props> = ({
  description,
  imageUri,
  name,
  price,
  id,
  onSelectProduct,
  isSelected,
}) => {
  return (
    <div
      className={`order-card-container ${isSelected ? 'selected' : ''}`}
      onClick={() =>
        onSelectProduct({ description, imageUri, name, price, id })
      }
    >
      <h3 className="order-card-title">{name}</h3>
      <img src={imageUri} alt={name} className="order-card-image" />
      <h3 className="order-card-price">{formatPrice(price)}</h3>
      <div className="order-card-description">
        <h3>Descrição</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
