import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const TaskDeatils = () => {
    const [singleTasks, setsingleTasks] = useState(''); // Initialize an empty array to store the fetched tasks.
    const params = useParams()
    useEffect(() => {
        // Fetch data from the API when the component mounts.
        fetch(`http://127.0.0.1:8000/api/task/${params.id}/`)
            .then((response) => response.json()) // Assuming the response is in JSON format.
            .then((data) => setsingleTasks(data)) // Update the state with the fetched data.
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    return (
        <div>
            <div className="card w-50 mx-auto mt-5 d-flex justify-content-cente align-items-center" >
                <img className="card-img-top" src={singleTasks.photo} />
                <div className="card-body">
                    <h4>{singleTasks.title}</h4>
                    <p className="card-text">{singleTasks.description}</p>
                </div>
            </div>
        </div>

    );
};

export default TaskDeatils;