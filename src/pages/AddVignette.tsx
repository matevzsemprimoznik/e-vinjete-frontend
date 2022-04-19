import React from 'react';
import { InputText } from 'primereact/inputtext';
import { useForm } from 'react-hook-form';
import { VehicleType, Vignette } from '../store/models/Vignette';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { useAppDispatch } from '../store/hooks';
import { addVignetteAsync } from '../services/VignettesService';

const AddVignette = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, watch } = useForm<Vignette>({
    defaultValues: {
      tipVozila: VehicleType.ENOSLEDNA,
    },
  });

  const onSubmit = handleSubmit((data) => {
    dispatch(addVignetteAsync(data));
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputText {...register('naziv')} />
        <Dropdown
          value={watch('tipVozila') || 'ENOSLEDNA'}
          {...register('tipVozila')}
          options={Object.keys(VehicleType)
            .filter((key) => isNaN(Number(key)))
            .map((key) => {
              return { label: key, value: key };
            })}
        />
        <InputText {...register('veljavnost')} min={0} step={1} />
        <Button label='Submit' />
      </form>
    </div>
  );
};

export default AddVignette;
