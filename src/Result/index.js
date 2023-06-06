const Result = ({ result, amount, selectedCurrency }) => {
  return (
    <p>
      <strong>
        {amount} PLN = {result.toFixed(2)} {selectedCurrency}
      </strong>
    </p>
  );
};

export default Result;