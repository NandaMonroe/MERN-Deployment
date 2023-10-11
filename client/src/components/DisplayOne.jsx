import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const DisplayOne = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [onePet, setOnePet] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + id)
            .then(res => {
                console.log(res.data);
                setOnePet(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const deleteMe = () => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then((response) => {
                console.log(response.data)
                navigate("/pets")
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <Link to="/pets/">HOME</Link>
            <hr/>
            {
                onePet && (
                    <div>
                        <h2>Details about: {onePet.name}</h2>
                        <p><strong>Pet type: </strong>{onePet.type}</p>
                        <p><strong>Description: </strong>{onePet.description}</p>
                        <h4>Skills:</h4>
                        <ul>
                            <li>{onePet.skillOne}</li>
                            <li>{onePet.skillTwo}</li>
                            <li>{onePet.skillThree}</li>
                        </ul>
                        <hr />
                        <button style={{backgroundColor: 'red', color: 'white'}} onClick={deleteMe}>Adopt {onePet.name}</button>
                    </div>
                )
            }
        </>
    );
}

export default DisplayOne