import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVignetteByIdAsync } from '../services/VignettesService';
import {
  getVignetteById,
  vignettesSelector,
} from '../store/features/vignetteSlice';
import { useAppDispatch } from '../store/hooks';
import { Vignette } from '../store/models/Vignette';
import { capitalizeFirstLetterOfString } from '../utils/stringFormatter';

const VignetteDetails = () => {
  const { currentVignette } = useSelector(vignettesSelector);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) dispatch(getVignetteByIdAsync(id));
  }, []);

  return (
    <div style={{ padding: '0 20px' }}>
      <h2>{currentVignette?.naziv}</h2>
      <div>
        {currentVignette &&
          Object.keys(currentVignette).map((key, index) => {
            if (key !== 'naziv')
              return (
                <div key={index}>
                  <p>
                    <strong>{capitalizeFirstLetterOfString(key)}:</strong>
                  </p>
                  <p>{currentVignette[key as keyof Vignette]}</p>
                </div>
              );
          })}
      </div>
    </div>
  );
};

export default VignetteDetails;
