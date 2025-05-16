import React, {useMemo} from "react";
import "../../index.css";
import Navigation from "../../components/Navigation/Navigation";
import FilterIcon from "../../components/common/FilterIcon";
import content from "../../data/content.json";
import Categories from "../../components/Filters/Categories";
import PriceFilter from "../../components/Filters/PriceFilter";
import ColorsFilter from "../../components/Filters/ColorsFilter";
import SizeFilter from "../../components/Filters/SizeFilter";
import ProductCard from "./ProductCard";

const categories = content?.categories;

const ProductListPage = ({categoryType}) => {
    // The React useMemo Hook returns a memoized value.
    const categoryContent = useMemo(() => {
        return categories.find((category) => category.code === categoryType);
    }, [categoryType]);

    const productListItems = useMemo(() => {
        return content?.products?.filter((product) => product?.category_id === categoryContent?.id);
    }, [categoryContent]);

    return (

        <div className={"flex"}>
            <div className="w-[20%] p-[20px] border rounded-lg m-[20px]">
                <div className={"flex justify-between"}>

                    <p className={"text-[16px]"}>Filter</p>
                    <FilterIcon/>

                </div>
                <div>
                    {/*Product types*/}
                    <p className={"text-[16px] text-black mt-5 "}>Categories</p>
                    <Categories types={categoryContent?.types}/>
                    <hr/>
                </div>

                {/*Price*/}
                <PriceFilter/>
                <hr/>
                {/*    Color */}
                <ColorsFilter colors={categoryContent?.meta_data?.colors}/>
                <hr/>
                {/*    Size */}
                <SizeFilter sizes={categoryContent?.meta_data?.sizes}/>

            </div>

            <div className={"p-[20px] w-full"}>
                <p className="text-black text-lg mb-2">{categoryContent?.description}</p>
                {/*  Product*/}
                <div className={"pt-4 grid grid-cols-1 lg:grid-cols-5 gap-8 px-2"}>
                    {productListItems?.map((item, index) => (
                        < ProductCard key={index} {...item} />
                    ))}
                </div>
            </div>

        </div>

    )
        ;
};
export default ProductListPage;
