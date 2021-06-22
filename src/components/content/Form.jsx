import React from 'react'
import './form.css'

function Form() {
    return (
        <div className="form_wrap">
            <div class="company_form">
                <nav>주최측에서 제공하는 <span>[참가업체 메뉴얼]</span>을 반드시 확인하신 후 참가 신청해주시기 바랍니다.</nav>
                <div class="form company">회사명</div>
                <div class="form boss">대표자명</div>
                <div class="form address">주소</div>
                <div class="form manager">담당자명</div>
                <div class="form compony_position">부서(직위)</div>
                <div class="form phone">연락처</div>
                <div class="form email">E-mail</div>
                <div class="form website">홈페이지 주소</div>
                <div class="form Field">참가 전시 분야</div>
                <div class="form item ">주요 전시품목</div>
                <div class="form banner">상호명(현수막)</div>
            </div>
            <div className="business_Registration">
                <div class="Registration number">사업자등록번호</div>
                <div class="Registration file">사업자등록증첨부</div>
            </div>
            <div className="application">
                <div>부스신청</div>
                <div class="booth division">구분</div>
                <div class="booth quantity">신청내역(수량)</div>
                <div class="booth unit_price">단가(VAT별도))</div>
                <div class="booth price">금액</div>
                
                <div class="booth boothname">부스</div>
                <div class="booth independent">독립부스(면적만 제공, 3m x 3m)</div>
                <div class="booth nomal">기본(조립)부스(옥타늄, 3m x 3m)</div>
                <div class="booth premium">프리미엄부스(6m x 9m)</div>

                <div class="booth elec">전기</div>
                <div class="booth one_phase">단상220V(60Hz)</div>
                <div class="booth two_phase">삼상220V(60Hz)</div>
                <div class="booth three_phase">삼상380V(60Hz)</div>

                <div class="booth tell">전화</div>
                <div class="booth ko">국내</div>
                <div class="booth global">국제</div>

                <div class="booth water">급배수</div>
                <div class="booth air">압축공기</div>
                <div class="booth lan">LAN</div>

                <div class="booth ea">개</div>
                <div class="booth kw">KW</div>
                <div class="booth unit">대</div>
                <div class="booth place">개소</div>
                <div class="booth port">PORT</div>
                <div class="booth won">원</div>
                <div class="booth five">50,000원</div>
                <div class="booth nine">90,000</div>
                <div class="booth one">150,000원</div>
                <div class="booth seven">170,000원</div>
                <div class="booth two">200,000원</div>
                <div class="booth support">주최측 지원 /개</div>
                <div class="booth conference">비용 별도 협의(신청 후)</div>


                <div class="booth subtotal">소계</div>
                <div class="booth vat">부가가치세</div>
                <div class="booth total">합계</div>

                <div class="booth atc">기타</div>
            </div>
        </div>
    )
}

export default Form
