export type StoreInfoType = {
  storeId: string;
  inventory: number;
  aisle: number;
};

export type AvailabilityInfoType = {
  storeAvailability: Array<Pick<StoreInfoType, "storeId" | "inventory">>;
};

export type ProductType = {
  productId: string;
  productName: string;
  productImage: string;
  price: number;
};

export type OtherInfoType = {
  UPC: string;
};

export type DataResolverType = {
  data: Array<ProductType & AvailabilityInfoType & Partial<OtherInfoType>>;
};
