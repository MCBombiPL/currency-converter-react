const Result = ({ result, amount, selectedCurrency }) => {
  return (
    <p>
      {result !== null && result !== "" && (
        <strong>
          {amount} PLN = {result.toFixed(2)} {selectedCurrency}
        </strong>
      )}
    </p>
  );
};

export default Result;
