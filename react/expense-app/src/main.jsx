import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './store/AuthProvider.jsx';
import ExpenseProvider from './store/ExpenseProvider.jsx';

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <ExpenseProvider>
            <App />
        </ExpenseProvider>
    </AuthProvider>
)
