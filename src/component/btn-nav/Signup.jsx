import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha"
import "../../App.css"
import img1 from "../../image/Flinko_Logo.png"
import img2 from "../../image/download_write.png"
import img3 from "../../image/bg_img.png"

function Signup(props) {
    const [eye, seteye] = useState(true)
    const [ye, setye] = useState(true)
    const [state, setstate] = useState({

        name: "",
        email: "",
        password: "",
        conpassword: "",
        organization: "",
        title: ""

    })

    const [coname, setconame] = useState(true)
    const [namerror, setnamerror] = useState("")

    const [conemail, setconemail] = useState(true)
    const [emailerror, setemailerror] = useState("")

    const [conpass, setconpass] = useState(true)
    const [passerror, setpasserror] = useState("")

    const [conapass, setconapass] = useState(true)
    const [conaerror, setconaerror] = useState("")

    const [orname, setorname] = useState(true)
    const [ornamerror, setornamerror] = useState("")

    const [jobname, setjobname] = useState(true)
    const [jobnamerror, setjobnamerror] = useState("")

    const hide = () => {
        seteye(!eye)
    }
    const hide1 = () => {
        setye(!ye)
    }

    const render = () => {
        console.log(props);
        props.history.push("./signin")
    }
    const recaptcha = (e) => {
        console.log(e);



        // seteye(!eye)
    }
    const login = (e) => {
        e.preventDefault()
        console.log(state.name);
        let isname = nameValidation(state.name)
        let isemail = emailValidation(state.email)
        let ispassword = passwordValidation(state.password)
        let isconpassword = conpasswordValidation(state.conpassword)
        let isorganization = organizationValidation(state.organization)
        let istitle = titleValidation(state.title)
        if (isname && isemail && ispassword && isconpassword && isorganization && istitle) {
            props.history.push("./signin")
        }
    }
    // name nameValidation
    const nameValidation = (namedo) => {
        if (namedo) {
            if (/^[a-zA-Z ]+$/.test(namedo)) {
                console.log("asd");
                setconame(true)
                setnamerror("")
                return true
            } else {
                setconame(false)
                setnamerror("plz enter your valid name")
                return false
            }

        } else {
            setconame(false)
            setnamerror("plz enter your  name")
            return false
        }
    }
    // emailvalidation
    const emailValidation = (emailval) => {
        if (emailval) {
            if ((
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {
                setconemail(true)
                setconaerror("")
                return true
            } else {
                setconemail(false)
                setconaerror("plz enter your valid mail")
                return false
            }
        } else {
            setconemail(false)
            setemailerror("plz enter your mail")
            return false
        }
    }
    // passwordValidation
    const passwordValidation = (passwordval) => {
        if (passwordval) {
            if (/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(passwordval)) {
                setconpass(true)
                setpasserror("")
                return true
            }
            else {
                setconpass(false)
                setpasserror("plz enter your valid password")
                return false
            }
        }
        else {
            setconpass(false)
            setpasserror("plz enter your password")
            return false
        }
    }
    // conform password
    const conpasswordValidation = (conval) => {
        if (conval) {
            if (/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(conval)) {
                setconapass(true)
                setconaerror("")

                return true
            } else {
                setconapass(false)
                setconaerror("your password is not match")
                return false
            }
        } else {
            setconapass(false)
            setconaerror("enter your password")
            return false
        }
    }

    // organizationValidation
    const organizationValidation = (orgaval) => {
        if (orgaval) {
            if (/^[a-zA-Z ]+$/.test(orgaval)) {
                setorname(true)
                setornamerror("")
                return true
            } else {
                setorname(false)
                setornamerror("enter your name ")
                return false
            }

        } else {
            setorname(false)
            setornamerror("enter your organization name")
            return false
        }
    }

    // titleValidation
    const titleValidation = (titleVal) => {
        if (titleVal) {
            if (/^[a-zA-Z ]+$/.test(titleVal)) {
                setjobname(true)
                setjobnamerror("")
                return true
            } else {
                setjobname(false)
                setjobnamerror("enter your name ")
                return false
            }

        } else {
            setjobname(false)
            setjobnamerror("enter your organization name")
            return false
        }
    }
    const change = (e) => {
        const copy = { ...state }
        copy[e.target.name] = e.target.value
        setstate(copy)
    }

    return (
        <div className='container'>
            <div className='row d-flex justify-content-evenly'>

                <div className='col-md-6'>

                    <div>
                        <img src={img1} className="i1" />
                        <img src={img2} className="i2" />

                        <img src={img3} className="i3" />
                    </div>

                </div>

                <div className='col-md-5 val '>
                    <h3 className='extra-bold sin' >Sign in </h3>
                    <span className='new'>Already have an account</span>
                    <span><a className='create' onClick={render}>Sign</a></span>

                    <form onSubmit={login}>
                        <div className='email'>
                            <label > <span className='start'>*</span> Name</label>
                        </div>
                        <div className='email-input'>
                            <input type="text" placeholder='Enter your name' name='name' value={state.name} className='' onChange={change} />
                        </div>
                        {!coname ? <p style={{ color: "red", fontSize: "12px" }}>{namerror}</p> : null}

                        <div className='pass'>
                            <label > <span className='start'>*</span> Email</label>
                        </div>
                        <div className='pass-input'>
                            <input type="text" placeholder='Enter your eamil' onChange={change} name='email' value={state.email} />
                        </div>
                        {!conemail ? <p style={{ color: "red", fontSize: "12px" }}>{emailerror}</p> : null}

                        <div className='pass'>
                            <label className='size' > <span className='start'>*</span> Password</label>
                        </div>
                        <div className='pass-input'>
                            <input type={!eye ? "text" : "password"} onChange={change} placeholder='Enter your password' name='password' value={state.password} /><a className='eye' onClick={hide}>{eye ? <i class=" far  fa-eye-slash"></i> : <i class="far fa-eye"></i>}</a>
                        </div>
                        {!conpass ? <p style={{ color: "red", fontSize: "12px" }}>{passerror}</p> : null}


                        <div className='pass'>
                            <label > <span className='start'>*</span> Conform Password</label>
                        </div>
                        <div className='pass-input'>
                            <input name='conpassword' onChange={change} value={state.conpassword} type={!eye ? "text" : "password"} placeholder='Conform Password' /><a className='eye' onClick={hide1}>{ye ? <i class=" far  fa-eye-slash"></i> : <i class="far fa-eye"></i>}</a>
                        </div>
                        <p>{!conapass ? <p style={{ color: "red", fontSize: "12px" }}>{conaerror}</p> : null}
                        </p>
                        <div className='pass'>
                            <label > <span className='start'>*</span> Phone Number</label>
                            <div className='phoneinput'>
                                <select name="" className='phoneinputcountry'>
                                    <option value="213">Algeria (+213)</option>
                                    <option data-countryCode="AD" value="376">Andorra (+376)</option>
                                    <option data-countryCode="AO" value="244">Angola (+244)</option>
                                    <option data-countryCode="AI" value="1264">Anguilla (+1264)</option>
                                    <option data-countryCode="AG" value="1268">Antigua & Barbuda (+1268)</option>
                                    <option data-countryCode="AR" value="54">Argentina (+54)</option>
                                    <option data-countryCode="AM" value="374">Armenia (+374)</option>
                                    <option data-countryCode="AW" value="297">Aruba (+297)</option>
                                    <option data-countryCode="AU" value="61">Australia (+61)</option>
                                    <option data-countryCode="AT" value="43">Austria (+43)</option>
                                    <option data-countryCode="AZ" value="994">Azerbaijan (+994)</option>
                                    <option data-countryCode="BS" value="1242">Bahamas (+1242)</option>
                                    <option data-countryCode="BH" value="973">Bahrain (+973)</option>
                                    <option data-countryCode="BD" value="880">Bangladesh (+880)</option>
                                    <option data-countryCode="BB" value="1246">Barbados (+1246)</option>
                                    <option data-countryCode="BY" value="375">Belarus (+375)</option>
                                    <option data-countryCode="BE" value="32">Belgium (+32)</option>
                                    <option data-countryCode="BZ" value="501">Belize (+501)</option>
                                    <option data-countryCode="BJ" value="229">Benin (+229)</option>
                                    <option data-countryCode="BM" value="1441">Bermuda (+1441)</option>
                                    <option data-countryCode="BT" value="975">Bhutan (+975)</option>
                                    <option data-countryCode="BO" value="591">Bolivia (+591)</option>
                                    <option data-countryCode="BA" value="387">Bosnia Herzegovina (+387)</option>
                                    <option data-countryCode="BW" value="267">Botswana (+267)</option>
                                    <option data-countryCode="BR" value="55">Brazil (+55)</option>
                                    <option data-countryCode="BN" value="673">Brunei (+673)</option>
                                    <option data-countryCode="BG" value="359">Bulgaria (+359)</option>
                                    <option data-countryCode="BF" value="226">Burkina Faso (+226)</option>
                                    <option data-countryCode="BI" value="257">Burundi (+257)</option>
                                    <option data-countryCode="KH" value="855">Cambodia (+855)</option>
                                    <option data-countryCode="CM" value="237">Cameroon (+237)</option>
                                    <option data-countryCode="CA" value="1">Canada (+1)</option>
                                    <option data-countryCode="CV" value="238">Cape Verde Islands (+238)</option>
                                    <option data-countryCode="KY" value="1345">Cayman Islands (+1345)</option>
                                    <option data-countryCode="CF" value="236">Central African Republic (+236)</option>
                                    <option data-countryCode="CL" value="56">Chile (+56)</option>
                                    <option data-countryCode="CN" value="86">China (+86)</option>
                                    <option data-countryCode="CO" value="57">Colombia (+57)</option>
                                    <option data-countryCode="KM" value="269">Comoros (+269)</option>
                                    <option data-countryCode="CG" value="242">Congo (+242)</option>
                                    <option data-countryCode="CK" value="682">Cook Islands (+682)</option>
                                    <option data-countryCode="CR" value="506">Costa Rica (+506)</option>
                                    <option data-countryCode="HR" value="385">Croatia (+385)</option>
                                    <option data-countryCode="CU" value="53">Cuba (+53)</option>
                                    <option data-countryCode="CY" value="90392">Cyprus North (+90392)</option>
                                    <option data-countryCode="CY" value="357">Cyprus South (+357)</option>
                                    <option data-countryCode="CZ" value="42">Czech Republic (+42)</option>
                                    <option data-countryCode="DK" value="45">Denmark (+45)</option>
                                    <option data-countryCode="DJ" value="253">Djibouti (+253)</option>
                                    <option data-countryCode="DM" value="1809">Dominica (+1809)</option>
                                    <option data-countryCode="DO" value="1809">Dominican Republic (+1809)</option>
                                    <option data-countryCode="EC" value="593">Ecuador (+593)</option>
                                    <option data-countryCode="EG" value="20">Egypt (+20)</option>
                                    <option data-countryCode="SV" value="503">El Salvador (+503)</option>
                                    <option data-countryCode="GQ" value="240">Equatorial Guinea (+240)</option>
                                    <option data-countryCode="ER" value="291">Eritrea (+291)</option>
                                    <option data-countryCode="EE" value="372">Estonia (+372)</option>
                                    <option data-countryCode="ET" value="251">Ethiopia (+251)</option>
                                    <option data-countryCode="FK" value="500">Falkland Islands (+500)</option>
                                    <option data-countryCode="FO" value="298">Faroe Islands (+298)</option>
                                    <option data-countryCode="FJ" value="679">Fiji (+679)</option>
                                    <option data-countryCode="FI" value="358">Finland (+358)</option>
                                    <option data-countryCode="FR" value="33">France (+33)</option>
                                    <option data-countryCode="GF" value="594">French Guiana (+594)</option>
                                    <option data-countryCode="PF" value="689">French Polynesia (+689)</option>
                                    <option data-countryCode="GA" value="241">Gabon (+241)</option>
                                    <option data-countryCode="GM" value="220">Gambia (+220)</option>
                                    <option data-countryCode="GE" value="7880">Georgia (+7880)</option>
                                    <option data-countryCode="DE" value="49">Germany (+49)</option>
                                    <option data-countryCode="GH" value="233">Ghana (+233)</option>
                                    <option data-countryCode="GI" value="350">Gibraltar (+350)</option>
                                    <option data-countryCode="GR" value="30">Greece (+30)</option>
                                    <option data-countryCode="GL" value="299">Greenland (+299)</option>
                                    <option data-countryCode="GD" value="1473">Grenada (+1473)</option>
                                    <option data-countryCode="GP" value="590">Guadeloupe (+590)</option>
                                    <option data-countryCode="GU" value="671">Guam (+671)</option>
                                    <option data-countryCode="GT" value="502">Guatemala (+502)</option>
                                    <option data-countryCode="GN" value="224">Guinea (+224)</option>
                                    <option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
                                    <option data-countryCode="GY" value="592">Guyana (+592)</option>
                                    <option data-countryCode="HT" value="509">Haiti (+509)</option>
                                    <option data-countryCode="HN" value="504">Honduras (+504)</option>
                                    <option data-countryCode="HK" value="852">Hong Kong (+852)</option>
                                    <option data-countryCode="HU" value="36">Hungary (+36)</option>
                                    <option data-countryCode="IS" value="354">Iceland (+354)</option>
                                    <option data-countryCode="IN" value="91">India (+91)</option>
                                    <option data-countryCode="ID" value="62">Indonesia (+62)</option>
                                    <option data-countryCode="IR" value="98">Iran (+98)</option>
                                    <option data-countryCode="IQ" value="964">Iraq (+964)</option>
                                    <option data-countryCode="IE" value="353">Ireland (+353)</option>
                                    <option data-countryCode="IL" value="972">Israel (+972)</option>
                                    <option data-countryCode="IT" value="39">Italy (+39)</option>
                                    <option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
                                    <option data-countryCode="JP" value="81">Japan (+81)</option>
                                    <option data-countryCode="JO" value="962">Jordan (+962)</option>
                                    <option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
                                    <option data-countryCode="KE" value="254">Kenya (+254)</option>
                                    <option data-countryCode="KI" value="686">Kiribati (+686)</option>
                                    <option data-countryCode="KP" value="850">Korea North (+850)</option>
                                    <option data-countryCode="KR" value="82">Korea South (+82)</option>
                                    <option data-countryCode="KW" value="965">Kuwait (+965)</option>
                                    <option data-countryCode="KG" value="996">Kyrgyzstan (+996)</option>
                                    <option data-countryCode="LA" value="856">Laos (+856)</option>
                                    <option data-countryCode="LV" value="371">Latvia (+371)</option>
                                    <option data-countryCode="LB" value="961">Lebanon (+961)</option>
                                    <option data-countryCode="LS" value="266">Lesotho (+266)</option>
                                    <option data-countryCode="LR" value="231">Liberia (+231)</option>
                                    <option data-countryCode="LY" value="218">Libya (+218)</option>
                                    <option data-countryCode="LI" value="417">Liechtenstein (+417)</option>
                                    <option data-countryCode="LT" value="370">Lithuania (+370)</option>
                                    <option data-countryCode="LU" value="352">Luxembourg (+352)</option>
                                    <option data-countryCode="MO" value="853">Macao (+853)</option>
                                    <option data-countryCode="MK" value="389">Macedonia (+389)</option>
                                    <option data-countryCode="MG" value="261">Madagascar (+261)</option>
                                    <option data-countryCode="MW" value="265">Malawi (+265)</option>
                                    <option data-countryCode="MY" value="60">Malaysia (+60)</option>
                                    <option data-countryCode="MV" value="960">Maldives (+960)</option>
                                    <option data-countryCode="ML" value="223">Mali (+223)</option>
                                    <option data-countryCode="MT" value="356">Malta (+356)</option>
                                    <option data-countryCode="MH" value="692">Marshall Islands (+692)</option>
                                    <option data-countryCode="MQ" value="596">Martinique (+596)</option>
                                    <option data-countryCode="MR" value="222">Mauritania (+222)</option>
                                    <option data-countryCode="YT" value="269">Mayotte (+269)</option>
                                    <option data-countryCode="MX" value="52">Mexico (+52)</option>
                                    <option data-countryCode="FM" value="691">Micronesia (+691)</option>
                                    <option data-countryCode="MD" value="373">Moldova (+373)</option>
                                    <option data-countryCode="MC" value="377">Monaco (+377)</option>
                                    <option data-countryCode="MN" value="976">Mongolia (+976)</option>
                                    <option data-countryCode="MS" value="1664">Montserrat (+1664)</option>
                                    <option data-countryCode="MA" value="212">Morocco (+212)</option>
                                    <option data-countryCode="MZ" value="258">Mozambique (+258)</option>
                                    <option data-countryCode="MN" value="95">Myanmar (+95)</option>
                                    <option data-countryCode="NA" value="264">Namibia (+264)</option>
                                    <option data-countryCode="NR" value="674">Nauru (+674)</option>
                                    <option data-countryCode="NP" value="977">Nepal (+977)</option>
                                    <option data-countryCode="NL" value="31">Netherlands (+31)</option>
                                    <option data-countryCode="NC" value="687">New Caledonia (+687)</option>
                                    <option data-countryCode="NZ" value="64">New Zealand (+64)</option>
                                    <option data-countryCode="NI" value="505">Nicaragua (+505)</option>
                                    <option data-countryCode="NE" value="227">Niger (+227)</option>
                                    <option data-countryCode="NG" value="234">Nigeria (+234)</option>
                                    <option data-countryCode="NU" value="683">Niue (+683)</option>
                                    <option data-countryCode="NF" value="672">Norfolk Islands (+672)</option>
                                    <option data-countryCode="NP" value="670">Northern Marianas (+670)</option>
                                    <option data-countryCode="NO" value="47">Norway (+47)</option>
                                    <option data-countryCode="OM" value="968">Oman (+968)</option>
                                    <option data-countryCode="PW" value="680">Palau (+680)</option>
                                    <option data-countryCode="PA" value="507">Panama (+507)</option>
                                    <option data-countryCode="PG" value="675">Papua New Guinea (+675)</option>
                                    <option data-countryCode="PY" value="595">Paraguay (+595)</option>
                                    <option data-countryCode="PE" value="51">Peru (+51)</option>
                                    <option data-countryCode="PH" value="63">Philippines (+63)</option>
                                    <option data-countryCode="PL" value="48">Poland (+48)</option>
                                    <option data-countryCode="PT" value="351">Portugal (+351)</option>
                                    <option data-countryCode="PR" value="1787">Puerto Rico (+1787)</option>
                                    <option data-countryCode="QA" value="974">Qatar (+974)</option>
                                    <option data-countryCode="RE" value="262">Reunion (+262)</option>
                                    <option data-countryCode="RO" value="40">Romania (+40)</option>
                                    <option data-countryCode="RU" value="7">Russia (+7)</option>
                                    <option data-countryCode="RW" value="250">Rwanda (+250)</option>
                                    <option data-countryCode="SM" value="378">San Marino (+378)</option>
                                    <option data-countryCode="ST" value="239">Sao Tome & Principe (+239)</option>
                                    <option data-countryCode="SA" value="966">Saudi Arabia (+966)</option>
                                    <option data-countryCode="SN" value="221">Senegal (+221)</option>
                                    <option data-countryCode="CS" value="381">Serbia (+381)</option>
                                    <option data-countryCode="SC" value="248">Seychelles (+248)</option>
                                    <option data-countryCode="SL" value="232">Sierra Leone (+232)</option>
                                    <option data-countryCode="SG" value="65">Singapore (+65)</option>
                                    <option data-countryCode="SK" value="421">Slovak Republic (+421)</option>
                                    <option data-countryCode="SI" value="386">Slovenia (+386)</option>
                                    <option data-countryCode="SB" value="677">Solomon Islands (+677)</option>
                                    <option data-countryCode="SO" value="252">Somalia (+252)</option>
                                    <option data-countryCode="ZA" value="27">South Africa (+27)</option>
                                    <option data-countryCode="ES" value="34">Spain (+34)</option>
                                    <option data-countryCode="LK" value="94">Sri Lanka (+94)</option>
                                    <option data-countryCode="SH" value="290">St. Helena (+290)</option>
                                    <option data-countryCode="KN" value="1869">St. Kitts (+1869)</option>
                                    <option data-countryCode="SC" value="1758">St. Lucia (+1758)</option>
                                    <option data-countryCode="SD" value="249">Sudan (+249)</option>
                                    <option data-countryCode="SR" value="597">Suriname (+597)</option>
                                    <option data-countryCode="SZ" value="268">Swaziland (+268)</option>
                                    <option data-countryCode="SE" value="46">Sweden (+46)</option>
                                    <option data-countryCode="CH" value="41">Switzerland (+41)</option>
                                    <option data-countryCode="SI" value="963">Syria (+963)</option>
                                    <option data-countryCode="TW" value="886">Taiwan (+886)</option>
                                    <option data-countryCode="TJ" value="7">Tajikstan (+7)</option>
                                    <option data-countryCode="TH" value="66">Thailand (+66)</option>
                                    <option data-countryCode="TG" value="228">Togo (+228)</option>
                                    <option data-countryCode="TO" value="676">Tonga (+676)</option>
                                    <option data-countryCode="TT" value="1868">Trinidad & Tobago (+1868)</option>
                                    <option data-countryCode="TN" value="216">Tunisia (+216)</option>
                                    <option data-countryCode="TR" value="90">Turkey (+90)</option>
                                    <option data-countryCode="TM" value="7">Turkmenistan (+7)</option>
                                    <option data-countryCode="TM" value="993">Turkmenistan (+993)</option>
                                    <option data-countryCode="TC" value="1649">Turks & Caicos Islands (+1649)</option>
                                    <option data-countryCode="TV" value="688">Tuvalu (+688)</option>
                                    <option data-countryCode="UG" value="256">Uganda (+256)</option>
                                    <option data-countryCode="GB" value="44">UK (+44)</option>
                                    <option data-countryCode="UA" value="380">Ukraine (+380)</option>
                                    <option data-countryCode="AE" value="971">United Arab Emirates (+971)</option>
                                    <option data-countryCode="UY" value="598">Uruguay (+598)</option>
                                    <option data-countryCode="US" value="1">USA (+1)</option>
                                    <option data-countryCode="UZ" value="7">Uzbekistan (+7)</option>
                                    <option data-countryCode="VU" value="678">Vanuatu (+678)</option>
                                    <option data-countryCode="VA" value="379">Vatican City (+379)</option>
                                    <option data-countryCode="VE" value="58">Venezuela (+58)</option>
                                    <option data-countryCode="VN" value="84">Vietnam (+84)</option>
                                    <option data-countryCode="VG" value="84">Virgin Islands - British (+1284)</option>
                                    <option data-countryCode="VI" value="84">Virgin Islands - US (+1340)</option>
                                    <option data-countryCode="WF" value="681">Wallis & Futuna (+681)</option>
                                    <option data-countryCode="YE" value="969">Yemen (North)(+969)</option>
                                    <option data-countryCode="YE" value="967">Yemen (South)(+967)</option>
                                    <option data-countryCode="ZM" value="260">Zambia (+260)</option>
                                    <option data-countryCode="ZW" value="263">Zimbabwe (+263)</option>
                                </select>
                            </div>
                        </div>

                        <div className='pass'>
                            <label > <span className='start'>*</span> Organization Name</label>
                        </div>
                        <div className='pass-input'>
                            <input type="text" placeholder='Enter your name' name='organization' value={state.organization} onChange={change} />
                        </div>
                        {!orname ? <p style={{ color: "red", fontSize: "12px" }}>{ornamerror}</p> : null}

                        <div className='pass'>
                            <label > <span className='start'>*</span> Job Title</label>
                        </div>


                        <select className="select-state" placeholder="Pick a state..." name='title' value={state.title} onChange={change}>
                            <option value="">Selecte the job title</option>
                            <option value="AL">Analyst</option>
                            <option value="AK">Automation architech</option>
                            <option value="AZ">CEO</option>
                            <option value="AR">CTO</option>
                            <option value="CA">Consoltant</option>
                            <option value="CO">Director</option>
                            <option value="CT">DevOps Enginners</option>
                            <option value="DE">Engineer manager</option>
                            <option value="DC">Manager</option>
                            <option value="FL">QA Engineer</option>
                            <option value="GA">QA Lead</option>
                            <option value="HI">Service Provider</option>
                            <option value="ID">Softer Engineer</option>
                            <option value="IL">VP</option>
                            <option value="IN">Other</option>
                        </select>
                        {!jobname ? <p style={{ color: "red", fontSize: "12px" }}>{jobnamerror}</p> : null}

                        <div className='pass'>
                            <label > <span className='start'>*</span> Licence Type</label>
                        </div>


                        <select className="select-state" placeholder="Pick a state...">
                            <option value="">Cloud_Basic</option>
                            <option value="AL">Cloud_Profesonal</option>
                            <option value="AK">Automation architech</option>

                        </select>

                        <div className='pass'>
                            <label > <span className='start'>*</span> Licence Plain</label>
                        </div>


                        <select className="select-state" placeholder="Pick a state...">
                            <option value="">All</option>
                            <option value="AL">Web service</option>
                            <option value="AK">Web</option>
                            <option value="AK">Mobile</option>
                            <option value="AK">Web and Mobile</option>

                        </select>
                        <p className='word mt-4'>
                            <label >By Clicking created a account,I agree that I have and accepted the</label>
                            <br />
                            <span className='text-primary'>Term of use & Privacy Policy</span>
                        </p>


                        <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={recaptcha} />



                        <div className='btn'>

                            <button type='submit' className=' w-full flex  justify-center py-2 px-4 text-white btn outline-none  last  '>Sign in</button>
                        </div>


                    </form>



                </div>
            </div>


        </div>
    )
}


export default Signup