import { Link } from "react-router-dom";

export default function Category() {
    return (
        <ul className="category">
            <li><Link to="/Todo">Todo</Link></li> 
            <li><Link to="/QnA">Q&A</Link></li>
            <li><Link to="/member">Member</Link></li>
        </ul>
    );
}
