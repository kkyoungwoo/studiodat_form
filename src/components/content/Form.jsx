import React from 'react'
import Plus from './Plus'
import './form.css'

function Form() {
    return (
        <div className="form_wrap">
            <div class="company_form">
                <nav>주최측에서 제공하는 <span>[참가업체 메뉴얼]</span>을 반드시 확인하신 후 참가 신청해주시기 바랍니다.</nav>
                <div class="form company main_color">회사명</div>
                <div class="form company_text">
                    <input type="text" />
                </div>
                <div class="form boss main_color">대표자명</div>
                <div class="form boss_text">
                    <input type="text" />
                </div>
                <div class="form address main_color">주소</div>
                <div class="form address_text">
                    <input type="text" />
                </div>
                <div class="form manager main_color">담당자명</div>
                <div class="form manager_text">
                    <input type="text" />
                </div>
                <div class="form compony_position main_color">부서(직위)</div>
                <div class="form compony_position_text">
                    <input type="text" />
                </div>
                <div class="form phone main_color">연락처</div>
                <div class="form phone_text">
                    <input type="text" />
                </div>
                <div class="form email main_color">E-mail</div>
                <div class="form email_text">
                    <input type="text" />
                </div>
                <div class="form website main_color">홈페이지 주소</div>
                <div class="form website_text">
                    <input type="text" />
                </div>
                <div class="form Field main_color">참가 전시 분야</div>
                <div class="form Field_text">
                    <input type="checkbox"/>
                    산림소재산업(목재,목조건축,목제품,임산물)
                    <input type="checkbox"/>
                    신재생 에너지(바이오 매스, 펠릿)
                    <br />
                    <input type="checkbox"/>
                    친환경(R&D,산지관리,환경,스마트 모빌리티)
                    <input type="checkbox"/>
                    여가·레포츠(숲 체험, 산림레포츠)
                    <br />
                    기　　타 : <input type="text" />
                </div>
                <div class="form item main_color">주요 전시품목</div>
                <div class="form item_text">
                    <input type="text" />
                </div>
                <div class="form banner main_color">상호명(현수막)</div>
                <div class="form banner_text">
                    <input type="text" />
                </div>
            </div>
            <div className="business_Registration">
                <div class="Registration number title_color">사업자등록번호(*)</div>
                <div class="Registration number_input">
                    <input type="text" />
                </div>
                <div class="Registration file title_color">사업자등록증첨부</div>
                <div class="Registration file_input">
                    <input type="file" />
                </div>
            </div>
            <div>부스신청</div>
            <div className="application">
                <div class="booth division title_color">구분</div>
                <div class="booth quantity title_color">신청내역(수량)</div>
                <div class="booth unit_price title_color">단가(VAT별도))</div>
                <div class="booth price title_color">금액</div>
                
                <div class="booth boothname title_color">부스</div>
                <div class="booth independent title_color">독립부스(면적만 제공, 3m x 3m)</div>
                <div class="booth independent_ea">개</div>
                <div class="booth independent_ea_support">주최측 지원 /개</div>
                <div class="booth independent_ea_support_total">원</div>
                <div class="booth nomal title_color">기본(조립)부스(옥타늄, 3m x 3m)</div>
                <div class="booth nomal_ea">개</div>
                <div class="booth nomal_ea_support">주최측 지원 /개</div>
                <div class="booth nomal_ea_support_total">원</div>
                <div class="booth premium title_color">프리미엄부스(6m x 9m)</div>
                <div class="booth premium_ea">개</div>
                <div class="booth premium_ea_support">비용 별도 협의(신청 후)</div>
                <div class="booth premium_ea_support_total">원</div>

                <div class="booth elec title_color">전기</div>
                <div class="booth one_phase title_color">단상220V(60Hz)</div>
                <div class="booth one_phase_kw">KW</div>
                <div class="booth one_phase_kw_won">50,000원</div>
                <div class="booth one_phase_kw_total">원</div>
                <div class="booth two_phase title_color">삼상220V(60Hz)</div>
                <div class="booth two_phase_kw">KW</div>
                <div class="booth two_phase_kw_won">50,000원</div>
                <div class="booth two_phase_kw_total">원</div>
                <div class="booth three_phase title_color">삼상380V(60Hz)</div>
                <div class="booth three_phase_kw">KW</div>
                <div class="booth three_phase_kw_won">50,000원</div>
                <div class="booth three_phase_kw_total">원</div>


                <div class="booth tell title_color">전화</div>
                <div class="booth ko title_color">국내</div>
                <div class="booth ko_unit">대</div>
                <div class="booth ko_unit_won">90,000</div>
                <div class="booth ko_unit_total">원</div>
                <div class="booth global title_color">국제</div>
                <div class="booth global_unit">대</div>
                <div class="booth global_unit_won">170,000</div>
                <div class="booth global_unit_total">원</div>

                <div class="booth water title_color">급배수</div>
                <div class="booth water_won">150,000원</div>
                <div class="booth water_place">개소</div>
                <div class="booth water_place_total">원</div>
                <div class="booth air title_color">압축공기</div>
                <div class="booth air_won">200,000원</div>
                <div class="booth air_place">개소</div>
                <div class="booth air_place_total">원</div>
                <div class="booth lan title_color">LAN</div>
                <div class="booth lan_port">PORT</div>
                <div class="booth lan_port_won">150,000원</div>
                <div class="booth lan_port_total">원</div>

                <div class="booth subtotal title_color">소계</div>
                <div class="booth subtotal_total">소계</div>
                <div class="booth vat title_color">부가가치세</div>
                <div class="booth vat_total">부가가치세</div>
                <div class="booth total title_color">합계</div>
                <div class="booth total_end">합계</div>

                <div class="booth atc title_color">기타</div>
                <div class="booth atc_text">기타 내용</div>
            </div>
            <Plus />
        </div>
    )
}

export default Form
