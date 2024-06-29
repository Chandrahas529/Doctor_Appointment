import React from 'react';
import { Link, useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Details.css';
import src1 from '../images/doc1.jpeg';
import Doctorslist from './doctorslist';
import { useState } from 'react';
const lists = [
    { id: 1, categorie: "Neurology", No: 3 },
    { id: 2, categorie: "Opthalmology", No: 2 },
    { id: 3, categorie: "Nuclear Magnetic", No: 4 },
    { id: 4, categorie: "Surgical", No: 3 },
    { id: 5, categorie: "Cardiology", No: 1 },
    { id: 6, categorie: "X-ray", No: 5 },
    { id: 7, categorie: "Dental", No: 3 },
    { id: 8, categorie: "Traumatology", No: 2 }
]
export const Details = () => {
    const { setActive } = useOutletContext();
    return (
        <div>
            <CategoriList />
            <Doctors setActive={setActive} />
        </div>
    )
}

function CategoriList() {
    return (
        <div className='Categ-ctn'>
            {
                lists.map(list =>
                    <div key={list.id} className='cardCateg'>
                        <a className='alink' href={'#'+list.categorie}>
                        <span className='idno'>{list.id}</span>
                        <div className='batch'>Specialist</div>
                        <div className='categ-type'>{list.categorie}</div>
                        <div className='no-of-doc'>Number of doctors we have for this are {list.No}</div>
                        </a>
                    </div>
                )
            }
        </div>
    )
}
function Doctors({setActive}) {
    const navigate = useNavigate();
    function handleClick(id){
        setActive(3)
        const dataToSend = {
            id:id
        };
        navigate('/appointment', { state: dataToSend });
    }
    return (<>
    <div className='doctorlist'>
    {lists.map(lis => (
        <React.Fragment key={lis.id}>
            <div className='catelist' id={lis.categorie}>{lis.categorie}</div>
            <div className='listing'>
            {
                Doctorslist.map(doc => {
                    if (doc.speciallistof === lis.categorie) {
                        return (
                            <div className='doctor-card' key={doc.id}>
                                <div className='d-p-c'>
                                    <img className='doctor-profile' src={doc.src} alt="Doctor Profile" />
                                </div>
                                <div className='biodata'>
                                    <div className='doctor-name'>{doc.name} {doc.id}</div>
                                    <span className='doctor-call'><i className="fa-solid fa-phone"></i> {doc.mobile}</span>
                                    <div className='doctor-quali'><b>Qualification -</b> {doc.qualification}</div>
                                    <div className='doctor-experi'><b>Experience -</b> {doc.experience}</div>
                                    <div className='doctor-special'><b>Specialist -</b> {doc.speciallistof}</div>
                                    <div className='doctor-lines'>{doc.about}</div>
                                </div>
                                <div className='appoin-ctn'><button onClick={() => { handleClick(doc.id)}} className='appointment'>Make an appointment</button></div>
                            </div>
                        );
                    }
                    return null; // Return null if condition is not met to avoid undefined return
                })
            }
            </div>
        </React.Fragment>
    ))}
</div>

    </>)
}