import React from 'react';
import './RequestOutput.css';

const Modal = ({ isOpen, closeModal, results }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    if (!isOpen || results.length === 0) return null;

    // 이전 결과로 이동
    const nextResult = () => {
        if (currentIndex < results.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    // 다음 결과로 이동
    const prevResult = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    // 관련이미지 URL
    const imageUrl = './path/to/your/image.jpg';

    return (
        <div className="modal-overlay" onClick={closeModal}>
            {/* 모달 외부의 클릭 이벤트가 발생하지 않도록 함*/}
            <div className="modal-content" onClick={(e) => e.stopPropagation()}> 
                <span className="close" onClick={closeModal}>&times;</span>
                <h2>Requested Places</h2>

                {/* 관련 이미지 출력 */}
                <img src={imageUrl} alt="Requested Place" className="modal-image" />

                <p>{results[currentIndex]}</p> {/* 현재 결과 렌더링 */}
                <div className="navigation">
                    <button onClick={prevResult} disabled={currentIndex === 0}>←</button>
                    <button onClick={nextResult} disabled={currentIndex === results.length - 1}>→</button>
                </div>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    );
};

export default Modal;