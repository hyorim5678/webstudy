import { Link } from "react-router-dom";
import '../../App.css';

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Web_Study</Link>
            </div>
            <nav className="nav-links">
                <Link to="/Todo">ToDoList</Link>
                <Link to="/member">Member</Link>
                <Link to="/QnA">QnA</Link>
            </nav>
            <div className="login-link">
                <Link to="/login">로그인</Link>
            </div>
        </header>
    );
}

//33line
