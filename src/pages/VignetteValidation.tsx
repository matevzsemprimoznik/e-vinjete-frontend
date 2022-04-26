import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { checkIfVignetteIsValid } from '../services/PurchasesService';
import { purchasesSelector } from '../store/features/purchaseSlice';
import { useAppDispatch } from '../store/hooks';

const VignetteValidation = () => {
  const { isVignetteValid } = useSelector(purchasesSelector);
  const dispatch = useAppDispatch();

  const { register, handleSubmit, watch } = useForm<{
    registrskaOznaka: string;
  }>();

  const onSubmit = handleSubmit((data) => {
    dispatch(checkIfVignetteIsValid(data.registrskaOznaka));
  });
  console.log(isVignetteValid);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputText {...register('registrskaOznaka')} />
        <Button label='Submit' />
      </form>
      <p>
        {isVignetteValid != null
          ? isVignetteValid
            ? 'Je veljavna'
            : 'Ni veljavna'
          : ''}
      </p>
    </div>
  );
};

export default VignetteValidation;
