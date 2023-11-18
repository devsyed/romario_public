import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import CryptoJS from 'crypto-js';

function IPGForm() {
  const [txndatetime, setTxnDatetime] = useState('');
  const [hashExtended, setHashExtended] = useState('');

  useEffect(() => {
    updateDatetime();
  }, []);

  const updateDatetime = () => {
    const timezone = 'Asia/Dubai';
    const formattedDatetime = moment().tz(timezone).format('YYYY:MM:DD-HH:mm:ss');
    setTxnDatetime(formattedDatetime);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    calculateHash();
    e.target.submit();
  };

  const calculateHash = () => {
    const sharedSecret = "2zuW4j)G3.";
    const paymentForm = document.getElementById('paymentForm');
    const paymentParameters = {};
    
    for (let i = 0; i < paymentForm.length; i++) {
      const input = paymentForm[i];
      if (input.type !== 'submit' && input.value) {
        paymentParameters[input.name] = input.value;
      }
    }
    var messageSignatureContent = [];
    const ignoreSignatureParameteres = ["hashExtended"];
    Object.keys(paymentParameters).filter(key => !ignoreSignatureParameteres.includes(key)).sort().forEach(function (key, index) {
        messageSignatureContent.push(paymentParameters[key]);
    });

    const messageSignature = CryptoJS.HmacSHA256(messageSignatureContent.join("|"), sharedSecret);
    const messageSignatureBase64 = CryptoJS.enc.Base64.stringify(messageSignature);
    console.log(messageSignatureBase64)
    setHashExtended(messageSignatureBase64);
  };

  return (
    <form onSubmit={handleFormSubmit} id="paymentForm" method="post" action="https://test.ipg-online.com/connect/gateway/processing">
        <input type="hidden" name="hash_algorithm" value="HMACSHA256" required />
        <input type="hidden" name="language" value="en_US" />
        <input type="hidden" name="hashExtended" value={hashExtended} required />

        <p></p>
        <label for="txntype">Transaction Type</label>
        <select name="txntype" id="txntype" required>
            <option value="sale">Sale</option>
            <option value="preauth">Pre-Authorization</option>
            <option value="postauth">Post-Authorization</option>
            <option value="void">Void</option>
        </select>

        <p></p>
        <label for="timezone">Timezone</label>
        <select name="timezone" required>
            <option value="Asia/Dubai">Asia/Dubai (GST/UTC+4)</option>
            <option value="Indian/Mauritius">Indian/Mauritius (MUT/UTC+4)</option>
            <option value="Europe/Berlin">Europe/Berlin(CET/UTC+1)</option>
        </select>

        <p></p>
        <label for="txndatetime">Transaction Date Time</label>
        <input type="text" name="txndatetime" value={txndatetime} readonly />

        <p></p>
        <label for="storename">Store ID</label>
        <input name="storename" id="storename" value="811676300198" required />

        <p></p>
        <label for="chargetotal">Transaction Total Amount</label>
        <input type="text" name="chargetotal" id="" value="13.00" required />

        <select name="currency" id="currency" required>
            <option value="784">AED (784)</option>
            <option value="480">MUR (480)</option>
            <option value="978">EUR (978)</option>
        </select>

        <p></p>
        <label for="paymentMethod">Payment Method</label>
        <select name="paymentMethod">
            <option value>-</option>
            <option value="M">MasterCard</option>
            <option value="V">Visa</option>
            <option value="applepay">Apple Pay</option>
        </select>

        <p></p>
        <label for="oid">Order ID</label>
        <input name="oid" id="oid" />

        <p></p>
        <label for="oid">IPG Transaction ID</label>
        <input name="ipgTransactionId" id="ipgTransactionId" />

        <p></p>
        <label for="checkoutoption">Checkout Options</label>
        <select name="checkoutoption" id="checkoutoption">
            <option value="combinedpage">Combined Page</option>
            <option value="classic">Classic</option>
            <option value="simpleform">Simple Form</option>
        </select>

        <p></p>
        <label for="authenticateTransaction">Authenticate Transaction:</label>
        <select name="authenticateTransaction">
            <option value="true">true</option>
            <option value="false">false</option>

        </select>

        <p></p>
        <label for="mobileMode">Mobile Mode</label>
        <select name="mobileMode">
            <option value="false">false</option>
            <option value="true">true</option>
        </select>

        <p></p>
        <label for="responseFailURL">Response Fail URL</label>
        <input name="responseFailURL" class="responseURL" id="responseFailURL"
               value="https://cybersource.somee.com/IPGDemo/FailureResponse" />

        <p></p>
        <label for="responseSuccessURL">Response Success URL</label>
        <input name="responseSuccessURL" class="responseURL" id="responseSuccessURL"
               value="https://cybersource.somee.com/IPGDemo/SuccessResponse" />

        <p></p>
        <label for="transactionNotificationURL">Transaction Notification URL</label>
        <input type="text" name="transactionNotificationURL" value="" />

    <p></p>
    <button type="submit" class="btn btn-primary">Pay Now</button>
</form>
  );
}

export default IPGForm;
