import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";

interface ProductPageProps {
    params: {
        productId: string;
    }
}

const ProductPage: React.FC<ProductPageProps> = async ({
    params
}) => {
    const product =  await getProduct(params.storeId);
    const suggestedProducts = await getProducts({
        categoryId: product?.category?.id
    })
    return (
        <div>
            Individual Product
        </div>
    );
}

export default ProductPage;