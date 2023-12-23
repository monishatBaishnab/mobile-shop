import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import { FaRegCheckSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const ProductCard = ({product}) => {
    
    return (
        <div>
            <Card className="w-full rounded-md shadow-none border border-secondery h-full hover:border-primary transition-[border] duration-500">
                <CardHeader shadow={false} floated={false} className="h-40">
                    <img
                        src={product?.image}
                        alt="card-image"
                        className="h-full w-full object-contain"
                    />
                </CardHeader>
                <CardBody>
                    <Link to='/' className="font-medium text-primary">
                        {product?.name}
                    </Link>
                    <Typography color="blue-gray" className="font-medium text-base">
                        ${product?.price}
                    </Typography>
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75"
                    >
                        {product?.description?.length > 50 ? product?.description?.slice(0, 50)+'...' : product?.description}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button fullWidth variant="outlined" className="py-2 !border-primary text-primary rounded-md hover:bg-primary hover:text-white">Add Cart</Button>
                    <ul className="mt-2">
                        <li className="text-xs flex gap-1"><FaRegCheckSquare />Brand: {product?.brand}</li>
                        <li className="text-xs flex gap-1"><FaRegCheckSquare />Type: {product?.type}</li>
                        <li className="text-xs flex gap-1"><FaRegCheckSquare />Processor: {product?.processor}</li>
                        <li className="text-xs flex gap-1"><FaRegCheckSquare />OS: {product?.os}</li>
                        <li className="text-xs flex gap-1"><FaRegCheckSquare />Memory: {product?.memory}GB</li>
                    </ul>
                </CardFooter>
            </Card>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object,
}

export default ProductCard;