import { ProductType } from "../types/ProductType";


type ProductProps = {
    product: ProductType
};

export default function Product({ product }: ProductProps) {
    return (
        <div className="flex flex-col shadow-lg h-[366px] w-[255px] top-[224px] left-[160px] bg-[#DCE2E5] text-[#123952] ">
            <div className="relative max-h-72 flex-1 w-[255px] h-[314px] ">IMG</div>
            <div className="flex justify-between my-3" style={{ fontWeight: 400 }}>{product.brand}</div>
            <div className="flex justify-between my-3">
                <span style={{ fontWeight: 400 }}>{product.name}</span>
                <span className="font-bold">R${product.price}</span>
            </div>
            
        </div>
    );
}