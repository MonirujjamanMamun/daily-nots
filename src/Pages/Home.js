import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../App';
import PrimaryButton from './Share/PrimaryButton';
import { MdDelete } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


const Home = () => {
    const { notes, setNotes } = useContext(MyContext);
    const navigate = useNavigate()

    const deleteNote = (id) => {
        alert('Are you confirm')
        const newText = [...notes].filter(note => note.id !== id);
        localStorage.setItem('notes', JSON.stringify(newText))
        setNotes(newText);
    }

    const updateNote = (id) => {
        navigate(`/updatesnote/${id}`);
    }


    return (
        <div className='w-10/12 mx-auto mt-10'>
            <h2 className='text-2xl font-bold p-5 font-serif text-center'>All Notes</h2>
            <Link to='/details'> <PrimaryButton>Add Nots</PrimaryButton></Link>

            <div className='mb-10 text-end'>
                <label htmlFor="notes" className='text-lg font-bold'>Select: </label>
                <select id="notes" name="notelist" form="noteform">
                    <option value="all">All</option>
                    <option value="unread">Unread</option>
                    <option value="read">Read</option>
                </select>
            </div>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Titel</Th>
                        <Th>Description</Th>
                        <Th>Status</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {
                        notes?.map((note) =>
                            <Tr>
                                <Td>{note.title}</Td>
                                <Td className='flex justify-between align-center'>{note.description}</Td>
                                <Td>{note.status}</Td>
                                <Td>
                                    <div className='cursor-pointer flex justify-center align-middle'>
                                        <span
                                            className='text-2xl bg-[#0ea5e9] text-white mr-5' onClick={() => updateNote(note.id)}
                                        ><BiEdit /></span>

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
