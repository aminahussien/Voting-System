import { useAuthContext } from "../hooks/useAuthContext"
import { useVotersContext } from "../hooks/useVotersContext"

//import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const VotersDetails = ({voter}) =>{
    const { dispatch } = useVotersContext()
    const { admin } = useAuthContext()

    const handleClick2 = async()=>{
        if(!admin){
            console.log("inside not admin")
            return
        }
        return (
            <div className="voters-details">
                <h4>{voter.name}</h4>
                <p><strong>name: </strong>{voter.name}</p>
                <p><strong>nationalNum: </strong>{voter.nid}</p>
            </div>
            )
        }

}