
export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  specs: string[];
  techDescription: string;
}

export interface StylistResponse {
  advice: string;
  recommendedItems: string[];
  techSpecs: string;
}
