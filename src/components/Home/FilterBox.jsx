import { Checkbox, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';
import { MdOutlineRefresh } from "react-icons/md";

const FilterBox = ({ title, items, setFunc, checked }) => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium text-sm">{title}</Typography>
                <button onClick={() => setFunc(null, title)} className="p-1 bg-secondery rounded-sm text-primary text-xl group"><MdOutlineRefresh className="transition-all group-active:rotate-180" /></button>
            </div>
            <div id="filter-box-items" className="max-h-52 mt-2 overflow-y-auto">
                {
                    items?.map(item =>
                        <div key={item?.id}>
                            <Checkbox
                                checked={checked === item?.value}
                                onChange={() => setFunc(item?.value, title)}
                                label={item?.value}
                                labelProps={{ className: 'text-sm font-normal' }} />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

FilterBox.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array,
    setFunc: PropTypes.func,
    checked: PropTypes.string,
}


export default FilterBox;