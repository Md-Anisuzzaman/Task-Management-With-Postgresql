import { useState } from 'react';

const CreateTask = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        priority: 'Low',
        is_complete: 'False',
        due_date: '',
        photo: null, // Use null to initialize the photo field
    });

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;

        // Check if the input is a file input
        const inputValue = type === 'file' ? files[0] : value;

        setFormData({
            ...formData,
            [name]: inputValue,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData();

        for (const key in formData) {
            form.append(key, formData[key]);
        }

        fetch('http://127.0.0.1:8000/api/alltasks/', {
            method: 'POST',
            body: form,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Task created:', data);
                // You can add further actions after the task is created here.
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <form className="border border-primary p-5 mt-3" encType="multipart/form-data" onSubmit={handleSubmit}>
                            <h2 className="text-center text-primary m-0 p-0">Create Task</h2>
                            <label className="mt-3">Title</label>
                            <input
                                type="text"
                                name="title"
                                className="form-control"
                                placeholder="Enter Title"
                                value={formData.title}
                                onChange={handleInputChange}
                            />
                            <label className="mt-3">Description</label>
                            <textarea
                                type="text"
                                name="description"
                                className="form-control"
                                placeholder="Enter Description"
                                value={formData.description}
                                onChange={handleInputChange}
                            />
                            <label className="mt-3">Priority</label>
                            <select
                                className="custom-select my-1 mr-sm-2"
                                name="priority"
                                value={formData.priority}
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
                                value={formData.is_complete}
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
                                value={formData.due_date}
                                onChange={handleInputChange}
                            />
                            <label className='"mt-3'>Image</label>
                            <input
                                type="file"
                                className="form-control-file"
                                placeholder='Image'
                                name='photo'
                                accept="image/*"
                                // value={formData.photo}
                                onChange={handleInputChange}
                            />
                            <div className="text-center">
                                <button type="submit" className="w-75 btn btn-primary p-0 p-1 mt-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTask;
