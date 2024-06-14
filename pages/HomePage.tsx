import { View, Button } from "react-native"
import useAuth from "../hooks/useAuth"
import demoService from "../services/demoService"
import { useEffect, useState } from "react"

function HomePage(){
    const [data,setData]= useState({})
    const { authData, login, logout } = useAuth()
    
    useEffect(() => { 
        (async() => {
            const data = await demoService()
            setData(data)
        }) 
    },[])

    useEffect(() => { 
        console.log(data)
    },[data])

    return (
    <View>
        <Button title="Logout" onPress={logout}></Button>
    </View>
    )
}
 
export default HomePage