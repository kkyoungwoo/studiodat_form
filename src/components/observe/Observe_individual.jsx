import React from 'react'
import './Observe_individual.css'
import Observe_Plus from '../common/Observe_Plus'
function Observe_individual(props) {

    props.setIsMe(false)

    return (
        <div className="individual_componets">
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
                            스크립트 삽입
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
                            <input type="checkbox" name="companylabel"/><label for="companylabel">제조업체</label>
                            <input type="checkbox" name="horns"/><label>유통업체</label>
                        </div>
                        <div  className="form_box">
                            <input type="checkbox" name="horns"/><label>관공서/단체/협회</label>
                            <input type="checkbox" name="horns"/><label>연구기관</label>
                        </div>
                        <div  className="form_box">
                            <input type="checkbox" name="horns"/><label>방송/신문</label>
                            <input type="checkbox" name="horns"/><label>무역</label>
                        </div>
                        <div  className="form_box">
                            <input type="checkbox" name="horns"/><label>병원/의원</label>
                            <input type="checkbox" name="horns"/><label>기타</label>
                        </div>
                    </div>
                </div>
                <div className="sub_individuals purpose">
                    <div className="title">관람목적</div>
                    <div>
                        <div className="form_box">
                            <input type="checkbox" name="horns"/><label>제품/기술 구매</label>
                            <input type="checkbox" name="horns"/><label>자료수집</label>
                        </div>
                        <div className="form_box">
                            <input type="checkbox" name="horns"/><label>시장동향파악</label>
                            <input type="checkbox" name="horns"/><label>연구</label>
                        </div>
                        <div className="form_box">
                            <input type="checkbox" name="horns"/><label>협력,투자 및 제휴업체 물색</label>
                            <input type="checkbox" name="horns"/><label>기타일반관람</label>
                        </div>
                        <div className="form_box">
                            <input type="checkbox" name="horns"/><label>차기전시참가여부 결정</label></div>
                        </div>
                </div>
                <div className="sub_individuals pathway">
                    <div className="title">전시회 인지경로</div>
                    <div>
                        <div className="form_box">
                            <input type="checkbox" name="horns"/><label>TV,신문 등 언론 매체</label>
                            <input type="checkbox" name="horns"/><label>관련전문 잡지</label>
                        </div>
                        <div className="form_box">
                            <input type="checkbox" name="horns"/><label>인터넷</label>
                            <input type="checkbox" name="horns"/><label>관련기관 및 단체</label>
                        </div>
                        <div className="form_box">
                            <input type="checkbox" name="horns"/><label>참관안내서</label>
                            <input type="checkbox" name="horns"/><label>외부광고</label>
                        </div>
                        <div className="form_box">
                            <input type="checkbox" name="horns"/><label>기타</label></div>
                        </div>
                </div>
                <div className="sub_individuals comInterestpany">
                    <div className="title">관심분야</div>
                    <div>
                        <div className="form_box">
                            <input type="checkbox" name="horns"/><label>목재건축</label>
                            <input type="checkbox" name="horns"/><label>목제품</label>
                        </div>
                        <div className="form_box">
                            <input type="checkbox" name="horns"/><label>임산물</label>
                            <input type="checkbox" name="horns"/><label>신재생에너지</label>
                        </div>
                        <div className="form_box">
                            <input type="checkbox" name="horns"/><label>산림(숲)관리</label>
                            <input type="checkbox" name="horns"/><label>산림레포츠</label>
                        </div>
                        <div className="form_box">
                            <input type="checkbox" name="horns"/><label>스마트모빌리티</label>
                            <input type="checkbox" name="horns"/><label>기타</label>
                        </div>
                    </div>
                </div>
            </div>
            <Observe_Plus />
        </div>
    )
}

export default Observe_individual
