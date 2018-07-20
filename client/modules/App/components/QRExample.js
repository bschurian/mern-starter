import React, { Component } from 'react';
import ticket from '../../../static/imgs/ticket.png';
import qrcode from '../../../qrcode';
import QRCode from 'qrcode.react';

class QRExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'asdfqwer',
      textQr: <p>no not yet parsed</p>,
      qrText: 'not yet parsed'
    }
  }
  qrToString() {
    const that = this;
    fetch(ticket)
      .then(res => res.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onload = function () {
          qrcode.callback = function (res) {
            if (res instanceof Error) {
              alert('No QR code found. Please make sure the QR code is within the camera\'s frame and try again.');
            } else {
              that.setState({ qrText: res });
            }
          };
          qrcode.decode(reader.result);
        };
        reader.readAsDataURL(blob);
      });
  }
  stringToQR(s) {
    this.setState({ textQr: <QRCode value={s} /> });
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.qrToString(this.state.qrText)
            this.stringToQR(this.state.text)
          }}>
          transfrom
          </button>
          <br />
        {this.state.text}
        =>{this.state.textQr}
        ;
        <br />
        <br />
        <br />
        <img src={ticket} alt='QR-Representation of the ticket' className='qr-small' />
        =>{this.state.qrText}
      </div >
    );
  }
}

export default QRExample;
