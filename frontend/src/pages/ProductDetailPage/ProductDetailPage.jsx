import React, {useState} from 'react'
import {useLoaderData, useParams} from "react-router-dom";

const ProductDetailPage = () => {

    const data = useLoaderData();
    console.log(data)

    if (!data || !data.product) {
        return <div>Loading product details...</div>; // or show error message
    }

    const {product} = data;
    const [image, setImage] = useState(product?.images[0]?.startsWith('http') ? product?.images[0] : product?.thumbnail);


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
                                    <button onClick={()=> setImage(item)} className={"rounded-lg w-fit p-2"}>
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
            <div className={"w-[60%] "}>
                description
                {/*    Product Description*/}
            </div>
        </div>
    )
}
export default ProductDetailPage
