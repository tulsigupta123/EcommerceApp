import React from 'react'

const AdminRoutes = () => {
    const[ok,setOk] = useState(false);
    const[auth,setAuth] = useAuth();
    useEffect(()=>{
      const authCheck = async () => {
      const res = await axios.get('api/v1/auth/admin-auth',{
        headers:{
          "Authorization" : auth ?.token
        }
      })
      if (res.data.ok) {
        setOk(true)
      }else{
        setOk(false)
      }
      }
      if(auth?.token)authCheck()
    },[auth?.token]);
  return (
 ok ? <Outlet/> : <Spinner/>
  )
}

export default AdminRoutes