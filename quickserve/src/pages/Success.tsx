import { useLocation } from "react-router-dom";

export default function Success() {
  const { state } = useLocation();

  return (
    <>
      <h1>Payment Successful 🎉</h1>
      <p>Reference: {state?.reference}</p>
    </>
  );
}
