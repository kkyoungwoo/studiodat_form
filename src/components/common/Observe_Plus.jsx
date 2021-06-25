import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './plus.css'

function Observe_Plus() {

    const [plusNum,setPlusNum] = useState([1])

    const submitJoin = useCallback(()=>{
        alert("신청이 완료되었습니다.")
    })

    const plusMambers = useCallback(
        () => {
            const array = [...plusNum]
            array.push(plusNum.length)
            setPlusNum(array)
        },
        [plusNum]
    )

    const handleDelete = (idx) => {
            const Delet = plusNum.filter((_,idxx) => idx !== idxx)
            setPlusNum(Delet)
    }

    return (
        <div>
            <div className="plus_wrap">
                <div className="plus_header">
                    <div className="plus_header_warp">
                        <div className="header_left">
                            <div className="header_left_text">· 추가인원</div>
                            <button className="header_left_btn" onClick={plusMambers}>추가</button>
                            <div className="sub_text">인원을 추가로 입력하시려면'추가'버튼을 눌러주세요</div>
                        </div>
                    </div>
                    <div className="plus_warp">
                        <div className="plus_table first" >
                            <h4>회사명</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item}>
                                        <input type="text" style={{width:"120px"}}/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="plus_table">
                            <h4>부서/직위</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item}>
                                        <input type="text"/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="plus_table">
                            <h4>이름</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item}>
                                        <input type="text"/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="plus_table">
                            <h4>휴대전화</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item}>
                                        <input type="text"/>
                                    </div>
                                )
                            })}
                        </div >
                        <div className="plus_table">
                            <h4>이메일</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item}>
                                        <input type="text"/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="plus_table">
                            <h4>-</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item} className={"cancle"+idx}>
                                        <button onClick={() => (handleDelete(idx))}>
                                            삭제
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="plus_btn_wrap">
                        <Link to="/">
                            <button className="submit_btn" onClick={submitJoin}>참가신청</button>
                            <button className="cancle_btn" onClick={()=>alert("메인화면으로 이동합니다.")}>취소하기</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Observe_Plus
