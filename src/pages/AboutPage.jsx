import Card from "../components/shared/Card";
import {Link} from 'react-router-dom';

function AboutPage() {
    return (
        <div className="about">
            <h1>About this Project</h1>
            <p>This is a react app which i've made</p>
            <p>Version : 1.1.1.</p>

            <p>
                <Link to="/">Back to Home</Link>
            </p>
        </div>
    )
}

export default AboutPage
