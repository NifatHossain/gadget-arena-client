import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { Card, Pagination, Spinner } from "flowbite-react";
import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";
import { IoFilterSharp } from 'react-icons/io5';

const HomePage = () => {
    const [category, setCategory]=useState(null)
    const [brandName, setBrandName]=useState(null)
    const [priceLowerLimit, setPriceLowerLimit]=useState(0)
    const [priceUpperLimit, setPriceUpperLimit]=useState(500000)
    const [sorting, setSorting]=useState(null)
    const [search, setSearch]=useState(null)
    const [data, setData]=useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage]=useState(2)
    const [isOpen, setIsOpen] = useState(true);

    const axiosPublic= useAxiosPublic()
    const handleCategoryChange=(e)=>{
        const cat= e.target.value;
        setCategory(cat)
        setCurrentPage(1)
        setSearch(null)
        // console.log(category);
    }
    const handleClose = () => setIsOpen(false);

    const onPageChange = (page) => {
        setCurrentPage(page)
    }

    const updateLowerLimit=(e)=>{
        setPriceLowerLimit(e.target.value)
    }

    const updateUpperLimit=(e)=>{
        setPriceUpperLimit(e.target.value)
    }
    const handleBrandName=(e)=>{
        setBrandName(e.target.value)
        setCurrentPage(1)
    }
    const handleSort=(e)=>{
        setSorting(e.target.value)
    }
    const handleSearch=(e)=>{
        setSearch(e.target.value)
        setCurrentPage(1);
        setCategory(null)
        setBrandName(null)
        setPriceLowerLimit(0);
        setPriceUpperLimit(500000);
        setSorting(null)
    }
    // useEffect(()=>{
    //     axiosPublic.get(`/searchProducts?searchKey=${search}`)
    // },[search])
    useEffect(() => {
        axiosPublic.get(`/products?category=${category}&brandName=${brandName}&page=${currentPage}&priceLowerLimit=${priceLowerLimit}&priceUpperLimit=${priceUpperLimit}&sort=${sorting}&searchKey=${search}`)
        .then(res=>{
            console.log(res.data.products)
            setData(res.data.products)
            setTotalPage(res.data.totalPages)
        })
    }, [category,brandName,currentPage,priceLowerLimit,priceUpperLimit,sorting,search]);

    
    return (
        <div>
            <div className='flex justify-between my-3'>
                {
                    (search===null)?
                    <div>
                        <span className='text-lg font-medium'>Select Category: </span>
                        <select className='border-2 rounded-md py-1' onChange={handleCategoryChange} name="" id="">
                            {
                                category?<option value="null">All Category</option>:<option value="null">Select Category</option>
                            }
                            <option value="Smartphone">SmartPhone</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Smartwatch">SmartWatch</option>
                        </select>
                    </div>:
                    <div>
                        <a href="/"><button className='p-1 bg-teal-200 border rounded-md'>Return Home</button></a>
                    </div>
                }
                <div className='flex items-center gap-2'>
                    
                    <input type="text" onBlur={handleSearch} className='rounded-md py-1' />
                    <button className='bg-slate-100 p-1 rounded-md border'>search</button>
                </div>
            </div>

            {/* Drawer section */}
            {/* { */}
                 <>
                <div className='flex justify-between'>
                    {
                        category && <div className="flex items-center justify-start ml-3">
                        <Button className='bg-slate-100 rounded-none my-2 text-black' onClick={() => setIsOpen(true)}> <div className='flex justify-center items-center gap-2'> <IoFilterSharp /> <span>Filter</span></div></Button>
                    </div>
                    }
                    <div className="flex items-center justify-end mr-3">
                        <div>
                            <span>Sort By : </span>
                            <select onChange={handleSort} className='max-w-28 rounded-md' name="" id="">
                                <option value="null">Default</option>
                                <option value="priceAscending">Price &#40;Low &#62; High&#41;</option>
                                <option value="priceDescending">Price &#40;High &#62; Low&#41;</option>
                                <option value="latest">Latest first</option>
                            </select>
                        </div>
                    </div>
                    
                    
                 
                </div>
                <Drawer open={isOpen} onClose={handleClose}>
                    <Drawer.Header title="Filter" titleIcon={() => <></>} />
                    <Drawer.Items>
                    <Sidebar
                        aria-label="Sidebar with multi-level dropdown example"
                        className="[&>div]:bg-transparent [&>div]:p-0"
                    >
                        <div className="flex h-full flex-col justify-between py-2">
                        <div>
                            <form className="pb-3 md:hidden">
                            <TextInput icon={HiSearch} type="search" placeholder="Search" required size={32} />
                            </form>
                            <Sidebar.Items>
                            <Sidebar.ItemGroup>
                            <p className='font-bold'>Select Brand</p>    
                            {
                                (category === 'Laptop')?

                                <select onChange={handleBrandName} className='border-2 rounded-md' name="" id="">
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
                                <select onChange={handleBrandName} className='border-2 rounded-md' name="" id="">
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
                                <select onChange={handleBrandName} className='border-2 rounded-md' name="" id="">
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
                            </Sidebar.ItemGroup>
                            <Sidebar.ItemGroup>
                                <p>Price Range</p>
                                <div className='flex gap-4'>
                                    <input  onBlur={updateLowerLimit} type="number" className='w-1/2 border-2 rounded-md' placeholder='Minimun' />
                                    <input onBlur={updateUpperLimit} type="number" className='w-1/2 border-2 rounded-md' placeholder='Maximum' />
                                </div>
                            </Sidebar.ItemGroup>
                            <Sidebar.ItemGroup>
                                
                            </Sidebar.ItemGroup>
                            </Sidebar.Items>
                        </div>
                        </div>
                    </Sidebar>
                    </Drawer.Items>
                </Drawer>
            </>
            {/* } */}


            
            <div className='grid grid-cols-3 gap-5'>
                {   
                    (data.length<1)?<div className="min-w-full flex justify-center min-h-[80vh] items-center col-span-3">
                    <Spinner aria-label="Center-aligned spinner example" size={'xl'} />
                  </div>:
                    data.map(product=><div key={product._id}>
                        <Card
                            className="max-w-sm"
                            imgAlt={product.modelName}
                            imgSrc={product.productImageUrl}
                        >
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white hover:text-blue-500">
                            {product.modelName}
                            </h5>
                        </a>
                        <p>{product.productCreationDateTime}</p>
                        <p>{product.description}</p>
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
            <div className="flex overflow-x-auto sm:justify-center mt-3 mb-5">
                <Pagination currentPage={currentPage} totalPages={totalPage} onPageChange={onPageChange} showIcons />
            </div>
        </div>
    );
};

export default HomePage;