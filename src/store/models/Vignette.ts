export interface Vignette {
  id: number;
  naziv: string;
  tipVozila: VehicleType;
  veljavnost: number;
}

enum VehicleType {
  ENOSLEDNA,
  DVOSLEDNA,
  VELIKA_DVOSLEDNA,
}
