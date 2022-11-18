import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { MyContext } from '../App';



const Home = () => {

    const { text, setText } = useContext(MyContext);
    console.log(text)

    return (
        <div className='w-10/12 mx-auto mt-10'>
            <h2 className='text-2xl font-bold p-5 font-serif text-center'>All Notes</h2>
            <div className='text-center'>
                <Link to='/details'><button className='uppercase px-5 py-3 bg-[#0ea5e9] rounded my-10 font-serif text-white hover:bg-slate-500'>Add Nots</button></Link>
            </div>

            <table>
                <thead>
                    <tr>
                        <th className='font-bold text-lg'>Titel</th>
                        <th className='font-bold text-lg'>Description</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        text.map(e => <>
                            <tr>
                                <td>{e.name}</td>
                                <td>{e.text}</td>
                            </tr>
                        </>)
                    }

                </tbody>
            </table>

        </div>
    );
};

export default Home;