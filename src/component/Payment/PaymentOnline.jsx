import React from 'react';
import PhoneNumberQRCode from './PhoneNumberQRCode'; 
// import QRCode from 'qrcode.react';
import './payment.css';

const PaymentOnline = () => {
  const phoneNumber = '+91 9893785834';
  const paytmNumber = '+91 74156-64456';
  const phonePeNumber = '+91 74156-64456';
  const googlePayNumber = '+91 74156-64456';

  // Bank information
  const bankName = 'ICICI BANK';
  const ifscCode = 'ICIC000094';
  const accountHolderName = 'Mr. Pranay Gupta';
  const accountNumber = '09450500070';
  const accountType = 'Current Account';

  return (
    <div className="payment_container">
    

      <h1 className='mt-5 mb-2 font-bold text-center'>Payment Online</h1>
        <hr className='w-11 mb-3 bg-pink-400 h-1 m-auto'></hr>
      
              
      <div className="whitebox bg-gray-100 w-[96%] m-auto text-black rounded p-6">
        <div className="payment-numbers-container">
          <div className="payment-number flex mb-4">
            <h3 className='font-bold'>Paytm Number:</h3>
            <p className='ml-10'>{paytmNumber}</p>
          </div>
          <div className="payment-number flex mb-4">
            <h3 className='font-bold'>Phone Pe Number:</h3>
            <p className='ml-5'>{phonePeNumber}</p>
          </div>
          <div className="payment-number flex mb-4">
            <h3 className='font-bold'>Google Pay Number:</h3>
            <p className='ml-3'>{googlePayNumber}</p>
          </div>
        </div>

        <div className="bank-account-info-container mt-6 text-left">
          <h2 className='font-bold text-xl mb-3'>Bank Account Information</h2>
          <ul>
            <li ><strong>Bank Name:</strong><span className='m-16'> {bankName}</span></li>
            <li><strong>IFSC code:</strong><span className='m-16'> {ifscCode}</span></li>
            <li><strong>Account Holder Name:</strong> <span className='m-5'>{accountHolderName}</span></li>
            <li><strong>Account Number:</strong> <span className='m-10'>{accountNumber}</span></li>
            <li><strong>Account Type:</strong> <span className='m-10'>{accountType}</span></li>
          </ul>
        </div>

        <div className='mt-5 m-auto'>
          <PhoneNumberQRCode phoneNumber={phoneNumber}/>
        </div>
      </div>
    </div>
  );
};

export default PaymentOnline;