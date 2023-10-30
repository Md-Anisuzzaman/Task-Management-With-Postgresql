import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TaskLists = () => {
    const [tasks, setTasks] = useState([]); // Initialize an empty array to store the fetched tasks.

    useEffect(() => {
        // Fetch data from the API when the component mounts.
        fetch('http://127.0.0.1:8000/api/alltasks/')
            .then((response) => response.json()) // Assuming the response is in JSON format.
            .then((data) => setTasks(data)) // Update the state with the fetched data.
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    return (
        <div className='mt-5'>
            <h3 className="text-center mb-3">Tasks Management</h3>
            <table className="table table-bordered table-striped table-light mx-auto w-100">
                <thead className="table-dark">
                    <tr>
                        <th>Id</th>
                        {/* <th>Photo</th> */}
                        <th>Title</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Is Complete</th>
                        <th>Created Date</th>
                        <th>Due Date</th>
                        <th>Modified Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            {/* <td>{task.photo}</td> */}
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.priority}</td>
                            <td>{task.is_complete == true ? 'Complete' : 'Incomplete'}</td>
                            <td>{task.created_date}</td>
                            <td>{task.due_date}</td>
                            <td>{task.modified_date}</td>
                            <td>
                                <Link className="" to="/createtask"><button className='btn btn-primary btn-sm'>Create</button></Link>
                                <Link className="" to={`/edittask/${task.id}`}><button className='btn btn-success mx-2 btn-sm'>Edit</button></Link>
                                <Link className="" to={`/details/${task.id}`}><button className='btn btn-info mx-2 btn-sm'>Deatils</button></Link>
                                {/* <button className='btn btn-danger btn-sm'>Delete</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskLists;
