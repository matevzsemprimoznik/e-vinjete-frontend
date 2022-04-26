import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  addPurchaseAsync,
  getPurchaseByIdAsync,
} from '../services/PurchasesService';
import { getVignettesAsync } from '../services/VignettesService';
import { purchasesSelector } from '../store/features/purchaseSlice';
import { vignettesSelector } from '../store/features/vignetteSlice';
import { useAppDispatch } from '../store/hooks';
import { Purchase } from '../store/models/Purchase';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Vignette } from '../store/models/Vignette';

const AddPurchase = () => {
  const { currentPurchase } = useSelector(purchasesSelector);
  const { vignettes } = useSelector(vignettesSelector);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const { register, handleSubmit, watch } = useForm<Purchase>({});

  useEffect(() => {
    dispatch(getVignettesAsync());
    if (id != null) dispatch(getPurchaseByIdAsync(id));
  }, []);

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    dispatch(
      addPurchaseAsync({
        ...data,
        datumZacetkaVeljavnosti: data.datumZacetkaVeljavnosti
          .toString()
          .substring(0, data.datumZacetkaVeljavnosti.toString().indexOf('T')),
      })
    );
  });

  return (
    <div>
      <form
        onSubmit={onSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label htmlFor='elektronskiNaslov'>Elektronski naslov</label>
        <InputText {...register('elektronskiNaslov')} />
        <label htmlFor='registrskaOznaka'>Registrska oznaka</label>
        <InputText {...register('registrskaOznaka')} />
        <label htmlFor='vinjeta'>Vinjeta</label>
        <Dropdown
          value={
            watch('vinjeta') || {
              label: vignettes[0]?.naziv + vignettes[0]?.tipVozila,
              value: vignettes[0]?.id,
            }
          }
          {...register('vinjeta')}
          options={vignettes.map((vignette: Vignette) => {
            return {
              label: vignette.naziv + ' ' + vignette.tipVozila,
              value: vignette,
            };
          })}
        />
        <label htmlFor='datumZacetkaVeljavnosti'>
          Datum zacetka veljavnosti
        </label>
        <Calendar {...register('datumZacetkaVeljavnosti')} />
        <label htmlFor='prodajalec'>Prodajalec</label>
        <InputText {...register('prodajalec')} />
        <Button label='Submit' />
      </form>
    </div>
  );
};

export default AddPurchase;
