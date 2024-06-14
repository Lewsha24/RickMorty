import {useNavigate} from "react-router-dom";
import {useAuth} from "../Context/AuthContext";

const AuthStatus = ({}) => {
    const navigate = useNavigate()
    const auth = useAuth()

    const handleSignout = () => {
        auth.signout(() => {
            navigate('/')
        });
    }
    if (auth.user === null) {
        return <p>tou are not logged in.</p>
    }
    return (
        <>
            Welcome user {auth.user}
            <button onClick={handleSignout}>Sign out</button>
        </>
    )
}

export default AuthStatus