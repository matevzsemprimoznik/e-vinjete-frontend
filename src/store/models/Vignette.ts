export interface Vignette {
  id: number;
  naziv: string;
  tipVozila: VehicleType;
  veljavnost: number;
}

export enum VehicleType {
  ENOSLEDNA = 'ENOSLEDNA',
  DVOSLEDNA = 'DVOSLEDNA',
  VELIKA_DVOSLEDNA = 'VELIKA_DVOSLEDNA',
}
