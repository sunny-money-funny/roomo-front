import React, { useState, useEffect } from "react";
import './Review.css';

const Review = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  const togglePanel = () => {
    setIsExpanded(!isExpanded);
  };

  const addReview = () => {
      const newReview = document.getElementById("review-input").value;

  // 현재 리뷰 목록에 새로운 리뷰 추가
  const updatedReviews = [...reviews, newReview];
  setReviews(updatedReviews);

  // 로컬 스토리지에 저장
  localStorage.setItem('reviews', JSON.stringify(updatedReviews));
  document.getElementById("review-input").value = ''; // 입력창 초기화
};

// 컴포넌트가 마운트될 때 로컬 스토리지에서 기존 리뷰를 불러오는 함수
useEffect(() => {
  const savedReviews = localStorage.getItem('reviews');
  if (savedReviews) {
    setReviews(JSON.parse(savedReviews)); // 로컬 스토리지에서 불러온 리뷰를 상태에 저장
  }
}, []); // 빈 배열로 두어 컴포넌트 마운트 시 한 번만 실행


  return (
    <div className="frame">
      <div className="container">
        {/* Rectangle 3: 리뷰 목록 패널 */}
        <div className={`rectangle-3 ${isExpanded ? "expanded" : ""}`}>
          <div className="review-list-title">회원 리뷰</div>
          {isExpanded && (
            <div className="review-rectangles">
              {reviews.map((review, index) => (
                <div key={index} className="review-item">
                  {review}
                </div>
              ))}
            </div>
          )}
          <button className="toggle-button" onClick={togglePanel}>
            {isExpanded ? "닫기" : "열기"}
          </button>
        </div>

        {/* Rectangle 1: 리뷰 입력창 */}
        <div className="rectangle-1">
          <div className="review-title">리뷰를 작성해주세요 ^o^</div>
          <div className="review-form">
            <textarea 
            id="review-input"
            className="review-input"
            placeholder="리뷰를 입력하세요"
            rows="4"  // 기본적으로 보이는 줄 수 설정
            style={{ resize: "none" }}  // 사용자가 크기를 조절하지 못하게 설정
            />
            <button className="submit-button" onClick={addReview}>저장</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
