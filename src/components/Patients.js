import React from "react";
import {ArrowLeftOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";
import './Patients.css';

const Patients = () => {
    return(
        <div>
            <div className='nav bar sticky-top'>
                <div className='nav-item bar2 col-9'>DrNG | <h style={{fontWeight:'bold'}}>PATIENTS</h></div>
            </div>
            <form className="links" action="submit">
                <div className="d-flex">
                    <div className="offset-1 col-8" style={{fontWeight:'bold', fontSize:"20px"}}>
                    {/* clicking on new record or on the left arrow takes us back to the first page */}
                        <Link to="/" style={{textDecoration:'none', color:'black'}}>
                            <i>
                            <ArrowLeftOutlined/>
                            </i>  NEW RECORD
                        </Link>
                    </div>
                </div><br/><br/>
                <div className="offset-1" style={{fontWeight:'bold'}}>General Information</div><br/>
                <div className="d-flex">
                    <div className="offset-1 col-2" >Unique Code<br/>
                    <input type={'text'} placeholder='' style={{borderRadius:'7px'}} required/>
                    </div>
                    <div className="col-2">Name<br/>
                    <input type={'text'} placeholder='' style={{borderRadius:'7px'}} required/>
                    </div>
                    <div className="col-2">Sex<br/>
                    <select name="sex" id="sex" style={{borderRadius:'7px'}} required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    </div>
                    <div className="col-2">Phone<br/>
                    <input type={'tel'} placeholder='+237 679084545' style={{borderRadius:'7px'}} required/>
                    </div>
                    <div className="col-2">Email<br/>
                    <input type={'email'} placeholder='namesurname@host.com' style={{borderRadius:'7px'}} required/>
                    </div>
                </div>
                <div className="offset-1 col-10"><hr/></div>
                <div className="offset-1" style={{fontWeight:'bold'}}>Appointment Information</div><br/>
                <div className="d-flex">
                    <div className="offset-1 col-2">Appointment Date<br/>
                    <input type={'date'} placeholder="24/05/2022" style={{borderRadius:'7px'}} required/>
                    </div>
                    <div className="col-2">First Time<br/>
                    <select name="firsttime" id="firsttime" style={{width:'175px', borderRadius:'7px'}} required>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                    </div>
                    <div className="col-2">Request Date<br/>
                    <input type={'date'} style={{borderRadius:'7px'}} required/>
                    </div>
                    <div className="col-2">Appointment Status<br/>
                    <select name="status" id="status" style={{width:'200px', borderRadius:'7px'}}>
                        <option value="pending">Pending</option>
                        <option value="missed">Missed</option>
                        <option value="rescheduled">Rescheduled</option>
                    </select>
                    </div>
                    <div className="col-2">Appointment Time<br/>
                    <input type={'time'} style={{borderRadius:'7px'}} required/>
                    </div>
                </div><br/>
                <div className="offset-1" style={{fontWeight:'bold'}}>Address Information</div>
                <div className="d-flex">
                    <div className="offset-1 col-3">Address 1<br/>
                    <input type={'text'} style={{borderRadius:'7px'}} required/>
                    </div>
                    <div className="col-3">Address 2<br/>
                    <input type={'text'} style={{borderRadius:'7px'}}/>
                    </div>
                    <div className="col-3">City<br/>
                    <input type={'text'} style={{borderRadius:'7px'}} required/>
                    </div>
                </div><br/>
                <div className="offset-1" style={{fontWeight:'bold'}}>Notes</div>
                <div className="d-flex">
                    <div className="offset-1 col-4">Before Appointment<br/>
                    <input type={'text'} style={{borderRadius:'7px', width:'70%', height:'100px'}} required/>
                    </div>
                    <div className="col-4">After Appointment<br/>
                    <input type={'text'} style={{borderRadius:'7px', width:'70%', height:'100px'}} required/>
                    </div>
                </div>
                <div className="col-lg-12 col-sm-6" style={{height:'200px'}}>
                    <input type='submit' value={'Save'} className="offset-11 btn-danger" id="Sub" style={{marginTop:'120px', width:'80px', borderRadius:'7px'}}/>
                </div>
            </form>
            <div className='d-flex' style={{justifyContent:'center', color:'white', paddingTop:'10px', paddingBottom:'10px', height:'50px', backgroundColor:'rgb(148, 120, 239)'}}>
                All rights reserved&copy;2022
            </div>
                
        </div>
    );
};

export default Patients;