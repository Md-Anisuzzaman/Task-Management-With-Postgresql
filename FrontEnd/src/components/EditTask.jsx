import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditTask = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priority: "",
        is_complete: "",
        due_date: "",
    });

    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        // Fetch the data from the API
        fetch(`http://127.0.0.1:8000/api/task/${params.id}/`)
            .then((response) => response.json())
            .then((data) => {
                setFormData({
                    title: data.title,
                    description: data.description,
                    priority: data.priority,
                    is_complete: data.is_complete,
                    due_date: data.due_date,
                });
                setLoading(false); // Data has been loaded, set loading to false
            })
            .catch((error) => {
                console.log("Error fetching task data:", error);
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            title: formData.title,
            description: formData.description,
            priority: formData.priority,
            is_complete: formData.is_complete,
            due_date: formData.due_date,
        };

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/task/${params.id}/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Handle the success response as needed (e.g., show a success message)
                console.log("Task updated successfully");
            } else {
                // Handle the error response
                console.error("Error updating task:", response.status, response.statusText);
            }
        } catch (error) {
            // Handle any network or fetch API-related errors
            console.error("Error updating task:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                            <form className="border border-primary p-5 mt-3" onSubmit={handleSubmit}>
                                <h2 className="text-center text-primary m-0 p-0">Edit Task</h2>
                                <label className="mt-3">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    placeholder="Enter Title"
                                    defaultValue={formData.title}
                                    onChange={handleInputChange}
                                />
                                <label className="mt-3">Description</label>
                                <textarea
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    placeholder="Enter Description"
                                    defaultValue={formData.description}
                                    onChange={handleInputChange}
                                />
                                <label className="mt-3">Priority</label>
                                <select
                                    className="custom-select my-1 mr-sm-2"
                                    name="priority"
                                    defaultValue={formData.priority}
                                    onChange={handleInputChange}
                                >
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                                <label className="mt-3">Complete</label>
                                <select
                                    className="custom-select my-1 mr-sm-2"
                                    name="is_complete"
                                    defaultValue={formData.is_complete}
                                    onChange={handleInputChange}
                                >
                                    <option value="True">True</option>
                                    <option value="False">False</option>
                                </select>
                                <label className="mt-3">Due Date</label>
                                <input
                                    type="datetime-local"
                                    name="due_date"
                                    className="form-control"
                                    placeholder="Due Date"
                                    defaultValue={formData.due_date}
                                    onChange={handleInputChange}
                                />
                                <div className="text-center">
                                    <button type="submit" className="w-75 btn btn-primary p-0 p-1 mt-3">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditTask;
