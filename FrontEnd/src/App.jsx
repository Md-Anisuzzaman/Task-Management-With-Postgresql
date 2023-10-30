import Home from "./components/Home"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import TaskLists from "./components/TaskLists";
import CreateTask from "./components/CreateTask";
import EditTask from "./components/EditTask";
import TaskDeatils from "./components/TaskDeatils";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="alltasks" element={<TaskLists />} />
        <Route path="createtask" element={<CreateTask />} />
        <Route path="edittask/:id" element={<EditTask />} />
        <Route path="details/:id" element={<TaskDeatils/>} />
      
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App