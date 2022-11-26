import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../App';
import PrimaryButton from './Share/PrimaryButton';
import { MdDelete } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import InputField from './Share/InputField';


const Home = () => {
    const { notes, setNotes } = useContext(MyContext);
    const [status, setStatus] = useState('');
    const [data, setData] = useState(notes);


    const navigate = useNavigate()


    const deleteNote = (id) => {
        alert('Are you confirm')
        const newText = [...notes].filter(note => note.id !== id);
        localStorage.setItem('notes', JSON.stringify(newText))
        setNotes(newText);
    }

    const updateNote = (id) => {
        navigate(`updatesnote/${id}`);
    }

    const searchHandel = (e) => {
        const searchText = e.target.value.toLowerCase();
        const filterData = notes.filter(note => note.title.toLowerCase().includes(searchText))
        setData(filterData)
    }


    useEffect(() => {
        if (status === '') {
            setData(notes);
        } else {
            const findData = notes.filter(note => note.status === status)
            setData(findData)
        }
    }, [status, notes]);


    return (
        <div className='w-11/12 mx-auto h-5/6'>
            <div className="mx-auto mb-10">
                <h1 className="text-3xl font-bold mb-10 font-serif">All Notes Here</h1>
            </div>
            {/* form start here  */}
            <div className='flex justify-between items-center mb-5'>

                {/* togol area  */}
                <div className='mb-10 text-end'>
                    <label htmlFor="notes" className="label-text text-xl font-mono font-bold">Select: </label>
                    <select name="notelist" form="noteform"
                        onChange={(e) => setStatus(e.target.value)}>
                        <option className="label-text font-mono font-bold" value="">All</option>
                        <option className="label-text font-mono font-bold" value="unread">Unread</option>
                        <option className="label-text font-mono font-bold" value="read">Read</option>
                    </select>
                </div>

                {/* search area  */}
                <div className="form-control">
                    <div className="input-group flex">
                        <InputField type='text'
                            placeholder='Search…' className="input input-bordered"
                            onChange={searchHandel} name='search' />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor"><path
                                    strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* table start here  */}
            <Table>
                <Thead>
                    <Tr>
                        <Th className="label-text text-xl font-mono font-bold">Titel</Th>
                        <Th className="label-text text-xl font-mono font-bold">Description</Th>
                        <Th className="label-text text-xl font-mono font-bold">Status</Th>
                        <Th className="label-text text-xl font-mono font-bold">Action</Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {
                        data?.map((note) =>
                            <Tr>
                                <Td>{note.title}</Td>
                                <Td>{note.description}</Td>
                                <Td>{note.status}</Td>
                                <Td>
                                    <div className='cursor-pointer flex justify-center align-middle'>
                                        {/* form edit icon  */}
                                        <span
                                            className='text-2xl bg-[#0ea5e9] text-white mr-5'
                                            onClick={() => updateNote(note.id)}
                                        ><BiEdit /></span>
                                        {/* form delete icon  */}
                                        <span
                                            className='text-2xl text-red-700'
                                            onClick={() => deleteNote(note.id)}><MdDelete
                                            /></span>
                                    </div>

                                </Td>

                            </Tr>)
                    }
                </Tbody>
            </Table>
        </div >
    );
};

export default Home;
