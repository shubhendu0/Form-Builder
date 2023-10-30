import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getForm, getForms } from '../redux/data/dataActions';
import { useNavigate } from 'react-router-dom';


const Table = () => {
    const [forms, setForms] = useState([]);
    const dispatch = useDispatch();
    const data = useSelector(state => state.data.forms);
    const navigate = useNavigate();
    
    useEffect(()=>{
        dispatch(getForms());
    },[dispatch])

    useEffect(()=>{
        setForms(data);
    },[data])

    const handleNavigate = (id) =>{
        dispatch(getForm(id))
        navigate(`/form/${id}`)
    }

    return (
        <>
            <div className="container w-[99%] h-auto mx-auto mb-[300px] flex flex-col justify-center items-center">
                <h1 className='text-3xl bold mb-[20px]'> Dashboard </h1>
                <table className="w-full  table-fixed border-2 rounded">
                    <thead>
                        <tr className='h-[70px] bg-slate-300 text-white'>
                            <th className='text-lg bold'>S.No</th>
                            <th className='text-lg bold'>Title</th>
                            <th className='text-lg bold'>Date</th>
                            <th className='text-lg bold'>Visit</th>
                        </tr>
                    </thead>
                    {
                        forms?.length > 0 ?
                        data.map((item,index) => {
                            return(
                                <tbody key={item._id}>
                                    <tr className='text-white bg-slate-600'>
                                        <td className='h-[60px] text-center'>{index+1}</td>
                                        <td className='h-[60px] text-center'>{item.header.heading}</td>
                                        <td className='h-[60px] text-center'>{(item.createdAt).slice(0,10)}</td>
                                        <td className='h-[60px] text-center cursor-pointer hover:text-blue-300'
                                        onClick={()=>handleNavigate(item._id)}
                                        > Click Here </td>
                                    </tr>
                                </tbody>
                            )
                        })
                        :
                        (
                            <tbody className='text-white bg-slate-600'>
                                <tr>
                                    <td className='h-[60px] text-center'> - </td>
                                    <td className='h-[60px] text-center'> - </td>
                                    <td className='h-[60px] text-center'> - </td>
                                    <td className='h-[60px] text-center'> - </td>
                                    <td className='h-[60px] text-center'> - </td>
                                </tr>
                            </tbody>
                        )

                    }
                </table>
            </div>
        </>
    )
}

export default Table;