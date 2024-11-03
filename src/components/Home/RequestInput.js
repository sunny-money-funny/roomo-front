import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Link 임포트
import RequestOutput from './RequestOutput'; // RequestOutput을 임포트
import './RequestInput.css';

const RequestInput = () => {
    const [input, setInput] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [results, setResults] = useState([]); // 결과 배열 상태

    const handleSubmit = (event) => {
        event.preventDefault(); // 기본 이벤트 방지
        if (input.trim()) {
            // 여기에 서버 요청 코드 추가
            // 서버에서 받아온 결과를 setResults에 설정
            const mockResults = [
                "결과 1: 기타를 연주할 수 있는 공간 1",
                "결과 2: 기타를 연주할 수 있는 공간 2",
                "결과 3: 기타를 연주할 수 있는 공간 3",
                "결과 4: 기타를 연주할 수 있는 공간 4"
            ];
            setResults(mockResults); // 예시 결과로 설정
            setIsModalOpen(true); // 모달 열기
            setInput(''); // 입력 초기화
        }
    };

    const closeModal = () => {
        setIsModalOpen(false); // 모달 닫기
    };

    return (
        <div className="rectangle4">
            <Link to="/" className="logoImage" />
            <div className="prompt-bar1">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="we'll find the perfect place for you!"
                />
                <button onClick={handleSubmit}>enter</button>
            </div>

            {/* RequestOutput 모달 컴포넌트 */}
            <RequestOutput isOpen={isModalOpen} closeModal={closeModal} results={results} />
        </div>
    );
};

export default RequestInput;