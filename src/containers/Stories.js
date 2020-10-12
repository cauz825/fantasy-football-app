import React, { useState } from 'react'
import Top from '../components/Top'
import Players from '../components/Players'
import Teams from '../components/Teams'

function Stories() {
    
    const [category, setCategory] = useState('Top')

    function handleClick(e) {
        setCategory(e.target.innerText)

    }
    
    function displayStories() {
        if(category === 'Top Stories')
            return <Top />
        if(category === 'Players')
            return <Players />
        if(category === 'Teams')
            return <Teams />
    }
    
    return (
        <div>
            <button onClick={handleClick}>Top Stories</button>
            <button onClick={handleClick}>Teams</button>
            <button onClick={handleClick}>Players</button>
            {displayStories()}
        </div>
    )
}

export default Stories