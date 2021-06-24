import React from 'react'
import './observe.css'
import Observe_Plus from '../common/Observe_Plus'
function Observe_individual(props) {

    props.setIsMe(false)

    return (
        <div>
            <div className="title_text fontsizeup">개인 온라인 참관신청</div>
            <Observe_Plus />
        </div>
    )
}

export default Observe_individual
