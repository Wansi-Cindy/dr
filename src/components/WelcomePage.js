/** @format */

import React from "react";
import { Button } from "antd";
import "./WelcomePage.css";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <div className="nav bar sticky-top">
        <div className="nav-item bar1 col-6">DrNG | PATIENTS</div>
      </div>
      <div className="img">
        <div
          className="d-flex"
          style={{
            justifyContent: "flex-end",
            color: "white",
            fontSize: "40px",
            paddingTop: "150px",
            paddingBottom: "100px",
            opacity: "0.8",
          }}
        >
          FIRST DO NO HARM
          <br />I WILL ABSTAIN FROM ALL INTENTIONAL WRONG-DOING AND HARM
        </div>
      </div>
      <div className="links">
        <div>
          <div className="d-flex diva">
            <div className="offset-1 col-1 apt">Appointments</div>
            <div className="offset-6 col-1 srch">
              <input
                style={{
                  marginLeft: "70px",
                  width: "200px",
                  borderRadius: "9px",
                }}
                type={"search"}
                placeholder="search patient's info"
              />
            </div>
          </div>
        </div>
        <br />
        <div className="d-flex boxes">
          <div className="miss col-3 offset-1 word">
            <div>Missed</div>
            <div style={{ fontSize: "35px", paddingTop: "10px", color: "red" }}>
              03
            </div>
          </div>
          <div className="reschedule col-3 offset-1 word">
            <div>Rescheduled</div>
            <div
              style={{ fontSize: "35px", paddingTop: "10px", color: "yellow" }}
            >
              04
            </div>
          </div>
          <div className="pend col-3 offset-1 word">
            <div>Passed</div>
            <div
              style={{ fontSize: "35px", paddingTop: "10px", color: "green" }}
            >
              08
            </div>
          </div>
        </div><br/><br/>
        <div className="d-flex sorts">
          <div className="offset-1 col-2 dropdown">
            <select name="name" id="name">
              <option selected>Name</option>
              <option value="Fatima Halima">Fatima Halima</option>
              <option value="Sirri Mokoko">Sirri Mokoko</option>
              <option value="Cyrielle Atangana">Cyrielle Atangana</option>
              <option value="Jennifer Ekong">Jennifer Ekong</option>
              <option value="Ateba Ateba Majolie">Ateba Ateba Majolie</option>
              <option value="Ngwa Juliette">Ngwa Juliette</option>
              <option value="Eposi Hanah">Eposi Hanah</option>
              <option value="Ndingue Saloma">Ndingue Saloma</option>
              <option value="Laura Tsinga">Laura Tsinga</option>
              <option value="Clarisse Ngonso">Clarisse Ngonso</option>
              <option value="Edith Kimmy">Edith Kimmy</option>
              <option value="Maribelle Ekwa">Maribelle Ekwa</option>
              <option value="Youssouf Roukayatou">Youssouf Roukayatou</option>
              <option value="Etondie Sonia">Etondie Sonia</option>
              <option value="Yelene Njoh">Yelene Njoh</option>
            </select>
          </div>
          <div className="col-1 dropdown">
            <select name="code" id="code">
              <option selected>Code</option>
              <option value="A0140322">A0140322</option>
              <option value="A1050521">A1050521</option>
              <option value="A2121222">A2121222</option>
              <option value="A3111122">A3111122</option>
              <option value="A4100921">A4100921</option>
              <option value="A5030722">A5030722</option>
              <option value="A6230423">A6230423</option>
              <option value="A7190520">A7190520</option>
              <option value="A8290321">A8290321</option>
              <option value="A9311220">A9311220</option>
              <option value="A0250922">A0250922</option>
              <option value="A1060821">A1060821</option>
              <option value="A2091021">A2091021</option>
              <option value="A3140620">A3140620</option>
              <option value="A4260123">A4260123</option>
            </select>
          </div>
          <div className="col-1 dropdown">
            <select name="age" id="age">
              <option selected>Age</option>
              <option value="22">22</option>
              <option value="25">25</option>
              <option value="33">33</option>
              <option value="55">55</option>
              <option value="43">43</option>
              <option value="17">17</option>
              <option value="38">38</option>
              <option value="19">19</option>
              <option value="16">16</option>
              <option value="23">23</option>
              <option value="60">60</option>
              <option value="15">15</option>
              <option value="27">27</option>
              <option value="26">26</option>
              <option value="39">39</option>
            </select>
          </div>
          <div className="col-1 dropdown">
            <select name="phone" id="phone">
              <option selected>Phone</option>
              <option value=" 699887755"> 699887755</option>
              <option value=" 679548261"> 679548261</option>
              <option value=" 694586231"> 694586231</option>
              <option value=" 698562341"> 698562341</option>
              <option value=" 697542100"> 697542100</option>
              <option value=" 698754210"> 698754210</option>
              <option value=" 698532641"> 698532641</option>
              <option value=" 655423120"> 655423120</option>
              <option value=" 653269874"> 653269874</option>
              <option value=" 652143986"> 652143986</option>
              <option value=" 679856243"> 679856243</option>
              <option value=" 698564231"> 698564231</option>
              <option value=" 698574236"> 698574236</option>
              <option value=" 675924356"> 675924356</option>
              <option value=" 673325614"> 673325614</option>
            </select>
          </div>

          <div className="offset-1 col-2 dropdown">
            <select name="email" id="email">
              <option selected>Email</option>
              <option value="fatimahalima@gmail.com">
                fatimahalima@gmail.com
              </option>
              <option value="sirrimokoko@gmail.com">
                sirrimokoko@gmail.com
              </option>
              <option value="cyrielleatangana@yahoo.fr">
                cyrielleatangana@yahoo.fr
              </option>
              <option value="jenniferekong@yahoo.com">
                jenniferekong@yahoo.com
              </option>
              <option value="atebateba@gmail.com">atebateba@gmail.com</option>
              <option value="ngwajuliette@yahoo.fr">
                ngwajuliette@yahoo.fr
              </option>
              <option value="eposihanah@gmail.com">eposihanah@gmail.com</option>
              <option value="ndinguesaloma@gmail.com">
                ndinguesaloma@gmail.com
              </option>
              <option value="lauratsinga@gmail.com">
                lauratsinga@gmail.com
              </option>
              <option value="clarissengonso@yahoo.com">
                clarissengonso@yahoo.com
              </option>
              <option value="edithkimmy@yahoo.com">edithkimmy@yahoo.com</option>
              <option value="maribellekwa@gmail.com">
                maribellekwa@gmail.com
              </option>
              <option value="yusufroukayatou@gmail.com">
                yusufroukayatou@gmail.com
              </option>
              <option value="etondiesonia@yahoo.fr">
                etondiesonia@yahoo.fr
              </option>
              <option value="yelenenjoh@gmail.com">yelenenjoh@gmail.com</option>
            </select>
          </div>
          <div className="col-1 dropdown">
            <select name="address" id="address">
              <option selected>Address</option>
              <option value="Bonapriso">Bonapriso</option>
              <option value="Bali">Bali</option>
              <option value="Bonanjo">Bonanjo</option>
              <option value="Bonaloka">Bonaloka</option>
              <option value="Deido">Deido</option>
              <option value="Nyalla">Nyalla</option>
              <option value="Bonaberi">Bonaberi</option>
              <option value="New-Bell">New-Bell</option>
              <option value="Logpom">Logpom</option>
              <option value="Cite Sic">Cite Sic</option>
              <option value="Makepe">Makepe</option>
              <option value="Bonamoussadi">Bonamoussadi</option>
              <option value="Denver">Denver</option>
              <option value="Ndgopassi">Ndgopassi</option>
              <option value="Bilongue">Bilongue</option>
            </select>
          </div>
          <div className="offset-1 col-1 dropdown">
            <select name="status" id="status">
              <option selected>Status</option>
              <option value="pending">Pending</option>
              <option value="missed">Missed</option>
              <option value="rescheduled">Rescheduled</option>
            </select>
          </div>
        </div>
        <div className="row col-12 offset-1" id="table">
          <div className="d-flex tabl">
            <div className=" col-2">Fatima Halima</div>
            <div className="col-1">A0140322</div>
            <div className="col-1">22</div>
            <div className="col-1">699887755</div>
            <div className="offset-1 col-2">fatimahalima@gmail.com</div>
            <div className="col-1">Bonapriso</div>
            <div className="offset-1 col-1" id="rescheduled">
              Rescheduled
            </div>
          </div>
          <div className="d-flex tabl">
            <div className="col-2">Sirri Mokoko</div>
            <div className="col-1">A1050521</div>
            <div className="col-1">25</div>
            <div className="col-1"> 679548261</div>
            <div className="offset-1 col-2">sirrimokoko@gmail.com</div>
            <div className="col-1">Bali</div>
            <div className="offset-1 col-1" id="missed">
              Missed
            </div>
          </div>
          <div className="d-flex tabl">
            <div className="col-2">Cyrielle Atangana</div>
            <div className="col-1">A2121222</div>
            <div className="col-1">33</div>
            <div className="col-1"> 694586231</div>
            <div className="offset-1 col-2">cyrielleatangana@yahoo.fr</div>
            <div className="col-1">Bonanjo</div>
            <div className="offset-1 col-1" id="rescheduled">
              Rescheduled
            </div>
          </div>
          <div className="d-flex tabl">
            <div className="col-2">Jennifer Ekong</div>
            <div className="col-1">A3111122</div>
            <div className="col-1">55</div>
            <div className="col-1"> 698562341</div>
            <div className="offset-1 col-2">jenniferekong@yahoo.com</div>
            <div className="col-1">Bonaloka</div>
            <div className="offset-1 col-1" id="passed">
              Passed
            </div>
          </div>
          <div className="d-flex tabl">
            <div className="col-2">Ateba Ateba Majolie</div>
            <div className="col-1">A4100921</div>
            <div className="col-1">43</div>
            <div className="col-1"> 697542100</div>
            <div className="offset-1 col-2">atebateba@gmail.com</div>
            <div className="col-1">Deido</div>
            <div className="offset-1 col-1" id="passed">
              Passed
            </div>
          </div>
          <div className="d-flex tabl">
            <div className="col-2">Ngwa Juliette</div>
            <div className="col-1">A5030722</div>
            <div className="col-1">17</div>
            <div className="col-1"> 698754210</div>
            <div className="offset-1 col-2">ngwajuliette@yahoo.fr</div>
            <div className="col-1">Nyalla</div>
            <div className="col-1 offset-1" id="rescheduled">
              Rescheduled
            </div>
          </div>
          <div className="d-flex tabl">
            <div className="col-2">Eposi Hanah</div>
            <div className="col-1">A6230423</div>
            <div className="col-1">38</div>
            <div className="col-1"> 698532641</div>
            <div className="offset-1 col-2">eposihanah@gmail.com</div>
            <div className="col-1">Bonaberi</div>
            <div className="offset-1 col-1" id="passed">
              Passed
            </div>
          </div>
          <div className="d-flex tabl">
            <div className="col-2">Ndingue Saloma</div>
            <div className="col-1">A7190520</div>
            <div className="col-1">19</div>
            <div className="col-1"> 655423120</div>
            <div className="offset-1 col-2">ndinguesaloma@gmail.com</div>
            <div className="col-1">New Bell</div>
            <div className="offset-1 col-1" id="passed">
              Passed
            </div>
          </div>
          <div className="d-flex tabl">
            <div className="col-2">Laura Tsinga</div>
            <div className="col-1">A8290321</div>
            <div className="col-1">16</div>
            <div className="col-1"> 653269874</div>
            <div className="offset-1 col-2">lauratsinga@gmail.com</div>
            <div className="col-1">Logpom</div>
            <div className="offset-1 col-1" id="passed">
              Passed
            </div>
          </div>
          <div className="d-flex tabl">
            <div className="col-2">Clarisse Ngonso</div>
            <div className="col-1">A9311220</div>
            <div className="col-1">23</div>
            <div className="col-1"> 652143986</div>
            <div className="offset-1 col-2">clarissengonso@yahoo.com</div>
            <div className="col-1">Cite Sic</div>
            <div className="offset-1 col-1" id="missed">
              Missed
            </div>
          </div>
          <div className="d-flex tabl">
            <div className="col-2">Edith Kimmy</div>
            <div className="col-1">A0250922</div>
            <div className="col-1">60</div>
            <div className="col-1"> 679856243</div>
            <div className="col-2 offset-1">edithkimmy@yahoo.com</div>
            <div className="col-1">Makepe</div>
            <div className="col-1 offset-1" id="passed">
              Passed
            </div>
          </div>
          <div className="d-flex tabl">
            <div className="col-2">Maribelle Ekwa</div>
            <div className="col-1">A1060821</div>
            <div className="col-1">15</div>
            <div className="col-1"> 698564231</div>
            <div className="offset-1 col-2">maribellekwa@gmail.com</div>
            <div className="col-1">Bonamoussadi</div>
            <div className="col-1 offset-1" id="missed">
              Missed
            </div>
          </div>
          <div className="d-flex tabl">
            <div className="col-2">Youssouf Roukayatou</div>
            <div className="col-1">A2091021</div>
            <div className="col-1">27</div>
            <div className="col-1"> 698574236</div>
            <div className="col-2 offset-1">yusufroukayatou@gmail.com</div>
            <div className="col-1">Denver</div>
            <div className="col-1 offset-1" id="passed">
              Passed
            </div>
          </div>
          <div className="d-flex tabl">
            <div className="col-2">Etondie Sonia</div>
            <div className="col-1">A3140620</div>
            <div className="col-1">26</div>
            <div className="col-1"> 675924356</div>
            <div className="col-2 offset-1">etondiesonia@yahoo.fr</div>
            <div className="col-1">Ndgopassi</div>
            <div className="col-1 offset-1" id="passed">
              Passed
            </div>
          </div>
          <div className="d-flex tabl">
            <div className="col-2">Yelene Njoh</div>
            <div className="col-1">A4260123</div>
            <div className="col-1">39</div>
            <div className="col-1"> 673325614</div>
            <div className="col-2 offset-1">yelenenjoh@gmail.com</div>
            <div className="col-1">Bilongue</div>
            <div className="col-1 offset-1" id="rescheduled">
              Rescheduled
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="offset-8 divy">
          {" "}
          Add new records by clicking on this button
          <Link className="link1" to="/Patients">
            <Button
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
                border: "none",
              }}
              className="btn-danger"
            >
              NEW RECORD
            </Button>
          </Link>
        </div>
      </div>
      <div
        className="d-flex"
        style={{
          justifyContent: "center",
          color: "white",
          paddingTop: "10px",
          paddingBottom: "10px",
          height: "50px",
          backgroundColor: "rgb(148, 120, 239)",
        }}
      >
        All rights reserved&copy;2022
      </div>
    </div>
  );
};

export default WelcomePage;
