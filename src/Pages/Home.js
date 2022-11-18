import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { MyContext } from './Details';

const Home = () => {
    const matirRing = useContext(MyContext);
    console.log(matirRing);
    return (
        <div className='w-10/12 mx-auto mt-10'>
            <h2 className='text-2xl font-bold py-10 font-serif text-center'>All Notes</h2>
            <div className='text-center'>
                <Link to='/details'><button className='uppercase px-4 py-2 bg-teal-500 rounded my-10 font-serif '>Add Nots</button></Link>
            </div>

            <table>
                <thead>
                    <tr>
                        <th className='font-bold text-lg'>Titel</th>
                        <th className='font-bold text-lg'>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>

                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>

                    </tr>
                    <tr>
                        <td>Ernst Handel</td>
                        <td>Roland Mendel</td>

                    </tr>
                    <tr>
                        <td>Island Trading</td>
                        <td>Helen Bennett</td>

                    </tr>
                    <tr>
                        <td>Laughing Bacchus Winecellars</td>
                        <td>Yoshi Tannamuri</td>

                    </tr>
                    <tr>
                        <td>Magazzini Alimentari Riuniti</td>
                        <td>Giovanni Rovelli</td>

                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default Home;