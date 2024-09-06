import React from "react";
import TextEditor from "./TextEditor";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect to a new document */}
        <Route
          path="/"
          element={<Navigate to={`/documents/${uuidV4()}`} replace />}
        />
        
        {/* Render TextEditor for a specific document */}
        <Route path="/documents/:id" element={<TextEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
