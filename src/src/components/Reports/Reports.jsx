import React, {useEffect} from 'react';
import './Report.css';
import { useNavigate } from 'react-router-dom';

const Reports = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const authtoken = sessionStorage.getItem("auth-token");
        if (!authtoken) {
            navigate("/login");
        }
    }, []);
  
    
    const reportData = [
        {
        serialNumber: 1,
        doctorName: 'Dr. Denis Raj',
        doctorSpeciality: 'Dentist',
        charges: '$1250',
        reportUrl: 'https://previews.123rf.com/images/rawpixel/rawpixel1707/rawpixel170751985/82353993-medical-patient-report-form-record-history-information-word.jpg',
        },
        {
        serialNumber: 2,
        doctorName: 'Dr. Emily Clark',
        doctorSpeciality: 'Gynecologist',
        charges: '$800',
        reportUrl: 'https://previews.123rf.com/images/rawpixel/rawpixel1707/rawpixel170751985/82353993-medical-patient-report-form-record-history-information-word.jpg',
        },
        
    ];

    return (
        <div className="reports-container">
        <h1>Reports</h1>
        <table className="report-table">
            <thead>
            <tr>
                <th>Serial Number</th>
                <th>Doctor Name</th>
                <th>Doctor Speciality</th>
                <th>Charges</th>
                <th>View Report</th>
                <th>Download Report</th>
            </tr>
            </thead>
            <tbody>
            {reportData.map((report, index) => (
                <tr key={index}>
                <td>{report.serialNumber}</td>
                <td>{report.doctorName}</td>
                <td>{report.doctorSpeciality}</td>
                <td>{report.charges}</td>
                <td>
                <a target='_blank' href='https://previews.123rf.com/images/rawpixel/rawpixel1707/rawpixel170751985/82353993-medical-patient-report-form-record-history-information-word.jpg' className="report-link" rel="noreferrer">

                    {/* <a target='_blank' href={report.reportUrl} download className="report-link" rel="noreferrer"> */}
                        View Report
                    </a>
                </td>
                <td>
                <a target='_blank' href='Patient_Information.pdf' download className="report-link" rel="noreferrer">

                    {/* <a target='_blank' href={report.reportUrl} download className="report-link" rel="noreferrer"> */}
                        Download Report
                    </a>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default Reports;
