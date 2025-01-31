import { formatPrice } from './helpers';
import './styles.css';

type Props = {
  amount: number;
  totalPrice: number;
  onSubmit: () => void;
};

const OrderSummary: React.FC<Props> = ({ amount, totalPrice, onSubmit }) => {
  return (
    <div className="order-summary-container">
      <div className="order-summary-content">
        <div>
          <span className="amount-selected-container">
            <strong className="amount-selected">{amount}</strong>
            PEDIDOS SELECIONADOS
          </span>
          <span className="order-summary-total">
            <strong className="amount-selected">
              {formatPrice(totalPrice)}
            </strong>
            VALOR TOTAL
          </span>
        </div>
        <button className="order-summary-make-order" onClick={onSubmit}>
          FAZER PEDIDO
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
