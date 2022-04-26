import { Vignette } from './Vignette';

export interface Purchase {
  id: number;
  elektronskiNaslov: string;
  registrskaOznaka: string;
  vinjeta: Vignette;
  datumNakupa: Date | string;
  datumZacetkaVeljavnosti: Date | string;
  prodajalec: string;
}
