import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { getVignettesAsync } from '../services/VignettesService';
import { vignettesSelector } from '../store/features/vignetteSlice';
import { useAppDispatch } from '../store/hooks';
import { Vignette } from '../store/models/Vignette';

const AllVignettes = () => {
  const { vignettes } = useSelector(vignettesSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getVignettesAsync());
  }, []);
  console.log(vignettes);

  return (
    <div>
      {vignettes.map((vignette: Vignette) => {
        return <div>{vignette.id}</div>;
      })}
    </div>
  );
};

export default AllVignettes;
