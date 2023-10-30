import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand text-primary" href="#">Tasks<span className="text-danger">Management</span></a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-success" to='/' href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-success" to="/createtask">Create-Task</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-success" to="/alltasks">TaskLists</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Home;