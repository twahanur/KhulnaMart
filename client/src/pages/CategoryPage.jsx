import React, { useEffect, useState } from 'react'
import UploadCategoryModel from '../components/UploadCategoryModel'
import Loading from '../components/Loading'
import NoData from '../components/NoData'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import EditCategory from '../components/EditCategory'
import CofirmBox from '../components/CofirmBox'
import toast from 'react-hot-toast'
import AxiosToastError from '../utils/AxiosToastError'
import { useSelector } from 'react-redux'
import { PlusCircle, Pencil, Trash2 } from 'lucide-react'

const CategoryPage = () => {
    const [openUploadCategory, setOpenUploadCategory] = useState(false)
    const [loading, setLoading] = useState(false)
    const [categoryData, setCategoryData] = useState([])
    const [openEdit, setOpenEdit] = useState(false)
    const [editData, setEditData] = useState({
        name: "",
        image: "",
    })
    const [openConfimBoxDelete, setOpenConfirmBoxDelete] = useState(false)
    const [deleteCategory, setDeleteCategory] = useState({
        _id: ""
    })
    // const allCategory = useSelector(state => state.product.allCategory)

    // useEffect(()=>{
    //     setCategoryData(allCategory)
    // },[allCategory])

    const fetchCategory = async () => {
        try {
            setLoading(true)
            const response = await Axios({
                ...SummaryApi.getCategory
            })
            const { data: responseData } = response

            if (responseData.success) {
                setCategoryData(responseData.data)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCategory()
    }, [])

    const handleDeleteCategory = async () => {
        try {
            const response = await Axios({
                ...SummaryApi.deleteCategory,
                data: deleteCategory
            })

            const { data: responseData } = response

            if (responseData.success) {
                toast.success(responseData.message)
                fetchCategory()
                setOpenConfirmBoxDelete(false)
            }
        } catch (error) {
            AxiosToastError(error)
        }
    }

    return (
        <section className='bg-gray-50 min-h-screen'>
            <div className='bg-white shadow-sm p-4 flex items-center justify-between sticky top-0 z-10'>
                <h2 className='text-xl font-semibold text-gray-800'>Categories</h2>
                <button
                    onClick={() => setOpenUploadCategory(true)}
                    className='flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg shadow-md hover:bg-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
                >
                    <PlusCircle size={20} />
                    Add Category
                </button>
            </div>

            {loading && <Loading />}

            {!categoryData[0] && !loading && (
                <div className="p-4">
                    <NoData />
                </div>
            )}

            <div className='p-4'>
                <div className='bg-white shadow-md rounded-lg overflow-hidden'>
                    <table className='min-w-full divide-y divide-gray-200'>
                        <thead className='bg-gray-50'>
                            <tr>
                                <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                    Category Name
                                </th>
                                <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                    Image
                                </th>
                                <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'>
                            {categoryData.map((category) => (
                                <tr key={category._id} className='hover:bg-gray-50'>
                                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                                        {category.name}
                                    </td>
                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <div className='h-12 w-12 flex-shrink-0'>
                                            <img
                                                className='h-12 w-12 rounded-full object-cover'
                                                src={category.image}
                                                alt={category.name}
                                            />
                                        </div>
                                    </td>
                                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                                        <div className='flex items-center space-x-2'>
                                            <button
                                                onClick={() => {
                                                    setOpenEdit(true)
                                                    setEditData(category)
                                                }}
                                                className='p-2 text-green-600 hover:text-green-900 transition-colors duration-200 rounded-full hover:bg-green-100'
                                                title='Edit Category'
                                            >
                                                <Pencil size={18} />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setOpenConfirmBoxDelete(true)
                                                    setDeleteCategory(category)
                                                }}
                                                className='p-2 text-red-600 hover:text-red-900 transition-colors duration-200 rounded-full hover:bg-red-100'
                                                title='Delete Category'
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {openUploadCategory && (
                <UploadCategoryModel fetchData={fetchCategory} close={() => setOpenUploadCategory(false)} />
            )}

            {openEdit && (
                <EditCategory data={editData} close={() => setOpenEdit(false)} fetchData={fetchCategory} />
            )}

            {openConfimBoxDelete && (
                <CofirmBox close={() => setOpenConfirmBoxDelete(false)} cancel={() => setOpenConfirmBoxDelete(false)} confirm={handleDeleteCategory} />
            )}
        </section>
    )
}

export default CategoryPage