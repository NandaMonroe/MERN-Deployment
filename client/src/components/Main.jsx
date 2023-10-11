import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = (props) => {

    const [petsList, setPetsList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
        .then((res) => {
            //* sort the res.data alphabetically by pet type
            res.data.sort((a, b) => {
              // compare each object to one another, one at a time
              // convert type to lowercase
              let aType = a.type.toLowerCase();
              let bType = b.type.toLowerCase();
              // return the sorted value of the Type
              return aType < bType // if a type is alphabetically lower than b type, return -1 to sort a after b
                ? -1
                : aType > bType // if a type is alphabetically higher than b type, return 1 to sort b after a
                ? 1
                : 0; // if they have the same value, return 0 to keep original sort value
            });
            //set pets to the new sorted array
                console.log(res.data);
                setPetsList(res.data);
            })
            .catch(err => console.log(err));
    }, []);


    return (
        <div>
            <Link to="/pets/create">ADD A PET TO THE SHELTER</Link>
            <hr/>
            <h3>These pets are looking for a good home</h3>

            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>TYPE</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
            {
                petsList.map(onePetObj => {
                    return (
                        <tbody key={onePetObj._id}>
                                <tr>
                                    <td>{onePetObj.name}</td>
                                    <td>{onePetObj.type}</td>
                                    <td><Link to={"/pets/" + onePetObj._id}>DETAILS</Link> | <Link to={"/pets/" + onePetObj._id + "/update"}>EDIT</Link></td>
                                </tr>
                        </tbody>
                    );
                })
            }
            </table>

        </div>
    );
}

export default Main