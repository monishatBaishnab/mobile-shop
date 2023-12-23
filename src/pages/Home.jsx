import { useState } from "react";
import ProductsContainer from "../components/Home/ProductsContainer";
import ProductsFilterContainer from "../components/Home/ProductsFilterContainer";

const Home = () => {
    const [maxPrice, setMaxPrice] = useState(null);
    const [minPrice, setMinPrice] = useState(null);
    const [priceChecked, setPriceChecked] = useState(null);

    const [filterName, setFilterName] = useState(null);
    const [nameChecked, setNameChecked] = useState(null);

    const [filterOs, setFilterOs] = useState(null);
    const [osChecked, setOsChecked] = useState(null);

    const [filterProcessosr, setFilterProcessor] = useState(null);
    const [processorChecked, setProcessorChecked] = useState(null);

    const [filterType, setFilterType] = useState(null);
    const [typeChecked, setTypeChecked] = useState(null);

    const states = { setMaxPrice, setMinPrice, priceChecked, setPriceChecked, setFilterName, nameChecked, setNameChecked, setFilterOs, osChecked, setOsChecked, setFilterProcessor, processorChecked, setProcessorChecked, setFilterType, typeChecked, setTypeChecked };
    const filterProps = { maxPrice, minPrice, filterName, filterOs, filterProcessosr, filterType }


    return (
        <div className="">
            <div className="container grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                    <ProductsFilterContainer states={states} />
                </div>
                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                    <ProductsContainer filterProps={filterProps} />
                </div>
            </div>
        </div>
    );
};

export default Home;