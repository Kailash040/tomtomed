import { useEffect } from 'react'
import MainNavigation from '../components/MainNavigation'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAUserProfile } from '../app/auth/getAUserSlice'
const SingleUser = () => {
    let { _id } = useParams();
    console.log(_id);
    const user = useDispatch()
    useEffect(() => {
        user(getAUserProfile(_id))
    }, [user]);
    const userData = useSelector((state) => state?.aUser?.data)
    console.log(userData);
    return (
        <div>
            <MainNavigation />
            <div>

            </div>
        </div>
    )
}

export default SingleUser