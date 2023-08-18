import React, { useEffect, useState } from 'react';
import GiveReviews from '../GiveReviews';
import Popup from 'reactjs-popup';
import './Reviews.css';
import { useNavigate } from 'react-router-dom';

const Reviews = () => {
  const [reviewData, setReviewData] = useState([
    {serialNumber: 1}
  ]);

  const reportData = [
    {
      serialNumber: 1,
      doctorName: 'Dr. Denis Raj',
      doctorSpeciality: 'Dentist',
    //   charges: '$100',
      reportUrl: 'https://example.com/report1',
    },
    {
      serialNumber: 2,
      doctorName: 'Dr. Emily Clark',
      doctorSpeciality: 'Gynecologist',
    //   charges: '$80',
      reportUrl: 'https://example.com/report2',
    },
    // Add more report data objects as needed
  ];

  const handleGiveReview = (serialNumber) => {
    setReviewData((prevReviewData) => ({
      ...prevReviewData,
      [serialNumber]: ''
    }));
  };

  const handleReviewSubmit = (serialNumber, review) => {
    setReviewData((prevReviewData) => ({
      ...prevReviewData,
      [serialNumber]: review
    }));
  };
  const navigate = useNavigate();
  useEffect(() => {
      const authtoken = sessionStorage.getItem("auth-token");
      if (!authtoken) {
          navigate("/login");
      }
  }, [])
  return (
    <div style={{ marginTop: '10%' }} className="reviews-container">
      <h1>Reviews</h1>
      <table className="report-table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            {/* <th>Charges</th> */}
            <th>Give Review</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((report) => (
            <tr key={report.serialNumber}>
              <td>{report.serialNumber}</td>
              <td>{report.doctorName}</td>
              <td>{report.doctorSpeciality}</td>
              {/* <td>{report.charges}</td> */}
              {console.log("--------", reviewData, report.serialNumber)}
              <td>
                {!reviewData[report.serialNumber] ? (
                  <Popup
                    trigger={
                      <button
                        className="give-review-button"
                        // onClick={() => handleGiveReview(report.serialNumber)}
                      >
                        Give Review
                      </button>
                    }
                    modal
                    nested
                  >
                    <GiveReviews
                      serialNumber={report.serialNumber}
                      onReviewSubmit={handleReviewSubmit}
                      review={reviewData[report.serialNumber]} // Pass the review data
                    />
                  </Popup>
                ) : (
                  <button className="give-review-button" disabled>
                    Give Review
                  </button>
                )}
              </td>
              <td>
                {reviewData[report.serialNumber] && (
                  <div className="review-given">
                    <p>{reviewData[report.serialNumber]}</p>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reviews;
