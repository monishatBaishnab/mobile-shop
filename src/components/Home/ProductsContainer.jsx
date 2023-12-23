import ProductCard from "./ProductCard";
import useFetchProducts from "../../hooks/useFetchProducts";
import PropTypes from 'prop-types'; 
const ProductsContainer = ({ filterProps }) => {
    console.log(filterProps);
    const { maxPrice, minPrice, filterName, filterOs, filterProcessosr, filterType } = filterProps || {};
    const { productsData } = useFetchProducts(maxPrice, minPrice, filterName, filterOs, filterProcessosr, filterType);

    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            {/* <div className="w-full flex items-center flex-col  bg-white">
                    <div className="flex flex-col bg-white shadow-md  rounded-md items-center">

                        <div className="flex items-center p-4">
                            <div data-placeholder className="mr-2 h-10 w-10  rounded-full overflow-hidden relative bg-gray-200">

                            </div>
                            <div className="flex flex-col justify-between items-center">
                                <div data-placeholder className="mb-2 h-5 w-40 overflow-hidden relative bg-gray-200">

                                </div>
                            </div>

                        </div>
                        <div data-placeholder className="h-52 w-full overflow-hidden relative bg-gray-200"></div>

                        <div className="flex flex-col p-4">
                            <div className="flex">
                                <div data-placeholder className=" flex h-5 w-5 overflow-hidden relative bg-gray-200 mr-1"></div>
                                <div data-placeholder className="flex h-5 w-48 overflow-hidden relative bg-gray-200"></div>
                            </div>
                            <div className="flex mt-1">
                                <div data-placeholder className="flex h-5 w-5 overflow-hidden relative bg-gray-200 mr-1"></div>
                                <div data-placeholder className="flex h-5 w-48 overflow-hidden relative bg-gray-200"></div>
                            </div>
                        </div>
                        <div className="w-full h-px  overflow-hidden relative bg-gray-200 m-4"></div>
                        <div className="flex justify-between items-center p-4 w-full">
                            <div data-placeholder className="mr-2 h-10 w-16  overflow-hidden relative bg-gray-200">

                            </div>

                            <div data-placeholder className="mb-2 h-5 w-20 overflow-hidden relative bg-gray-200">

                            </div>

                        </div>
                    </div>
                <   /div> */}
            {
                productsData?.map(product => <ProductCard key={product?._id} product={product} />)
            }
        </div>
    );
};

ProductsContainer.propTypes = {
    filterProps: PropTypes.object,
}

export default ProductsContainer;