import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div>
        This is the HomePage
        <Link to='/contact'>Contact</Link>
        </div>
    )
};