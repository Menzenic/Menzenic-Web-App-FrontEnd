import { useNavigate } from "react-router"

import { signOutUser } from "../../utils/firebase/firebase.utils"

const Profile = () => {
    const navigate = useNavigate()

    const onClickHandler = async () => {
        await signOutUser()
        navigate('/')
    }

    return (
        <div onClick={onClickHandler} className="p-5 border bg-black text-white hover: cursor-pointer">
            SIGN OUT 
        </div>
    )
}

export default Profile