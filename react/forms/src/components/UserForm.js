import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [fNameError, setFNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lNameError, setLNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirm, setConfirm] = useState("");
    const [confirmError, setConfirmError] = useState("");
    const [matchError, setMatchError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length === 1) // Do not show if empty
            setFNameError("First Name must have at least 2 characters");
        else
            setFNameError("");
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length === 1)
            setLNameError("Last Name must have at least 2 characters");
        else
            setLNameError("");
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5 && e.target.value.length > 0)
            setEmailError("Email must have at least 5 characters");
        else
            setEmailError("");
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8 && e.target.value.length > 0)
            setPasswordError("Password must have at least 8 characters");
        else
            setPasswordError("");
        if (e.target.value !== confirm)
            setMatchError("Passwords must match");
        else
            setMatchError("");
    }

    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        if (e.target.value.length < 8 && e.target.value.length > 0)
            setConfirmError("Password must have at least 8 characters");
        else
            setConfirmError("");
        if (e.target.value !== password)
            setMatchError("Passwords must match");
        else
            setMatchError("");
    }

    const postUser = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={postUser}>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={handleFirstName} value={firstName} />
                    {
                        fNameError ? 
                        <p style={{color:'red'}}>{fNameError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={handleLastName} value={lastName} />
                    {
                        lNameError ? 
                        <p style={{color:'red'}}>{lNameError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={handleEmail} value={email} />
                    {
                        emailError ? 
                        <p style={{color:'red'}}>{emailError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" onChange={handlePassword} value={password} />
                    {
                        passwordError ? 
                        <p style={{color:'red'}}>{passwordError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" onChange={handleConfirm} value={confirm} />
                    {
                        confirmError ? 
                        <p style={{color:'red'}}>{confirmError}</p> :
                        ''
                    }
                </div>
                <div>
                    {
                        matchError ? 
                        <p style={{color:'red'}}>{matchError}</p> :
                        ''
                    }
                </div>
            </form>
            {/* <div>
                <h3>Your Form Data</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>{firstName}</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>{lastName}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>{password}</td>
                        </tr>
                        <tr>
                            <td>Confirm</td>
                            <td>{confirm}</td>
                        </tr>
                    </tbody>
                </table>
            </div> */}
        </div>
    );
}

export default UserForm;