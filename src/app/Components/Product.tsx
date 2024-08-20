import { ProductType } from "../types/ProductType";
import ProductImage from "./ProductImage";


type ProductProps = {
    product: ProductType
};
//flex flex-col shadow-lg h-96
//relative max-h-[314px] flex-1 w-[255px] h-[314px] 
export default function Product({ product }: ProductProps) {
    return (
        <div className="flex flex-col shadow-lg h-[366px] w-[255px] top-[224px]  left-[160px] bg-[#DCE2E5] text-[#123952] ">
            <div className="relative max-w-[255px] max-h-[314px] flex-1">
                <ProductImage product={product} fill/>
            </div>
            <div className="flex justify-between font-normal leading-[15.84px] p-1" style={{ fontWeight: 400 }}>{product.brand}</div>
            <div className="flex justify-between p-1">
                <span className="w-30 truncate" style={{ fontWeight: 400 }}>{product.name}</span>
                <span className="font-bold">R${product.price}</span>
            </div>
            
        </div>
    );
}
