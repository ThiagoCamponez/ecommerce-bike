export interface ProductType {
    id: string;
    images: ImageType[];
    brand: string;
    name: string;    
    price: number;    
  }

  export interface ImageType {
    id: string;
    url: string;
    order_id: string;
  }