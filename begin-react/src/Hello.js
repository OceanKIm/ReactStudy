import React from 'react'

/**
function Hello(props) {
    return <div style={{color : props.color}}>안녕하세요 {props.name}</div>
}
 */

// 비구조화 할당
function Hello({color, name, isSpecial}) {
    return <div style={{color}}>
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
            </div>
}

Hello.defaultProps = {
    name : '이름없음'
}

export default Hello
