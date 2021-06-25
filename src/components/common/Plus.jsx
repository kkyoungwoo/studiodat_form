import React from 'react'
import { useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './plus.css'

function Plus() {

    const [plusNum,setPlusNum] = useState([0])
    const [plusName,setPlusName] = useState("")
    const [plusPosition,setPlusPosition] = useState("")
    const [plusPhoneNum,setPlusPhoneNum] = useState(4)
    const [plusText,setPlusText] = useState(5)

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
                            <div className="header_left_text">· 출입증신청</div>
                            <button className="header_left_btn" onClick={plusMambers}>추가</button>
                        </div>
                        <div className="header_right">
                                · 박람회장 내 출입증 미소지시 출입이 불가능합니다.
                                <br />· 참가업체 직원 중 전시장에서 항시 상주하는 인원 수 만큼 신청하시기 바랍니다.
                                <br />· 출입증 수령장소 : EXCO 서관 로비(1층) 등록데스크
                                <br />· 배포일시 : 2021년 10월 14일(목) 오전 8시 ~ 전시기간중
                        </div>
                    </div>
                    <div className="plus_warp">
                        <div className="plus_table first">
                            <h4>번호</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item}>{idx + 1}</div>
                                )
                            })}
                        </div>
                        <div className="plus_table">
                            <h4>성명</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item}>
                                        <input type="text" onChange={(e) => {setPlusName(e.target.value)}}/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="plus_table">
                            <h4>직함</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item}>
                                        <input type="text" onChange={(e) => {setPlusPosition(e.target.value)}}/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="plus_table">
                            <h4>연락처</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item}>
                                        <input type="text" onChange={(e) => {setPlusPhoneNum(e.target.value)}}/>
                                    </div>
                                )
                            })}
                        </div >
                        <div className="plus_table">
                            <h4>비고</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item}>
                                        <input type="text" onChange={(e) => {setPlusText(e.target.value)}}/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="plus_table">
                            <h4>-</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item}  className={"cancle"+idx}>
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

export default Plus
