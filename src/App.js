import { Route, Routes, Navigate } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Tasks from "./pages/Tasks";
import TaskDetail from "./pages/TaskDetail";
import MainHeader from "./components/MainHeader";
import Task from "./pages/Task";
import tasks from "./data/data";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="welcome" />}/>
          <Route path="/welcome/*" element={<Welcome />}>
              <Route path="new-user" element={<p>Welcome, new user!</p>}/>
          </Route>
          <Route path="/tasks" exact element={<Tasks />}/>
          <Route path="/tasks/:taskId" exact element= {<TaskDetail  />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
