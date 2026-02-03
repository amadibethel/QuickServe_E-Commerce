import { useLocation, Link } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const { reference, total } = location.state || {};

  if (!reference) {
    return <Link to="/">Go back home</Link>;
  }

  return (
    <div>
      <h2>Payment Successful 🎉</h2>
      <p>Reference: <strong>{reference}</strong></p>
      <p>Total Paid: ₦{total.toFixed(2)}</p>

      <Link to="/">Continue Shopping</Link>
    </div>
  );
};

export default Success;
