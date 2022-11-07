import './App.css'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Protected from './Components/Layout/Protected';
import Login from './Components/Pages/Login';
//import Users from './Components/Pages/Users';
import NotFound from './Components/Pages/NotFound';
import ErrorBoundary from './Components/ErrorBoundary';
import NavBar from './Components/NavBar'


export default function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
          <NavBar />
          <Routes>
            <Route index element={<Layout />}>
              <Route path="/"> element={<Login />} />
                <Route element={<Protected />}>
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </ErrorBoundary>
        </Router>
        );
}
