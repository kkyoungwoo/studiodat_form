import React, { useEffect, useState, useCallback } from 'react'
import emailjs from 'emailjs-com';
import '../common/plus.css'
import './form.css'

function Form(props) {

    useEffect(() => {props.setIsMe(false)})
    //회사명
    const [company,setCompany] = useState("")
    //대표자명
    const [boss,setBoss] = useState("")
    //주소
    const [address,setAddress] = useState("")
    //담당자명
    const [compmanager,setcompManager] = useState("")
    //부서(직위)
    const [componyPosition,setcomponyPosition] = useState("")
    //연락처
    const [phone,setPhone] = useState("")
    //E-mail
    const [email,setEmail] = useState("")
    //홈페이지 주소
    const [webSite,setWebSite] = useState("")

    //참가전시분야
    const [field,setField] = useState("")
    //기타
    const [fildetc,setFildetc] = useState("")

    //주요전시품목
    const [item,setItem] = useState("")
    //상호명(현수막)
    const [banner,setBanner] = useState("")
    //사업자등록번호
    const [compNumber,setCompNumber] = useState("")

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

    //마지막 기타사항
    const [boothEtc,setBoothEtc] = useState("")

    //출입증 신청
    const [boothPlus,setBoothPlus] = useState([0])

    //신청인 정보
    const [plusNum,setPlusNum] = useState([0])
    const [plusName,setPlusName] = useState()
    const [plusPosition,setPlusPosition] = useState()
    const [plusPhoneNum,setPlusPhoneNum] = useState()
    const [plusText,setPlusText] = useState()

    const plusMambers = useCallback(
        () => {
            const array = [...plusNum]
            array.push(Number(plusNum[plusNum.length -1 ])+1)
            setPlusNum(array)
            console.log(plusNum)
        },
        [plusNum])
        
        const handleDelete = (idx) => {
            const Delet = plusNum.filter((_,idxx) => idx !== idxx)
            setPlusNum(Delet)
        }


    useEffect(()=>{
        setPhSubTotal(TotalPay)
        setPhVat(TotalPay * 10 / 100)
        setPhTotal(phSubTotal+phVat)
    })

    const submitJoin = useCallback(()=>{
        alert("신청이 완료되었습니다.")
    })

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_spdcidi', 'template_zau8w0f', e.target, 'user_YOvzVUT3C3OBySLzLPves')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <div className="form_wrap contact-form">
            <form className="contact-form" onSubmit={sendEmail}>
                <input className="displaynone" type="hidden" name="contact_number" />
                <label className="displaynone">Name</label>
                <input className="displaynone" type="text" name="user_name" />
                <label className="displaynone" >Email</label>
                <input className="displaynone" type="email" name="user_email" />
                <label className="displaynone" >Message</label>
                <textarea className="displaynone" name="message" readOnly value={
                    " 회사명 :"+company+
                    " , 대표자명 :"+boss+
                    " , 주소 :"+address+
                    " , 담당자명 :"+compmanager+
                    " , 부서(직위) :"+componyPosition+
                    " , 연락처 :"+phone+
                    " , E-mail :"+email+
                    " , 홈페이지 주소 :"+webSite+

                    " , 참가전시분야 :"+field+
                    " , 기타 :"+fildetc+
                    //산림소재산업(목재,목조건축,목제품,임산물)
                    //신재생 에너지(바이오 매스, 펠릿)
                    //친환경(R&D,산지관리,환경,스마트 모빌리티)
                    //여가·레포츠(숲 체험, 산림레포츠)
                    " , 주요 전시품목 :"+item+
                    " , 상호명(현수막) :"+banner+
                    " , 사업자등록번호 :"+compNumber+

                    "독립부스 :"+phBoothOne+
                    " 개, 기본부스 :"+phBoothTwo+
                    " 개, 프리미엄부스 :"+phBoothThree+
                    " 개, 단상220v :"+phEvOne+
                    " KW, 삼상220v :"+phEvTwo+
                    " KW, 삼상380v :"+PhEvThree+
                    " KW, 국내 :"+phKo+
                    " 대, 국제 :"+phGlo+
                    " 대, 급배수 :"+phWater+
                    " 개소, 압축공기 :"+phAir+
                    " 개소, 랜 :"+phLan+
                    " PORT, 소계 :"+phSubTotal+
                    " 원, 부가세 :"+phVat+
                    " 원, 합계 :"+phTotal+
                    " 원, 부가항목 외 기타사항 "+boothEtc +

                    " 출입증 신청 "+boothPlus
                }/>
            <nav className="title_text">주최측에서 제공하는 <span>[참가업체 메뉴얼]</span>을 반드시 확인하신 후 참가 신청해주시기 바랍니다.</nav>
            <div className="company_form">
                <div className="form company main_color">회사명</div>
                <div className="form company_text">
                    <input type="text" onChange={(e)=> setCompany(e.target.value)}/>
                </div>
                <div className="form boss main_color">대표자명</div>
                <div className="form boss_text">
                    <input type="text" onChange={(e)=> setBoss(e.target.value)}/>
                </div>
                <div className="form address main_color">주소</div>
                <div className="form address_text">
                    <input type="text" onChange={(e)=> setAddress(e.target.value)}/>
                </div>
                <div className="form manager main_color">담당자명</div>
                <div className="form manager_text">
                    <input type="text" onChange={(e)=> setcompManager(e.target.value)}/>
                </div>
                <div className="form compony_position main_color">부서(직위)</div>
                <div className="form compony_position_text">
                    <input type="text" onChange={(e)=> setcomponyPosition(e.target.value)}/>
                </div>
                <div className="form phone main_color">연락처</div>
                <div className="form phone_text">
                    <input type="text" onChange={(e)=> setPhone(e.target.value)}/>
                </div>
                <div className="form email main_color">E-mail</div>
                <div className="form email_text">
                    <input type="text" onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="form website main_color">홈페이지 주소</div>
                <div className="form website_text">
                    <input type="text" onChange={(e)=> setWebSite(e.target.value)}/>
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
                    기　　타 : <input className="fild_etc" type="text" style={{width:"79%"}} onChange={(e)=> setFildetc(e.target.value)}/>
                </div>
                <div className="form item main_color">주요 전시품목</div>
                <div className="form item_text">
                    <input type="text" style={{width:"90%"}} onChange={(e)=> setItem(e.target.value)}/>
                </div>
                <div className="form banner main_color">상호명(현수막)</div>
                <div className="form banner_text">
                    <input type="text" onChange={(e)=> setBanner(e.target.value)} placeholder="띄어쓰기 및 오타에 유의하시길 바랍니다" style={{width:"90%"}}/>
                </div>
            </div>
            <div className="business_Registration">
                <div className="Registration number title_color">사업자등록번호(*)</div>
                <div className="Registration number_input">
                    <input type="text" onChange={(e)=> setCompNumber(e.target.value)}/>
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
                    <input type="number" onChange={(e)=> setPhBoothOne(e.target.value)}/>개
                </div>
                <div className="booth independent_ea_support">주최측 지원</div>
                <div className="booth independent_ea_support_total" >
                    <input type="text" placeholder="0" style={{pointerEvents: "none"}}/> 원
                </div>
                <div className="booth nomal title_color">기본(조립)부스(옥타늄, 3m x 3m)</div>
                <div className="booth nomal_ea">
                    <input type="number" onChange={(e)=> setPhBoothTwo(e.target.value)}/>개
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
                    <input type="text" onChange={(e) => setBoothEtc(e.target.value)}style={{width:"90%"}} placeholder="위 부가항목 외 필요한 품목을 작성해주세요."/>
                </div>
            </div>
            <div>
            <div className="plus_wrap">
                <div className="plus_header">
                    <div className="plus_header_warp">
                        <div className="header_left">
                            <div className="header_left_text">· 출입증신청</div>
                            <div className="header_left_btn" onClick={plusMambers}>추가</div>
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
                                        <div className="btn_close" onClick={() => (handleDelete(idx))}>
                                            삭제
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <input type="submit" className="submit_btn" onClick={submitJoin} value="참가신청"/>
                <button className="cancle_btn" onClick={()=>alert("메인화면으로 이동합니다.")}>취소하기</button>
        </form>
        </div>
    )
}

export default Form
