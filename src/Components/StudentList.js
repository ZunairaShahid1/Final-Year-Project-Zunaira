import React from 'react'
import './style.css'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const StudentDataItems = ({ setStudentData, mentorName, semester, setid , setmentor}) => {
    const StudentLists = [
        {
            id: 1,
            name: "Mentee 1",
        },
        {
            id: 2,
            name: "Mentee 2",
        },
        {
            id: 3,
            name: "Mentee 3",
        },
        {
            id: 4,
            name: "Mentee 4",
        },
        {
            id: 5,
            name: "Mentee 5",
        },
        {
            id: 6,
            name: "Mentee 6",
        },
        {
            id: 7,
            name: "Mentee 7",
        },
        {
            id: 8,
            name: "Mentee 8",
        },
        {
            id: 9,
            name: "Mentee 9",
        },
        {
            id: 10,
            name: "Mentee 10",
        },
        {
            id: 11,
            name: "Mentee 11",
        },
        {
            id: 12,
            name: "Mentee 12",
        },
        {
            id: 13,
            name: "Mentee 13",
        },
        {
            id: 14,
            name: "Mentee 14",
        },
        {
            id: 15,
            name: "Mentee 15",
        },
        {
            id: 16,
            name: "Mentee 16",
        }
    ];
    return (
        <div className="mentor-list-container">
            <>
                {
                    <>
                        <div style={{ position: "relative", marginLeft: "20px" }} className="centersss">
                            {
                                <div onClick={() => { setmentor(null) }} style={{ position: "absolute", top: 0, left: 10, cursor: 'pointer' }}>
                                    <ArrowLeftIcon style={{ color: "#000", fontWeight: "bold", fontSize: "25px" }} />
                                </div>
                            }
                        </div>
                        <h1 style={{ textAlign: "center", fontSize: "22px" }}>Mentees List</h1>
                        <hr style={{ width: "100px", margin: "4px auto 30px auto", padding: "1px" }} />
                        <div>
                            <h1 style={{ textAlign: "center", fontSize: "18px", marginBottom: "20px" }}>Semester: {semester}</h1>
                            <h1 style={{ textAlign: "center", fontSize: "18px", marginBottom: "20px" }}>Mentor Name: {mentorName.name}</h1>
                        </div>
                        <div className="mentor-list mx-4">
                            {StudentLists.map((student, index) => (
                                <div onClick={() => { setStudentData(student); setid(student.sapid) }} style={{ cursor: "pointer", width: "300px", border: "2px solid #15375c", transition: "transform 300ms ease-in-out 0s" }} key={index} className="mentor-card hover:scale-110">
                                    <h2 style={{color: "#15375c"}}>Name: {student.name}</h2>
                                    <p style={{color: "#15375c"}}>SAP ID: {student.sapid}</p>
                                </div>
                            ))}
                        </div>
                    </>
                }
            </>
        </div>
    )
}

export default StudentDataItems