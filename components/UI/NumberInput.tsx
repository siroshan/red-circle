import React, { FC } from 'react';

type NumberInputProps = {
  qty: number;
  setQty: React.Dispatch<React.SetStateAction<number>>;
  maxQty: number;
  isDisabled: boolean;
};

const NumberInput: FC<NumberInputProps> = ({
  qty,
  setQty,
  maxQty,
  isDisabled,
}) => {
  const onAddHandler = () => {
    if (qty <= maxQty) {
      setQty(qty + 1);
    }
  };

  const onMinusHandler = () => {
    if (qty >= 0) {
      setQty(qty - 1);
    }
  };
  return (
    <div className='number-input-wrap'>
      <button className='minus' onClick={onMinusHandler} disabled={isDisabled}>
        -
      </button>
      <input type='number' value={qty} disabled />
      <button className='plus' onClick={onAddHandler} disabled={isDisabled}>
        +
      </button>
    </div>
  );
};

export default NumberInput;
