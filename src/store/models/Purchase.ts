import { Vignette } from './Vignette';

export interface Purchase {
  id: number;
  elektronskiNaslov: string;
  registrskaOznaka: string;
  vinjeta: Vignette;
  datumNakupa: Date;
  datumZacetkaVeljavnosti: Date;
  prodajalec: string;
}
