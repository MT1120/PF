import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute=({ children })=> {
    const location = useLocation();
    const token = sessionStorage.getItem('token');
    console.log(!token);
    if (!token) {
        console.log("No token");
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}