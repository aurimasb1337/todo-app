import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SummaryPage from "./pages/summary";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/home";
import TodoPage from "./pages/todo";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todos/:id" element={<TodoPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
