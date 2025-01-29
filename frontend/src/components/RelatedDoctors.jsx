// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const RelatedDoctors = ({ docId, speciality }) => {
    const { doctors } = useContext(AppContext)
    const [relDoc, setRelDoc] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id != docId)
            setRelDoc(doctorsData)
        }
    }, [doctors, docId, speciality])
    return (
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            <div className="col-span-full flex flex-col items-center justify-center text-center">
                <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
                <p className='sm:w-1/3 text-sm'>Simply browse through our extensive list of trusted doctors.</p>
            </div>
            {
                relDoc.slice(0, 5).map((item, index) => (
                    <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} key={index} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
                        <img className="bg-blue-50 w-full h-48 object-cover" src={item.image} alt="" />
                        <div className="p-4">
                            <div className="flex items-center gap-2 text-sm text-center text-green-500">
                                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                                <p>available</p>
                            </div>
                            <p className="font-medium text-lg">{item.name}</p>
                            <p className="text-sm text-gray-600">{item.speciality}</p>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}

export default RelatedDoctors
