import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { Card, Pagination, Spinner } from "flowbite-react";

const HomePage = () => {
    const [category, setCategory]=useState(null)
    const [brandName, setBrandName]=useState(null)
    const [priceLowerLimit, setPriceLowerLimit]=useState(0)
    const [priceUpperLimit, setPriceUpperLimit]=useState(500000)
    const [priceSorting, setPriceSorting]=useState('ascending')
    const [dateSorting, setDateSorting]=useState('latest')
    const [data, setData]=useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage]=useState(2)
    const axiosPublic= useAxiosPublic()
    const handleCategoryChange=(e)=>{
        const cat= e.target.value;
        setCategory(cat)
        // console.log(category);
    }
    
    const onPageChange = (page) => {
        setCurrentPage(page)
    }
    useEffect(()=>{
        console.log(currentPage)
    },[currentPage])
    useEffect(() => {
        axiosPublic.get(`/products?category=${category}&brandName=${brandName}&page=${currentPage}`)
        .then(res=>{
            console.log(res.data.products)
            setData(res.data.products)
            setTotalPage(res.data.totalPages)
        })
    }, [category,brandName,currentPage]);

    const handleBrandName=(e)=>{
        setBrandName(e.target.value)
    }
    return (
        <div>
            <h2>this is homepage</h2>
            <select onChange={handleCategoryChange} name="" id="">
                {
                    category?<option value="null">All Category</option>:<option value="null">Select Category</option>
                }
                <option value="Smartphone">SmartPhone</option>
                <option value="Laptop">Laptop</option>
                <option value="Smartwatch">SmartWatch</option>
            </select>
            {
                category && 
                
                (category === 'Laptop')?

                <select onChange={handleBrandName} name="" id="">
                    {
                        brandName?<option value="null">All Brand</option>:<option value="null">Select Brand</option>
                    }
                    <option value="HP">HP</option>
                    <option value="Lenovo">Lenovo</option>
                    <option value="Asus">Asus</option>
                    <option value="Acer">Acer</option>
                    <option value="Apple">MacBook</option>
                </select>
                :(category==='Smartphone')?
                 <select onChange={handleBrandName} name="" id="">
                    {
                        brandName?<option value="null">All Brand</option>:<option value="null">Select Brand</option>
                    }
                    <option value="Apple">Apple</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Xiaomi">Xiaomi</option>
                    <option value="Oppo">Oppo</option>
                    <option value="Vivo">vivo</option>
                 </select>
                :(category==='Smartwatch')?
                 <select onChange={handleBrandName} name="" id="">
                    {
                        brandName?<option value="null">All Brand</option>:<option value="null">Select Brand</option>
                    }
                    <option value="Samsung">Samsung</option>
                    <option value="Apple">Apple</option>
                    <option value="Amazfit">Amazfit</option>
                    <option value="Mibro">Mibro</option>
                 </select>
                :<></> 

            }
            <div className='grid grid-cols-3 gap-5'>
                {   
                    (data.length<1)?<div className="min-w-full flex justify-center min-h-[80vh] items-center col-span-3">
                    <Spinner aria-label="Center-aligned spinner example" size={'xl'} />
                  </div>:
                    data.map(product=><div key={product._id}>
                        <Card
                            className="max-w-sm"
                            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                            imgSrc={product.productImageUrl}
                        >
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white hover:text-blue-500">
                            {product.modelName}
                            </h5>
                        </a>
                        <div className="mb-1 mt-1 flex items-center">
                            <svg
                            className="h-5 w-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <svg
                            className="h-5 w-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <svg
                            className="h-5 w-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <svg
                            className="h-5 w-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <svg
                            className="h-5 w-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                            {product.ratings}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-gray-900 dark:text-white"><span className='text-sm font-extrabold'>&#2547; </span>{product.price}</span>
                            <a
                            href="#"
                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            >
                            Add to cart
                            </a>
                        </div>
                        </Card>
                    </div>)
                }
            </div>
            <div className="flex overflow-x-auto sm:justify-center">
                <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={onPageChange} showIcons />
            </div>
        </div>
    );
};

export default HomePage;