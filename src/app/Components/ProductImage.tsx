"use client";
import { useState } from "react";
import Image from "next/image";
import { ProductType } from "../types/ProductType";
type ProductImageProps = {
    product: ProductType;
    fill?: boolean;
}
export default function ProductImage({ product, fill}: ProductImageProps){
    const[loading, setLoading] = useState(true);
    return fill ? (
        <Image
            src={product.images[0].url}
            fill
            alt={product.name}
            className={`object-cover ${
                loading ? "scale-110 blur-3xl grayscale" : "scale-100 blur-0 grayscale-0"
            }`}
            onLoadingComplete={() => setLoading(false)}
        />
    ) : (
        <Image
            src={product.images[0].url}
            width={400}
            height={700}
            fill
            alt={product.name}
            className={`object-cover ${
                loading ? "scale-110 blur-3xl grayscale" : "scale-100 blur-0 grayscale-0"
            }`}
            onLoadingComplete={() => setLoading(false)}
        />
    )
};