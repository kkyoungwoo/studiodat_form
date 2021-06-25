import React, { useEffect } from 'react'
import './Observe_individual.css'
import Observe_Plus from '../common/Observe_Plus'
import Kakaomap from '../common/Kakaomap'

function Observe_individual(props) {

    useEffect(() => {props.setIsMe(false)})

    return (
        <div className="individual_componets">
            <Kakaomap />
            <div className="title_text fontsizeup">개인 온라인 참관신청</div>
            <div className="title_text" >기본정보</div>
            <div className="individual_wrap">
                <div className="individual name">
                    <div className="title">이름</div>
                    <div className="text">
                        <input type="text" />
                    </div>
                </div>
                <div className="individual phone">
                    <div className="title">휴대폰</div>
                    <div className="text">
                        <input type="tel" />
                    </div>
                </div>
                <div className="individual address">
                    <div className="title">주소</div>
                    <div className="text">
                        <div className="script_wrap">
                            <input type="button"  value="우편번호 찾기"/>
                        </div>
                        <div>
                            상세주소<input type="text" />
                        </div>
                    </div>
                </div>
                <div className="individual email">
                    <div className="title">이메일</div>
                    <div className="text">
                        <input type="text" />
                    </div>
                </div>
                <div className="individual company">
                    <div className="title">회사명</div>
                    <div className="text">
                        <input type="text" />
                    </div>
                </div>
                <div className="individual positon">
                    <div className="title">부서/직위</div>
                    <div className="text">
                        <input type="text" />
                    </div>
                </div>
                <div className="individual gender">
                    <div className="title">성별</div>
                    <div className="text">
                        <input type="radio" />여성
                        <input type="radio" />남성
                    </div>
                </div>
                <div className="individual age">
                    <div className="title">연령대</div>
                    <div className="text">
                        <div><input type="radio" name="drone" value="elementary" className="elementary"/> 초등학생</div>
                        <div><input type="radio" name="drone" value="middles" className="middles"/> 중 · 고등학생</div>
                        <div><input type="radio" name="drone" value="two" className="two"/> 20대</div>
                        <div><input type="radio" name="drone" value="three" className="three"/> 30대</div>
                        <div><input type="radio" name="drone" value="four" className="four"/> 40대</div>
                        <div><input type="radio" name="drone" value="five" className="five"/> 50대</div>
                        <div><input type="radio" name="drone" value="six" className="six"/> 60대</div>
                        <div><input type="radio" name="drone" value="seven" className="seven"/> 70대</div>
                        <div><input type="radio" name="drone" value="notice" className="notice"/> 기타(미취학아동)</div>
                    </div>
                </div>
                <div className="individual class">
                    <div className="title">등록분류</div>
                    <div className="text">
                        <input type="radio" name="classradio" value="comp" /> 바이어/관련종사자
                        <input type="radio" name="classradio" value="peop" /> 일반관람
                    </div>
                </div>
            </div>

            <div className="sub_individual">
                <div className="sub_individuals company">
                    <div className="title">회사분류</div>
                    <div>
                        <div  className="form_box">
                            <input type="checkbox" id="a"/><label htmlFor="a">제조업체</label>
                            <input type="checkbox" id="b"/><label htmlFor="b">유통업체</label>
                        </div>
                        <div  className="form_box">
                            <input type="checkbox" id="c"/><label htmlFor="c">관공서/단체/협회</label>
                            <input type="checkbox" id="d"/><label htmlFor="d">연구기관</label>
                        </div>
                        <div  className="form_box">
                            <input type="checkbox" id="e"/><label htmlFor="e">방송/신문</label>
                            <input type="checkbox" id="f"/><label htmlFor="f">무역</label>
                        </div>
                        <div  className="form_box">
                            <input type="checkbox" id="g"/><label htmlFor="g">병원/의원</label>
                            <input type="checkbox" id="h"/><label htmlFor="h">기타</label>
                        </div>
                    </div>
                </div>
                <div className="sub_individuals purpose">
                    <div className="title">관람목적</div>
                    <div>
                        <div className="form_box">
                            <input type="checkbox" id="i"/><label htmlFor="i">제품/기술 구매</label>
                            <input type="checkbox" id="j"/><label htmlFor="j">자료수집</label>
                        </div>
                        <div className="form_box">
                            <input type="checkbox" id="k"/><label htmlFor="k">시장동향파악</label>
                            <input type="checkbox" id="l"/><label htmlFor="l">연구</label>
                        </div>
                        <div className="form_box">
                            <input type="checkbox" id="m"/><label htmlFor="m">협력,투자 및 제휴업체 물색</label>
                            <input type="checkbox" id="n"/><label htmlFor="n">기타일반관람</label>
                        </div>
                        <div className="form_box">
                            <input type="checkbox" id="o"/><label htmlFor="o">차기전시참가여부 결정</label></div>
                        </div>
                </div>
                <div className="sub_individuals pathway">
                    <div className="title">전시회 인지경로</div>
                    <div>
                        <div className="form_box">
                            <input type="checkbox" id="p"/><label htmlFor="p">TV,신문 등 언론 매체</label>
                            <input type="checkbox" id="r"/><label htmlFor="r">관련전문 잡지</label>
                        </div>
                        <div className="form_box">
                            <input type="checkbox" id="s"/><label htmlFor="s">인터넷</label>
                            <input type="checkbox" id="t"/><label htmlFor="t">관련기관 및 단체</label>
                        </div>
                        <div className="form_box">
                            <input type="checkbox" id="u"/><label htmlFor="u">참관안내서</label>
                            <input type="checkbox" id="v"/><label htmlFor="v">외부광고</label>
                        </div>
                        <div className="form_box">
                            <input type="checkbox" id="w"/><label htmlFor="w">기타</label></div>
                        </div>
                </div>
                <div className="sub_individuals comInterestpany">
                    <div className="title">관심분야</div>
                    <div>
                        <div className="form_box">
                            <input type="checkbox" id="x"/><label htmlFor="x">목재건축</label>
                            <input type="checkbox" id="y"/><label htmlFor="y">목제품</label>
                        </div>
                        <div className="form_box">
                            <input type="checkbox" id="z"/><label htmlFor="z">임산물</label>
                            <input type="checkbox" id="aa"/><label htmlFor="aa">신재생에너지</label>
                        </div>
                        <div className="form_box">
                            <input type="checkbox" id="bb"/><label htmlFor="bb">산림(숲)관리</label>
                            <input type="checkbox" id="cc"/><label htmlFor="cc">산림레포츠</label>
                        </div>
                        <div className="form_box">
                            <input type="checkbox" id="dd"/><label htmlFor="dd">스마트모빌리티</label>
                            <input type="checkbox" id="ee"/><label htmlFor="ee">기타</label>
                        </div>
                    </div>
                </div>
            </div>
            <Observe_Plus />
        </div>
    )
}

export default Observe_individual
