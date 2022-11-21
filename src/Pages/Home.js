import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../App';
import PrimaryButton from './Share/PrimaryButton';
import { MdDelete } from 'react-icons/md';



const Home = () => {

    const { nots, setNots } = useContext(MyContext);

    const deleteNote = (index) => {
        alert('Are you confirm')
        const newText = nots;
        newText.splice(index, 1);
        setNots([...newText]);
    }


    return (
        <div className='w-10/12 mx-auto mt-10'>
            <h2 className='text-2xl font-bold p-5 font-serif text-center'>All Notes</h2>
            <Link to='/details'> <PrimaryButton>Add Nots</PrimaryButton></Link>
            <table>
                <thead>
                    <tr>
                        <th className='font-bold text-lg text-center'>Titel</th>
                        <th className='font-bold text-lg text-center'>Description</th>
                        {/* <th className='font-bold text-lg'></th> */}
                    </tr>
                </thead>
                <tbody>

                    {
                        nots.map((e, index) => <>
                            <tr key={index}>
                                <td>{e.title}</td>
                                <td className='flex justify-between align-center'>{e.description} <span className='cursor-pointer text-2xl text-red-700' onClick={() => deleteNote(index)}><MdDelete /></span></td>
                            </tr>
                        </>)
                    }

                </tbody>
            </table>

        </div>
    );
};

export default Home;