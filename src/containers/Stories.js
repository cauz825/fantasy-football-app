import React, {useState} from 'react'
import Players from '../components/Players'
import Teams from '../components/Teams'

function Stories() {
    const [category, setCategory] = useState(true)
    
    return(
        <div>
            {category ? <Players /> : <Teams />}
            <button onClick={() => setCategory(!category)}>Player/Team</button>
        </div>
    )
}

export default Stories