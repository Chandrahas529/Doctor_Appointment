import Doctorslist from "./doctorslist";
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Appointments.css'
import { useState } from "react";
function Appoinments() {
    const location = useLocation();
    const dataReceived = location.state || {id: 1};
    var n = 1;
    if(dataReceived != ""){
        n = dataReceived.id;
    }
    else{
        n = 1;
    }
    const [selecteddoctor,setSelectedDoctor] = useState(n);
    return (
        <div className="appoint-ctn">
            <Leftlist selectdoc={setSelectedDoctor}/>
            <Rightlist ids={selecteddoctor}/>
        </div>
    )
}

function Leftlist({selectdoc}) {
    const [search, setSearch] = useState('');
    const lister = Doctorslist.map(doc =>
        <div key={doc.id} className="appoint-card">
            <div className="profile-ctn">
                <img className="profile-pic" src={doc.src} />
            </div>
            <div className="small-bio">
                <div className="d-name">{doc.name}</div>
                <div>Specialist - {doc.speciallistof}</div>
                <button onClick={()=>{selectdoc(doc.id)}} className="appo">Make an appoinment</button>
            </div>
        </div>
    )
    const [list,setList] = useState(lister);
    useEffect(() => {
        if (search === '') {
          // Show all doctors if the search term is empty
          setList(Doctorslist.map(doc => (
            <div key={doc.id} className="appoint-card">
              <div className="profile-ctn">
                <img className="profile-pic" src={doc.src} />
            </div>
              <div className="small-bio">
                <div className="d-name">{doc.name}</div>
                <div>Specialist - {doc.speciallistof}</div>
                <button onClick={() => { selectdoc(doc.id) }} className="appo">Make an appointment</button>
              </div>
            </div>
          )));
        } else {
          // Filter the list based on the search term
          const filtered = Doctorslist.filter(doc =>
            doc.name.toLowerCase().includes(search.toLowerCase()) ||
            doc.speciallistof.toLowerCase().includes(search.toLowerCase())
          ).map(doc => (
            <div key={doc.id} className="appoint-card">
              <div className="profile-ctn">
                <img className="profile-pic" src={doc.src} />
            </div>
              <div className="small-bio">
                <div className="d-name">{doc.name}</div>
                <div>Specialist - {doc.speciallistof}</div>
                <button onClick={() => { selectdoc(doc.id) }} className="appo">Make an appointment</button>
              </div>
            </div>
          ));
          setList(filtered);
        }
      },[search])
    return (
        <div className="left-ctn">
            <div className="searchctn"><input onChange={(e)=>{setSearch(e.target.value)}} className="search-input" type="text" placeholder="Search here..." /></div>
            <div className="leftlist">
                {list}
            </div>
        </div>
    );
}

function Rightlist(ids) {
    return (<div className="rightlist">
        <SelectedDoctor idc={ids.ids}/>
        <Selecttime />
    </div>)
}

function SelectedDoctor({idc}) {
    var id = idc - 1;
    return (<div className="selected-doctor">
        <div className="selected-bio">
            <div className="selected-name">Make an appoinment with <b>{Doctorslist[id].name}</b></div>
            <div>Specialist - <b>{Doctorslist[id].speciallistof}</b></div>
            <div>experience - {Doctorslist[id].experience}</div>
            <div><i className="fa-solid fa-phone"></i> {Doctorslist[id].mobile}</div>
        </div>
        <div className="s-p-c"><img className="selected-pic" src={Doctorslist[id].src} /></div>
    </div>);
}

function Selecttime() {
    const [date, setDate] = useState(new Date);
    const [selectedDate, setSelectedDate] = useState(date);
    const [period, setPeriod] = useState('Select the time slot')

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const getNextDate = (currentDate, daysToAdd) => {
        let newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + daysToAdd);
        return newDate;
    };

    const handleDateSelection = (daysToAdd) => {
        const newSelectedDate = getNextDate(date, daysToAdd);
        setSelectedDate(newSelectedDate);
    };

    const formatDate = (date) => {
        return `${date.getDate()} ${daysOfWeek[date.getDay()]}, ${monthsOfYear[date.getMonth()]} ${date.getFullYear()}`;
    };

    return (
        <div>
            <div className="select-tctn">
                <div className="dates">
                    <div className="d-c">
                        <input
                            className="s-date"
                            type="radio"
                            name="date"
                            onClick={() => handleDateSelection(0)}
                            defaultChecked={true}
                        />
                        <span className="date">{date.getDate()}</span>
                    </div>
                    <div className="d-c">
                        <input
                            className="s-date"
                            type="radio"
                            name="date"
                            onClick={() => handleDateSelection(1)}
                        />
                        <span className="date">{getNextDate(date, 1).getDate()}</span>
                    </div>
                    <div className="d-c">
                        <input
                            className="s-date"
                            type="radio"
                            name="date"
                            onClick={() => handleDateSelection(2)}
                        />
                        <span className="date">{getNextDate(date, 2).getDate()}</span>
                    </div>
                </div>
                <div className="day">{formatDate(selectedDate)}</div>
            </div>
            <div className="s-ctn">
                <div className="border-bot">
                    <Boxes />
                    <Morning timer={setPeriod}/>
                    <Afternoon timer={setPeriod}/>
                    <Evening timer={setPeriod}/>
                </div>
                <PatientForm timer={period}/>
            </div>
        </div>
    );
}


function Boxes() {
    return (
        <div>
            <h3>Select the time slot</h3>
            <div className="boxes">
                <span className="booked">Not available</span>
                <span className="bookedbyyou">Booked by you</span>
                <span className="duration">Available</span>
                <span className="tobeselect">Selected</span>
            </div>
        </div>
    )
}

function Morning({timer}) {
    const Mschedule = [
        { id: 1, isBooked: true, duration: "9:00-9:15", isBookedByYou: false },
        { id: 2, isBooked: true, duration: "9:15-9:30", isBookedByYou: false },
        { id: 3, isBooked: true, duration: "9:30-9:45", isBookedByYou: false },
        { id: 4, isBooked: false, duration: "9:45-10:00", isBookedByYou: false },
        { id: 5, isBooked: true, duration: "10:00-10:15", isBookedByYou: false },
        { id: 6, isBooked: true, duration: "10:15-10:30", isBookedByYou: true },
        { id: 7, isBooked: false, duration: "10:30-10:45", isBookedByYou: false },
        { id: 8, isBooked: true, duration: "10:45-11:00", isBookedByYou: false },
        { id: 9, isBooked: false, duration: "11:00-11:15", isBookedByYou: false },
        { id: 10, isBooked: true, duration: "11:15-11:30", isBookedByYou: false },
        { id: 11, isBooked: false, duration: "11:30-11:45", isBookedByYou: false },
        { id: 12, isBooked: false, duration: "11:45-12:00", isBookedByYou: false }
    ]
    return (
        <div>
            <h3>Morning Slot</h3>
            <div className="timing">
                {Mschedule.map((dur) => {
                    let bookedby;
                    if (dur.isBooked && dur.isBookedByYou) {
                        bookedby = "bookedbyyou";
                    } else if (dur.isBooked) {
                        bookedby = "booked";
                    } else {
                        bookedby = "duration";
                    }

                    return (
                        <div key={dur.id}>
                            <div className="abs">
                                <input
                                onClick={()=>{timer(dur.duration)}}
                                    disabled={dur.isBooked ? true : false}
                                    className="hidden"
                                    name="duration"
                                    type="radio"
                                />
                                <span className={bookedby}>{dur.duration}</span>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    )
}

function Afternoon({timer}) {
    const Aschedule = [
        { id: 1, isBooked: false, duration: "1:00-1:15", isBookedByYou: false },
        { id: 2, isBooked: false, duration: "1:15-1:30", isBookedByYou: false },
        { id: 3, isBooked: false, duration: "1:30-1:45", isBookedByYou: false },
        { id: 4, isBooked: true, duration: "1:45-2:00", isBookedByYou: false },
        { id: 5, isBooked: false, duration: "2:00-2:15", isBookedByYou: false },
        { id: 6, isBooked: false, duration: "2:15-2:30", isBookedByYou: false },
        { id: 7, isBooked: true, duration: "2:30-2:45", isBookedByYou: false },
        { id: 8, isBooked: false, duration: "2:45-3:00", isBookedByYou: false },
        { id: 9, isBooked: false, duration: "3:00-3:15", isBookedByYou: false },
        { id: 10, isBooked: true, duration: "3:15-3:30", isBookedByYou: false },
        { id: 11, isBooked: true, duration: "3:30-3:45", isBookedByYou: false },
        { id: 12, isBooked: false, duration: "3:45-4:00", isBookedByYou: false }
    ]

    return (
        <div>
            <h3>Afternoon Slot</h3>
            <div className="timing">
                {
                    Aschedule.map(dur =>
                        <div key={dur.id}>
                            <div className="abs"><input onClick={()=>{timer(dur.duration)}} disabled={dur.isBooked ? true : false} className="hidden" name="duration" type="radio" /><span className={dur.isBooked ? "booked" : "duration"}>{dur.duration}</span></div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

function Evening({timer}) {
    const Eschedule = [
        { id: 1, isBooked: true, duration: "6:00-6:15", isBookedByYou: false },
        { id: 2, isBooked: false, duration: "6:15-6:30", isBookedByYou: false },
        { id: 3, isBooked: false, duration: "6:30-6:45", isBookedByYou: false },
        { id: 4, isBooked: true, duration: "6:45-7:00", isBookedByYou: false },
        { id: 5, isBooked: false, duration: "7:00-7:15", isBookedByYou: false },
        { id: 6, isBooked: true, duration: "7:15-7:30", isBookedByYou: false },
        { id: 7, isBooked: false, duration: "7:30-7:45", isBookedByYou: false },
        { id: 8, isBooked: true, duration: "7:45-8:00", isBookedByYou: false },
        { id: 9, isBooked: false, duration: "8:00-8:15", isBookedByYou: false },
        { id: 10, isBooked: true, duration: "8:15-8:30", isBookedByYou: false },
        { id: 11, isBooked: false, duration: "8:30-8:45", isBookedByYou: false },
        { id: 12, isBooked: false, duration: "8:45-9:00", isBookedByYou: false }
    ]


    return (
        <div>
            <h3>Evening Slot</h3>
            <div className="timing">
                {
                    Eschedule.map(dur =>
                        <div key={dur.id}>
                            <div className="abs"><input onClick={()=>{timer(dur.duration)}} disabled={dur.isBooked ? true : false} className="hidden" name="duration" type="radio" /><span className={dur.isBooked ? "booked" : "duration"}>{dur.duration}</span></div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

function PatientForm({timer}) {
    return (<div className="form-ctn">
        <form className="form">
            <div><lable>Patient Name - </lable><input type="text" /></div>
            <div><lable>Patient Age - </lable><input type="text" /></div>
            <div><lable>Selected time Period - </lable><input style={{textAlign:"center"}} value={timer} disabled type="text" /></div>
            <div style={{display:"flex",alignItems:"center"}}><button disabled>Complete the Process</button></div>
        </form>
    </div>);
}

export default Appoinments;