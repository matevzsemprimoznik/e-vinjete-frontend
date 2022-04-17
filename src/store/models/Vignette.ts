export interface Vignette {
  id: number;
  naziv: string;
  tipVinjete: VehicleType;
  veljavnost: number;
}

enum VehicleType {
  ENOSLEDNA,
  DVOSLEDNA,
  VELIKA_DVOSLEDNA,
}
