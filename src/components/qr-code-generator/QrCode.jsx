import React from 'react'
import { useState } from 'react'
import QRCode from 'react-qr-code'
import './styles.css'

const QrCode = () => {


    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerateQrCode() {
        setQrCode(input)
    }

    return (
        <div className="qr-container">
            <h1 className="qr-title">QR Code Generator</h1>

            <div className="input-container">
                <input
                    className="qr-input"
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    name="qr-code"
                    placeholder="Enter your value here"
                />
                <button
                    className="qr-button"
                    disabled={input && input.trim() !== '' ? false : true}
                    onClick={handleGenerateQrCode}
                >
                    Generate
                </button>
            </div>

            <div className="qr-code-display">
                <QRCode
                    id="qr-code-value"
                    value={qrCode}
                    size={400}
                    bgColor="#fff"
                />
            </div>
        </div>
    )
}

export default QrCode
