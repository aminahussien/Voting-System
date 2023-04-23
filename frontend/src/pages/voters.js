import { useEffect} from "react"
import { useVotersContext } from "../hooks/useVotersContext"
import { useAuthContext} from '../hooks/useAuthContext'


//components
import voters from "../components/voters"

const voters = ()=>{

    const {voters,dispatch}= useVotersContext()
    const {admin} = useAuthContext()

    useEffect(()=>{
        const fetchVoters = async ()=>{
            const response = await fetch('/api/voters',{
                headers:{
                    'Authorization':`Bearer ${admin.token}`
                }
            })
            const json = await response.json()

            if (response.ok){
            dispatch({type:'SHOW_VOTERS', payload:json})
            }
        } 
        if(admin){
            fetchVoters() 
        }
    
    },[dispatch,admin])
    
    return(
        <div className="home">
        <div className="voters">
        {voters && voters.map(voter => (
        <VotersDetails voter={voter} key={voter._id} />
        ))}
        </div>
        <VotersDetails />
        </div>

    )
}


export default voters