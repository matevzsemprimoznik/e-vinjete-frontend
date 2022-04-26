import { Button } from 'primereact/button';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Paths } from '../routes';
import { getPurchaseByIdAsync } from '../services/PurchasesService';
import { purchasesSelector } from '../store/features/purchaseSlice';
import { useAppDispatch } from '../store/hooks';
import { Purchase } from '../store/models/Purchase';
import { capitalizeFirstLetterOfString } from '../utils/stringFormatter';

const PurchaseDetails = () => {
  const { currentPurchase } = useSelector(purchasesSelector);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) dispatch(getPurchaseByIdAsync(id));
  }, []);
  return (
    <div style={{ padding: '0 20px' }}>
      <h2>{currentPurchase?.registrskaOznaka}</h2>
      <div>
        {currentPurchase &&
          Object.keys(currentPurchase).map((key, index) => {
            if (key !== 'naziv' && key != 'id' && key != 'vinjeta')
              return (
                <div key={index}>
                  <p>
                    <strong>{capitalizeFirstLetterOfString(key)}:</strong>
                  </p>
                  <p>{currentPurchase[key as keyof Purchase].toString()}</p>
                </div>
              );
          })}
      </div>
      <div style={{ display: 'flex' }}>
        <Button>
          <Link to={`${Paths.SAVE_PURCHASE}/${currentPurchase?.id}`}>
            Uredi
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PurchaseDetails;
