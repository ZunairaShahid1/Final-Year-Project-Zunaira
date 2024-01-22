import React, { useState } from 'react'
import './style.css'
import MenteesDataGrid from './MenteesDataGrid';
const AssignMentees = ({selectedSemester, setSelectedSemester, selectedMentor, setSelectedMentor}) => {
    function generateRandomId() {
        return Math.floor(1000 + Math.random() * 9000);
    }
    const mentorList = [
        {
            id: 1,
            name: "Mentor 1",
            studentsAssigned: 20
        },
        {
            id: 2,
            name: "Mentor 2",
            studentsAssigned: 20
        },
        {
            id: 3,
            name: "Mentor 3",
            studentsAssigned: 20
        },
        {
            id: 4,
            name: "Mentor 4",
            studentsAssigned: 20
        },
        {
            id: 5,
            name: "Mentor 5",
            studentsAssigned: 20
        },
        {
            id: 6,
            name: "Mentor 6",
            studentsAssigned: 20
        },
        {
            id: 7,
            name: "Mentor 7",
            studentsAssigned: 20
        },
        {
            id: 8,
            name: "Mentor 8",
            studentsAssigned: 20
        },
        {
            id: 9,
            name: "Mentor 9",
            studentsAssigned: 20
        },
        {
            id: 10,
            name: "Mentor 10",
            studentsAssigned: 20
        }
    ];

    const [studentList, setStudentList] = useState([
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Mentee 1",
            Department: "FC"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Mentee 2",
            Department: "SE"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Mentee 3",
            Department: "FC"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Mentee 4",
            Department: "FC"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Mentee 5",
            Department: "FC"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Mentee 6",
            Department: "FC"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Mentee 7",
            Department: "FC"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Mentee 8",
            Department: "FC"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Mentee 9",
            Department: "FC"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Mentee 10",
            Department: "FC"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Mentee 11",
            Department: "FC"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Mentee 12",
            Department: "FC"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Mentee 13",
            Department: "FC"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Mentee 14",
            Department: "FC"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Mentee 15",
            Department: "FC"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Mentee 16",
            Department: "FC"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Mentee 17",
            Department: "FC"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Mentee 18",
            Department: "FC"
        },
        {
            Name: "Mentee 19",
            id: generateRandomId(),
            sapid: generateRandomId(),
            Department: "FC"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Student 20",
            Department: "xyz"
        }
    ]);

    return (
        <>
            {
                selectedSemester ? (<div className="mentor-list-container">
                    {
                        selectedMentor ? (<MenteesDataGrid data={studentList} setStudentList={setStudentList} selectedMentor={selectedMentor} setSelectedMentor={setSelectedMentor} />
                        ) : (<>
                            <h1 style={{ textAlign: "center", fontSize: "22px" }}>Mentor's List</h1>
                            <hr style={{ width: "100px", margin: "4px auto 30px auto", padding: "1px" }} />
                            <div>
                                <h1 style={{ textAlign: "center", fontSize: "18px", marginBottom: "10px" }}>Semester: {selectedSemester}</h1>
                            </div>
                            <div className="mentor-list">
                                {mentorList.map((mentor, index) => (
                                    <div onClick={() => { setSelectedMentor(mentor) }} style={{ cursor: "pointer",border: "2px solid #15375c", transition: "transform 300ms ease-in-out 0s" }} key={index} className="mentor-card hover:scale-110">
                                        <h2>Name: {mentor.name}</h2>
                                        <p>Students Assigned: {mentor.studentsAssigned}</p>
                                    </div>
                                ))}
                            </div>
                        </>)
                    }
                </div>) : (<>
                    <div className='flex flex-col justify-center items-center' style={{ height: '50vh' }}>
                        <h1 style={{ fontWeight: 'bold', fontSize: '23px', textAlign: 'center', lineHeight: '3.5rem' }}>Please Select the Desired Department and Semester.</h1>
                    </div>
                </>)
            }
        </>
    )
}

export default AssignMentees