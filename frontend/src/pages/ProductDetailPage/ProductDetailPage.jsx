import React, {useEffect, useMemo, useState} from 'react'
import {Link, useLoaderData, useParams} from "react-router-dom";
import Breadcrumb from "../../components/BreadCrumb/Breadcrumb";
import content from "../../data/content.json"
import Rating from "../../components/Rating/Rating";
import SizeFilter from "../../components/Filters/SizeFilter";
import ProductColors from "./ProductColors";
import {CartIcon} from "../../components/common/CartIcon";

// const breadCrumbLinks = [
//     {
//         title: 'Shop',
//         path: '/',
//     }, {
//         title: 'Women',
//         path: '/women',
//     },
//     {
//         title: 'Top',
//         path: '/top',
//     }
// ]

const categories = content?.categories;

const ProductDetailPage = () => {

    const data = useLoaderData();
    console.log(data)

    if (!data || !data.product) {
        return <div>Loading product details...</div>; // or show error message
    }

    const {product} = data;
    const [image, setImage] = useState(product?.images[0]?.startsWith('http') ? product?.images[0] : product?.thumbnail);
    const [breadCrumbLinks, setBreadCrumbLinks] = useState([]);


    const productCategory = useMemo(() => {
        return categories?.find((category) => category?.id === product?.category_id)
    }, [product]);

    useEffect(() => {
        setImage(product?.images[0]?.startsWith('http') ? product?.images[0] : product?.thumbnail);
        setBreadCrumbLinks([]);
        const arrayLinks = [{title: 'Shop', path: '/'}, {
            title: productCategory?.name,
            path: productCategory?.path
        }];
        const productType = productCategory?.types?.find((item) => item?.type_id === product?.type_id);
        console.log("product type ", productType, productCategory);
        if (productType) {
            arrayLinks?.push({
                title: productType?.name,
                path: productType?.name
            })
        }
        setBreadCrumbLinks(arrayLinks);
    }, [productCategory, product]);

    // const addItemToCart = useCallback(()=>{
    //     //dispatch(addToCart({id:product?.id,quantity:1}));
    // },
    //     [dispatch, product?.id]);

    return (
        <div className="w-full flex flex-col md:flex-row px-10">
            <div className={"w-[100%] lg:w-[50%] md:w-[40%] "}>
                {/*    Image*/}
                <div className="flex flex-col md:flex-row">
                    <div className={" w-[100%] md:w-[20%] justify-center h-[40px] md:h-[420px]"}>

                        {/*    Stack images*/}
                        <div className={"flex flex-row md:flex-col justify-center h-full"}>
                            {
                                product?.images[0]?.startsWith('http') && product?.images?.map((item, index) => (
                                    <button onClick={() => setImage(item)} className={"rounded-lg w-fit p-2"}>
                                        <img src={item}
                                             className={"h-[80px] w-[80px] rounded-md bg-cover bg-center p-2  hover:scale-105 hover:border"}
                                             alt={'sample' + index}/>
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <div className={"w-full md:w-[80%] flex justify-center md:pt-0 pt-12"}>
                        {/*    Main Images*/}
                        <img src={image}
                             className={"h-full w-full max-h-[520px] border rounded-lg cursor-pointer object-cover block"}
                             alt={product?.title}/>
                    </div>
                </div>
            </div>
            <div className={"w-[60%] px-10"}>
                <Breadcrumb links={breadCrumbLinks}/>
                <p className={"text-3xl pt-2"}>
                    {product?.title}
                </p>

                <Rating rating={product?.rating}/>

                {/*Price Tag*/}
                <p className={"text-xl font-bold py-2"}>${product?.price}</p>

                <div className={"flex flex-col"}>
                    <div className={"flex gap-2 "}>
                        <p className={"text-sm font-bold"}>Select size</p>

                        <Link className={"text-sm text-gray-400 hover:text-gray-900 "}
                              to={'https://en.wikipedia.org/wiki/Clothing_sizes'} target='_blank'
                        >{'Size Guide ->'}</Link>

                    </div>
                    <div className='mt-2'><SizeFilter sizes={product?.size} hidleTitle/></div>
                    <div>
                        <p className={"text-lg font-bold"}>Colors Available</p>
                        <ProductColors colors={product?.color}/>
                    </div>
                    <div className={"flex pt-4"}>
                        <button className={"bg-black rounded-md w-1/6"}>
                            <div className={"flex items-center bg-black text-white "}>
                            <CartIcon bgColor={"black"}/> Add to Cart
                        </div></button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ProductDetailPage
