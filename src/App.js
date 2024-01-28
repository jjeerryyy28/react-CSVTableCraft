// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Upload from "./Components/Upload/upload";
import SignIn from "./Components/SignIn/signin";
import Register from "./Components/SignIn/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/error" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

// Create a NotFound component to handle unknown paths
const NotFound = () => {
  return <div>Page not found</div>;
};

export default App;
