export type ProductType = {
  name: string;
  image: string;
  quantity?: number | 1;
  metadata: MetadataType;
  unit_amount: number | null;
  id: string;
  description: string | null;
};

type MetadataType = {
  features: string;
};
