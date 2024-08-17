import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    const [details, setDetails]=useState({})
    const queryParameters = new URLSearchParams(window.location.search)
    const requestId = queryParameters.get("id")
    const axiosPublic=useAxiosPublic()
    useEffect(()=>{
        axiosPublic.get(`productDetails/${requestId}`)
        .then((result)=>{
            setDetails(result.data)
            console.log(details)
        })
    },[])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <img className='max-w-72 md:max-w-lg' src={details.productImageUrl} alt="" />
                </div>
                {
                    (details.category==='Smartphone')?
                    <div className='p-3 md:p-1'>
                        <p className='font-semibold'>Product Brand: <span className='font-normal'>{details.brandName}</span></p>
                        <p className='font-semibold'>Product Model: <span className='font-normal'>{details.modelName}</span></p>
                        <p className='font-semibold'>Price: <span className='font-normal'>{details.price} Bdt</span></p>
                        <p className='font-semibold'>Ratings: <span className='font-normal'>{details.ratings}</span></p>
                        {details.specifications && (
                            <>
                                <p className='font-semibold'>Ram: <span className='font-normal'>{details.specifications.ram}</span></p>
                                <p className='font-semibold'>Rom: <span className='font-normal'>{details.specifications.rom}</span></p>
                                <p className='font-semibold'>Display: <span className='font-normal'>{details.specifications.display}</span></p>
                                <p className='font-semibold'>Processor: <span className='font-normal'>{details.specifications.processor}</span></p>
                                <p className='font-semibold'>sensors: <span className='font-normal'>{details.specifications.sensors[0]}, {details.specifications.sensors[1]}, {details.specifications.sensors[2]}</span> </p>
                            </>
                        )}
                        <p className='font-semibold'>Despriction: <span className='font-normal'>{details.description}</span></p>
                        <p className='font-semibold'>Product Added: <span className='font-normal'>{details.productCreationDateTime}</span></p>
                        <div className='mt-4'>
                            <Link to={'/'}><button className='p-2 bg-teal-200 rounded-md'>Return Home</button></Link>
                        </div>
                    </div>:(details.category==='Laptop')?
                    <div className='p-3 md:p-1'>
                        <p className='font-semibold'>Product Brand: <span className='font-normal'>{details.brandName}</span></p>
                        <p className='font-semibold'>Product Model: <span className='font-normal'>{details.modelName}</span></p>
                        <p className='font-semibold'>Price: <span className='font-normal'>{details.price} Bdt</span></p>
                        <p className='font-semibold'>Ratings: <span className='font-normal'>{details.ratings}</span></p>
                        {details.specifications && (
                            <>
                                <p className='font-semibold'>Ram: <span className='font-normal'>{details.specifications.ram}</span></p>
                                <p className='font-semibold'>Rom: <span className='font-normal'>{details.specifications.rom}</span></p>
                                <p className='font-semibold'>Display: <span className='font-normal'>{details.specifications.display}</span></p>
                                <p className='font-semibold'>Processor: <span className='font-normal'>{details.specifications.processor}</span></p>
                                <p className='font-semibold'>Operating System: <span className='font-normal'>{details.specifications.operatingSystem}</span> </p>
                            </>
                        )}
                        <p className='font-semibold'>Despriction: <span className='font-normal'>{details.description}</span></p>
                        <p className='font-semibold'>Product Added: <span className='font-normal'>{details.productCreationDateTime}</span></p>
                        <div className='mt-4'>
                            <Link to={'/'}><button className='p-2 bg-teal-200 rounded-md'>Return Home</button></Link>
                        </div>
                    </div>:
                    <div className='p-3 md:p-1'>
                        <p className='font-semibold'>Product Brand: <span className='font-normal'>{details.brandName}</span></p>
                        <p className='font-semibold'>Product Model: <span className='font-normal'>{details.modelName}</span></p>
                        <p className='font-semibold'>Price: <span className='font-normal'>{details.price} Bdt</span></p>
                        <p className='font-semibold'>Ratings: <span className='font-normal'>{details.ratings}</span></p>
                        {details.specifications && (
                            <>
                                <p className='font-semibold'>Battery: <span className='font-normal'>{details.specifications.battery}</span></p>
                                <p className='font-semibold'>Display Size: <span className='font-normal'>{details.specifications.displaySize}</span></p>
                                <p className='font-semibold'>Display Type: <span className='font-normal'>{details.specifications.displayType}</span></p>
                                <p className='font-semibold'>Water Resistancy: <span className='font-normal'>{details.specifications.waterResistance}</span></p>
                            </>
                        )}
                        <p className='font-semibold'>Despriction: <span className='font-normal'>{details.description}</span></p>
                        <p className='font-semibold'>Product Added: <span className='font-normal'>{details.productCreationDateTime}</span></p>
                        <div className='mt-4'>
                            <Link to={'/'}><button className='p-2 bg-teal-200 rounded-md'>Return Home</button></Link>
                        </div>
                    </div>

                }
            </div>
            
        </div>
    );
};

export default ProductDetails;