const Result = ({ result, amount, selectedCurrency }) => (
  <p>
    {result && (
      <strong>
        {amount} PLN = {result.toFixed(2)} {selectedCurrency}
      </strong>
    )}
  </p>
);

export default Result;
