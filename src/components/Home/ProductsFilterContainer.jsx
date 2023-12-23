import { Typography } from "@material-tailwind/react";
import FilterBox from "./FilterBox";
import { mobiles, os, priceRange, processor, type } from "./data";
import PropTypes from 'prop-types';

const ProductsFilterContainer = ({ states }) => {
    const { setMaxPrice, setMinPrice, priceChecked, setPriceChecked, setFilterName, nameChecked, setNameChecked, setFilterOs, osChecked, setOsChecked, setFilterProcessor, processorChecked, setProcessorChecked, setFilterType, typeChecked, setTypeChecked } = states || {};

    const handleSetData = (data, title) => {
        if (title === 'Price Range') {
            if (data !== null) {
                // Split the data at '-' and remove '$' from each value
                const priceRangeValues = data
                    .split('-')
                    .map(value => value.replace('$', ''));

                //Extract min and max pricec
                const minPrice = priceRangeValues[0];
                const maxPrice = priceRangeValues[1];

                //Set state value for price releted data
                setPriceChecked(data);
                setMinPrice(minPrice);
                setMaxPrice(maxPrice);
            } else {
                // If data is null, set both min and max prices to the provided data
                setPriceChecked(data);
                setMinPrice(data);
                setMaxPrice(data);
            }
        }
        else if (title === 'Name') {
            // Set state values for name-related data
            setNameChecked(data);
            setFilterName(data);
        }
        else if (title === 'OS') {
            // Set state values for name-related data
            setOsChecked(data);
            setFilterOs(data);
        }
        else if (title === 'Processor') {
            // Set state values for name-related data
            setProcessorChecked(data);
            setFilterProcessor(data);
        }
        else if (title === 'Type') {
            // Set state values for name-related data
            setTypeChecked(data);
            setFilterType(data);
        }
    }

    return (
        <div className="border border-secondery">
            <div className="border-b border-secondery  p-5">
                <Typography variant="h5" className="text-primary">Products Filter</Typography>
            </div>
            <div className="p-5 border-b">
                <FilterBox title='Price Range' items={priceRange} setFunc={handleSetData} checked={priceChecked} />
            </div>
            <div className="p-5 border-b">
                <FilterBox title='Name' items={mobiles} setFunc={handleSetData} checked={nameChecked} />
            </div>
            <div className="p-5">
                <FilterBox title='OS' items={os} setFunc={handleSetData} checked={osChecked} />
            </div>
            <div className="p-5">
                <FilterBox title='Processor' items={processor} setFunc={handleSetData} checked={processorChecked} />
            </div>
            <div className="p-5">
                <FilterBox title='Type' items={type} setFunc={handleSetData} checked={typeChecked} />
            </div>
        </div>
    );
};

ProductsFilterContainer.propTypes = {
    states: PropTypes.object,
}

export default ProductsFilterContainer;