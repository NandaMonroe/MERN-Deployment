import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Update = () => {
    
    const { id } = useParams();

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + id)
            .then(res => {
                console.log(res.data);
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkillOne(res.data.skillOne);
                setSkillTwo(res.data.skillTwo);
                setSkillThree(res.data.skillThree);
            })
            .catch(err => console.log(err));
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
       
        // create the obj to send
        const postObject = {
            name, type, description, skillOne, skillTwo, skillThree
        };

        // make the post req to the server
        axios.patch('http://localhost:8000/api/pets/' + id, postObject)
            .then((response) => {
                console.log(response.data)
                navigate("/pets/")
            })
            .catch((err) => {
                console.log("XXX SERVER ERR XXX", err)
                // Get the errors from err.response.data
                const errorResponse = err.response.data.errors;
                // Define a temp error array to push the messages in
                const errorArr = []; 
                // Loop through all errors and get the messages
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            });
    }

    return (
        <>
            <Link to="/pets/">HOME</Link>
            <hr/>
            <h2>Edit {name}</h2>
            <form onSubmit={handleSubmit}>
                {/* {errors.map((err, index) => <p key={index} style={{color: 'red', fontWeight: 'bold'}}>{err}</p>)} */}
                <div>
                    <p style={{color: 'red', fontWeight: 'bold'}}>{errors[0]}</p>
                    <label>Name:  </label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
                </div>
                <div>
                    <p style={{color: 'red', fontWeight: 'bold'}}>{errors[1]}</p>
                    <label>Type:  </label>
                    <input type="text" onChange={(e) => setType(e.target.value)} value={type}></input>
                </div>
                <div>
                    <p style={{color: 'red', fontWeight: 'bold'}}>{errors[2]}</p>
                    <label>Description:  </label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}></input>
                </div>
                <h3>Skills (optional):</h3>
                <div>
                    <label>Skill 1:  </label>
                    <input type="text" onChange={(e) => setSkillOne(e.target.value)} value={skillOne}></input>
                </div>
                <div>
                    <label>Skill 2:  </label>
                    <input type="text" onChange={(e) => setSkillTwo(e.target.value)} value={skillTwo}></input>
                </div>
                <div>
                    <label>Skill 3:  </label>
                    <input type="text" onChange={(e) => setSkillThree(e.target.value)} value={skillThree}></input>
                </div>
                <br/>
                <div>
                    <button style={{backgroundColor: 'dodgerblue', color: 'white'}}>Edit Pet</button>
                </div>
            </form>
        </>
    )
}


export default Update