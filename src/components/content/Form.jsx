import React, { useEffect, useState } from 'react'
import Plus from '../common/Plus'
import './form.css'

function Form(props) {

    props.setIsMe(false)
    //독립부스
    const [phBoothOne,setPhBoothOne] = useState(0)
    //기본부스
    const [phBoothTwo,setPhBoothTwo] = useState(0)
    //프리미엄부스
    const [phBoothThree,setPhBoothThree] = useState(0)
    //단상220v
    const [phEvOne,setPhEvOne] = useState(0)
    //삼상220v
    const [phEvTwo,setEvTwo] = useState(0)
    //삼상380v
    const [PhEvThree,setPhEvThree] = useState(0)
    //국내
    const [phKo,setPhKo] = useState(0)
    //국제
    const [phGlo,setPhGlo] = useState(0)
    //급배수
    const [phWater,setPhWater] = useState(0)
    //압축공기
    const [phAir,setPhAir] = useState(0)
    //랜
    const [phLan,setPhLan] = useState(0)
    //소계
    const [phSubTotal,setPhSubTotal] = useState(0)
    //부가세
    const [phVat,setPhVat] = useState(0)
    //합계
    const [phTotal,setPhTotal] = useState(0)

    const TotalPay = phEvOne+phEvTwo+PhEvThree+phKo+phGlo+phWater+phAir+phLan

    useEffect(()=>{
        setPhSubTotal(TotalPay)
        setPhVat(TotalPay * 10 / 100)
        setPhTotal(phSubTotal+phVat)
    })

    return (
        <div className="form_wrap">
            <nav className="title_text">주최측에서 제공하는 <span>[참가업체 메뉴얼]</span>을 반드시 확인하신 후 참가 신청해주시기 바랍니다.</nav>
            <div className="company_form">
                <div className="form company main_color">회사명</div>
                <div className="form company_text">
                    <input type="text" />
                </div>
                <div className="form boss main_color">대표자명</div>
                <div className="form boss_text">
                    <input type="text" />
                </div>
                <div className="form address main_color">주소</div>
                <div className="form address_text">
                    <input type="text" />
                </div>
                <div className="form manager main_color">담당자명</div>
                <div className="form manager_text">
                    <input type="text" />
                </div>
                <div className="form compony_position main_color">부서(직위)</div>
                <div className="form compony_position_text">
                    <input type="text" />
                </div>
                <div className="form phone main_color">연락처</div>
                <div className="form phone_text">
                    <input type="text" />
                </div>
                <div className="form email main_color">E-mail</div>
                <div className="form email_text">
                    <input type="text" />
                </div>
                <div className="form website main_color">홈페이지 주소</div>
                <div className="form website_text">
                    <input type="text" />
                </div>
                <div className="form Field main_color">참가 전시 분야</div>
                <div className="form Field_text">
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
                    기　　타 : <input type="text" style={{width:"79%"}}/>
                </div>
                <div className="form item main_color">주요 전시품목</div>
                <div className="form item_text">
                    <input type="text" style={{width:"90%"}}/>
                </div>
                <div className="form banner main_color">상호명(현수막)</div>
                <div className="form banner_text">
                    <input type="text" placeholder="띄어쓰기 및 오타에 유의하시길 바랍니다" style={{width:"90%"}}/>
                </div>
            </div>
            <div className="business_Registration">
                <div className="Registration number title_color">사업자등록번호(*)</div>
                <div className="Registration number_input">
                    <input type="text" />
                </div>
                <div className="Registration file title_color">사업자등록증첨부</div>
                <div className="Registration file_input">
                    <input type="file" />
                </div>
            </div>
            <div className="title_text">부스신청</div>
            <div className="application">
                <div className="booth division title_color">구분</div>
                <div className="booth quantity title_color">신청내역(수량)</div>
                <div className="booth unit_price title_color">단가(VAT별도))</div>
                <div className="booth price title_color">금액</div>
                
                <div className="booth boothname title_color">부스</div>
                <div className="booth independent title_color">독립부스(면적만 제공, 3m x 3m)</div>
                <div className="booth independent_ea">
                    <input type="number" onChange={()=> setPhBoothOne(0)}/>개
                </div>
                <div className="booth independent_ea_support">주최측 지원</div>
                <div className="booth independent_ea_support_total" >
                    <input type="text" placeholder="0" style={{pointerEvents: "none"}}/> 원
                </div>
                <div className="booth nomal title_color">기본(조립)부스(옥타늄, 3m x 3m)</div>
                <div className="booth nomal_ea">
                    <input type="number" onChange={()=> setPhBoothTwo(0)}/>개
                </div>
                <div className="booth nomal_ea_support">주최측 지원</div>
                <div className="booth nomal_ea_support_total">
                    <input type="text" placeholder="0" style={{pointerEvents: "none"}}/> 원
                </div>
                <div className="booth premium title_color">프리미엄부스(6m x 9m)</div>
                <div className="booth premium_ea">
                    <input type="number" onChange={()=> setPhBoothThree(0)}/>개
                </div>
                <div className="booth premium_ea_support">비용 별도 협의(신청 후)</div>
                <div className="booth premium_ea_support_total">
                    <input type="text" placeholder="0" style={{pointerEvents: "none"}}/> 원
                </div>

                <div className="booth elec title_color">전기</div>
                <div className="booth one_phase title_color">단상220V(60Hz)</div>
                <div className="booth one_phase_kw" >
                    <input type="number"
                    onChange={(e)=> setPhEvOne(Number(e.target.value)*50000)}
                    />KW
                </div>
                <div className="booth one_phase_kw_won">50,000원</div>
                <div className="booth one_phase_kw_total">
                    {phEvOne}원
                </div>
                <div className="booth two_phase title_color">삼상220V(60Hz)</div>
                <div className="booth two_phase_kw">
                    <input type="number" onChange={(e)=> setEvTwo(Number(e.target.value)*50000)}/>KW
                </div>
                <div className="booth two_phase_kw_won">50,000원</div>
                <div className="booth two_phase_kw_total">
                    {phEvTwo}원
                </div>
                <div className="booth three_phase title_color">삼상380V(60Hz)</div>
                <div className="booth three_phase_kw">
                    <input type="number" onChange={(e)=> setPhEvThree(Number(e.target.value)*50000)}/>KW
                </div>
                <div className="booth three_phase_kw_won">50,000원</div>
                <div className="booth three_phase_kw_total">
                    {PhEvThree}원
                </div>


                <div className="booth tell title_color">전화</div>
                <div className="booth ko title_color">국내</div>
                <div className="booth ko_unit">
                    <input type="number" onChange={(e)=> setPhKo(Number(e.target.value)*90000)}/>대
                </div>
                <div className="booth ko_unit_won">90,000</div>
                <div className="booth ko_unit_total">
                    {phKo}원
                </div>
                <div className="booth global title_color">국제</div>
                <div className="booth global_unit">
                    <input type="number" onChange={(e)=> setPhGlo(Number(e.target.value)*170000)}/>대
                </div>
                <div className="booth global_unit_won">170,000</div>
                <div className="booth global_unit_total">
                    {phGlo}원
                </div>

                <div className="booth water title_color sub_color">급배수</div>
                <div className="booth water_won">150,000원</div>
                <div className="booth water_place">
                    <input type="number" onChange={(e)=> setPhWater(Number(e.target.value)*150000)}/>개소
                </div>
                <div className="booth water_place_total">
                    {phWater}원
                </div>
                <div className="booth air title_color sub_color">압축공기</div>
                <div className="booth air_won">200,000원</div>
                <div className="booth air_place">
                    <input type="number" onChange={(e)=> setPhAir(Number(e.target.value)*200000)}/>개소
                </div>
                <div className="booth air_place_total">
                    {phAir}원
                </div>
                <div className="booth lan title_color sub_color">LAN</div>
                <div className="booth lan_port">
                    <input type="number" onChange={(e)=> setPhLan(Number(e.target.value)*150000)}/>PORT
                </div>
                <div className="booth lan_port_won">150,000원</div>
                <div className="booth lan_port_total">
                    {phLan}원
                </div>

                <div className="booth subtotal title_color sub_color">소계</div>
                <div className="booth subtotal_total">
                    {phSubTotal}원
                </div>
                <div className="booth vat title_color sub_color">부가가치세</div>
                <div className="booth vat_total">
                    {phVat}원
                </div>
                <div className="booth total title_color sub_color">합계</div>
                <div className="booth total_end">
                    {phTotal}원
                </div>
                <div className="booth atc title_color sub_color">기타</div>
                <div className="booth atc_text">
                    <input type="text" style={{width:"90%"}} placeholder="위 부가항목 외 필요한 품목을 작성해주세요."/>
                </div>
            </div>
            <Plus />
        </div>
    )
}

export default Form
