// src/main/components/Main.js

import React from 'react';
import '../../App.css';

export default function Main() {
    return (
        <div className="main-container">
            <div className="main-content">
                <h1 className="main-title">
                    본인이 직접 고민하며<br />
                    결과물을 만들어가는 Web_Study
                </h1>
                <button className="main-button">Let's Go!</button>
            </div>
            <div className="background-shapes"></div> {/* 배경 장식 */}
        </div>
    );
}

//74line
