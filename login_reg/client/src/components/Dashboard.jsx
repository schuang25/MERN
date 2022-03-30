import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const Dashboard = (props) => {
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/users")
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const logout = (e) => {
        e.preventDefault();
        axios.get("http://localhost:8000/api/logout", {withCredentials: true})
            .then(res => {
                console.log(res.data);
                history.push("/");
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h1>This is the dashboard</h1>
            <form onSubmit={logout}>
                <input type="submit" value="Logout" />
            </form>
        </div>
    )
};

export default Dashboard;