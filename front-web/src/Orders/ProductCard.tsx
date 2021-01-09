import { Product } from '../types';

const ProductCard: React.FC<Product> = ({
  description,
  imageUri,
  name,
  price,
}) => {
  function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });

    return formatter.format(price);
  }
  return (
    <div className="order-card-container">
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
