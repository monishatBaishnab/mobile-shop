import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchProducts = (maxPrice = null, minPrice = null, filterName = null, filterOs = null, filterProcessosr = null, filterType = null) => {
    const getProducts = async () => {
        const res = await axios.get(`http://localhost:5000/mobiles?minP=${minPrice}&maxP=${maxPrice}&name=${filterName}&type=${filterType}&processor=${filterProcessosr}&os=${filterOs}`);
        return res.data;
    }

    const { data, isLoading } = useQuery({ queryKey: ['products', maxPrice, minPrice, filterName, filterOs, filterProcessosr, filterType], queryFn: getProducts });

    return { productsData: data, isProductsLoading: isLoading }
};

export default useFetchProducts;