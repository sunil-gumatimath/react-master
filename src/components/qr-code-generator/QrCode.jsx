import React from 'react'
import { useState } from 'react'
import QRCode from 'react-qr-code'

const QrCode = () => {


    const [qrCode,setQrCode] = useState('');

  return (
    <div>
        <h1>Qr Code Generator </h1>
        
        <div>
            <input type="text" name='qr-code' placeholder='Enter your value here'/>
            <button>Generate</button>
        </div>

        <div>
            <QRCode
            id='qr-code-value'
            value=''
            />
        </div>
    </div>
  )
}

export default QrCode