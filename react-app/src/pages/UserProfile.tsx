import { NavigationBar } from "../components/NavigationBar";
import { useParams } from "react-router-dom";
import './userprofile.css';
import userprofile from '../assets/userprofile.jpg';
import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";

interface IForm {
    email: string;
    phone1: string;
    phone2: string;
    fname: string;
    lname: string;
    total_exp: number;
    designition: string;
    pgDegree: string;
    ugDegree: string;
    pg_University: string;
    ug_University: string;
    ugPercentage: string;
    pgPercentage: string;
    skills1: string;
    skills2: string;
    skills3: string;
    Companies_worked_at: string;
    address: string;
    dob: string;
    city: string;
    state: string;
    zip: string;
    resume_id: string;
}


export const UserProfile = (props: { location: { state: IForm; }; }) => {

    let profile = props.location.state;

    const handleResume = async () => {
        console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&");
        console.log(profile.resume_id);
        axios.get(`http://127.0.0.1:5000/getData/` + profile.resume_id, {
            headers: {
                "Content-type": "application/pdf",
            },
            responseType: "blob",
        })
            .then(function (response) {
                console.log(response.data);
                const blobUrl = URL.createObjectURL(response.data);

                // Create a link element
                const link = document.createElement("a");

                // Set link's href to point to the Blob URL
                link.href = blobUrl;
                link.download = profile.resume_id;

                // Append link to the body
                document.body.appendChild(link);

                // Dispatch click event on the link
                // This is necessary as link.click() does not work on the latest firefox
                link.dispatchEvent(
                    new MouseEvent("click", {
                        bubbles: true,
                        cancelable: true,
                        view: window,
                    })
                );

                // Remove link from body
                document.body.removeChild(link);
            });
    }

    return (
        <>
            <NavigationBar />
            <div className="profile">
                <div className="page-content page-container" id="page-content">
                    <div className="padding">
                        <div className="row container d-flex justify-content-center">
                            <div className="row-xl-6 row-md-30">
                                <div className="card user-card-full">
                                    <div className="row m-l-0 m-r-0">
                                        <div className="row-sm-4 bg-c-lite-green user-profile">
                                            <div className="card-block text-center text-white">
                                                <div className="m-b-25"> <img src={userprofile} width="300" height="200" className="img-radius" alt="User-Profile-Image" /> </div>
                                            </div>
                                        </div>
                                        <div className="row pro">
                                            <div className="card-block">
                                                <h3 className="f-w-600 below-space profile-heading">{profile.fname}{' '}{profile.lname}</h3>
                                                <h5 className="f-w-600 below-space">{profile.email}</h5>
                                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Personal Information</h6>
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="m-b-10 f-w-600">Contact</p>
                                                        <h6 className="text-muted f-w-400">{profile.phone1}</h6>
                                                    </div>
                                                    <div className="col">
                                                        <p className="m-b-10 f-w-600">Address</p>
                                                        <h6 className="text-muted f-w-400">{profile.address}{','}{profile.city}{','}{profile.state}{'-'}{profile.zip}</h6>
                                                    </div>
                                                    <br />
                                                    <div className="col">
                                                        <p className="m-b-10 f-w-600">Date of Birth</p>
                                                        <h6 className="text-muted f-w-400">{profile.dob}</h6>
                                                    </div>
                                                </div>
                                                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Educational Details</h6>
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="m-b-10 f-w-600">Degree</p>
                                                        <h6 className="text-muted f-w-400 below-space">{profile.ugDegree}</h6>
                                                    </div>
                                                    <div className="col">
                                                        <p className="m-b-10 f-w-600">college</p>
                                                        <h6 className="text-muted f-w-400 below-space">{profile.ug_University}</h6>
                                                    </div>
                                                    <div className="col">
                                                        <p className="m-b-10 f-w-600">%</p>
                                                        <h6 className="text-muted f-w-400 below-space">{profile.ugPercentage}</h6>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="m-b-10 f-w-600">Degree</p>
                                                        <h6 className="text-muted f-w-400 below-space">{profile.pgDegree}</h6>
                                                    </div>
                                                    <div className="col">
                                                        <p className="m-b-10 f-w-600">college</p>
                                                        <h6 className="text-muted f-w-400 below-space">{profile.pg_University}</h6>
                                                    </div>
                                                    <div className="col">
                                                        <p className="m-b-10 f-w-600">%</p>
                                                        <h6 className="text-muted f-w-400 below-space">{profile.pgPercentage}</h6>
                                                    </div>
                                                </div>
                                                <br />
                                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Skills</h6>
                                                <div className="row">
                                                    <div className="col">
                                                        <h6 className="text-muted f-w-400">{profile.skills1}</h6>
                                                    </div>
                                                    <div className="col">
                                                        <h6 className="text-muted f-w-400 ">{profile.skills2}</h6>
                                                    </div>
                                                    <div className="col">
                                                        <h6 className="text-muted f-w-400">{profile.skills3}</h6>
                                                    </div>
                                                </div>

                                                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Work History</h6>
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="m-b-10 f-w-600">Company</p>
                                                        <h6 className="text-muted f-w-400">{profile.Companies_worked_at}</h6>
                                                    </div>
                                                    <div className="col">
                                                        <p className="m-b-10 f-w-600">Designation</p>
                                                        <h6 className="text-muted f-w-400">{profile.designition}</h6>
                                                    </div>
                                                    <div className="col">
                                                        <p className="m-b-10 f-w-600">Experience</p>
                                                        <h6 className="text-muted f-w-400">{profile.total_exp} yrs</h6>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <Button
                                                            variant="dark align-self-end"
                                                            onClick={handleResume}
                                                        >
                                                            Download Resume
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}