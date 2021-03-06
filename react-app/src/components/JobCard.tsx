import axios from "axios";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";
import { EditJobPost } from "./EditJobPost";
import "./JobCard.css";

/*Structure for Job post */
interface IJob {
    jobId: string;
    jobRole: string;
    jobOffer: string;
    jobCtc: string;
    skills1: string;
    skills2: string;
    skills3: string;
    jobDes: string;
}


type TJob = {
    jobData: IJob;
    onDelete(role: string): void;
};

/* This component displays a particular jobs detail in a card */
export const JobCard = ({ jobData, onDelete }: TJob) => {
    const history = useHistory();

    const [show, setShow] = useState(false);

    {/* Function to close Modal */}
    const handleClose = () => {
        setShow(false);
    };

    {/* Function to delete a job role*/}
    const handleDeletion = async () => {    
        axios.get(`/getJobData/` + jobData.jobRole).then(function (response) {
            if (response.data == "Delete Sucessfully") {
                onDelete(jobData.jobRole);
            }
        });
    };

    {/* Function to edit a job role*/}
    const handleEdit = async () => {
        setShow(true);
    };
    return (
        <>
            <EditJobPost show={show} handleClose={handleClose} jobData={jobData} />

            <Card style={{ width: '18rem' }} className="shadow-lg rounded">
                <Card.Body>
                    <Card.Title className="card-job-role">{jobData.jobRole}</Card.Title>
                    <hr className="job-card-rule" />
                    <Card.Subtitle className="mb-3 text-muted card-job-font">{jobData.jobOffer}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted card-job-font">CTC: {jobData.jobCtc}{" LPA"}</Card.Subtitle>

                    <Card.Text className="mb-2">
                        <p id="job-skills">Skills Preferred:</p>
                        <ul className="card-ul">
                            <li>{jobData.skills1} </li>
                            <li> {jobData.skills2} </li>
                            <li> {jobData.skills3}</li>
                        </ul>
                    </Card.Text>

                    <div className="job-links-container">
                        <Card.Link className="job-card-link-1"> Edit
                        <i
                                className="fa fa-pencil-square-o job-icons-1"
                                aria-hidden="true"
                                onClick={() => handleEdit()}
                            ></i>
                        </Card.Link>

                        <Card.Link className="job-card-link-2"> Delete
                        <i
                                className="fa fa-trash job-icons-2"
                                aria-hidden="true"
                                onClick={() => handleDeletion()}
                            ></i>
                        </Card.Link>
                    </div>
                    
                </Card.Body>
            </Card>
        </>
    );
};
