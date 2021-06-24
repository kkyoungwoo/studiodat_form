import React from 'react'
import Privacy from './Privacy'
import './observe.css'
function Observe_group(props) {

    props.setIsMe(false)

    return (
        <div>
            <div className="title_text fontsizeup">단체 온라인 참관신청</div>
            <div>
                < Privacy />
                <div className="agree_box">
                    <input type="checkbox" />
                    개인정보취급방침 동의합니다.
                </div>
            </div>
            <div className="privacy_wrap">
                <div className="title_text">기본정보</div>
                <div className="Privacy_forms">
                    <div className="Privacy_form Privacy_groupname title_color">단체명</div>
                    <div className="Privacy_form Privacy_groupname_text">
                        <input type="text" />
                    </div>

                    <div className="Privacy_form Privacy_name title_color">담당자성명</div>
                    <div className="Privacy_form Privacy_name_text">
                        <input type="text" />
                    </div>

                    <div className="Privacy_form Privacy_phone title_color">담당자연락처</div>
                    <div className="Privacy_form Privacy_phone_text">
                        <input type="text" />
                    </div>

                    <div className="Privacy_form Privacy_position title_color">직위</div>
                    <div className="Privacy_form Privacy_position_text">
                        <input type="text" />
                    </div>

                    <div className="Privacy_form Privacy_number title_color">담당자휴대전화</div>
                    <div className="Privacy_form Privacy_number_text">
                        <input type="text" />
                    </div>
                    <div className="Privacy_form Privacy_email title_color">이메일</div>
                    <div className="Privacy_form Privacy_email_text">
                        <input type="text" />
                    </div>
                    <div className="Privacy_form Privacy_address title_color">주소</div>
                    {/*주소찾기 스크립트 삽입 필요 */}
                    <div className="Privacy_form Privacy_address_script">
                        스크립트
                    </div>
                    <div className="Privacy_form Privacy_address_text">
                        <span className="text_margin">상세주소</span>
                        <input type="text" />
                    </div>

                    <div className="Privacy_form Privacy_list title_color">참관객명단</div>
                    <div className="Privacy_form Privacy_list_text">
                        <input type="text" placeholder="기능 구현 대기"/>
                    </div>
                    <div className="Privacy_form Privacy_day title_color">참관예정일자</div>
                    <div className="Privacy_form Privacy_day_box">
                        <input type="checkbox" />2021-10-14 (목)
                        <br/><input type="checkbox" />2021-10-15 (금)
                        <br/><input type="checkbox" />2021-10-16 (토)
                    </div>
                </div>
            </div>
            <div className="sesses_wrap">
                <div className="secces">참관신청하기</div>
                <div className="failure">취소하기</div>
            </div>
        </div>
    )
}

export default Observe_group
