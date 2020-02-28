import React from 'react';


export default function LightBulbs(props) {
    
    const classString = props.on ? "ON" : "OFF"

    const colorString = props.on ? "green" : "red"

    return <>
        <span style={{color: colorString}}>{classString}</span>

    <style jsx>
        {`
            .container {
              background-size: cover;
              background: rsgb(226,226,226); /* Old browsers */
              background: -moz-linear-gradient(top,  rgba(226,226,226,1) 0%, rgba(219,219,219,1) 50%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%); /* FF3.6+ */
              background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(226,226,226,1)), color-stop(50%,rgba(219,219,219,1)), color-stop(51%,rgba(209,209,209,1)), color-stop(100%,rgba(254,254,254,1))); /* Chrome,Safari4+ */
              background: -webkit-linear-gradient(top,  rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* Chrome10+,Safari5.1+ */
              background: -o-linear-gradient(top,  rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* Opera 11.10+ */
              background: -ms-linear-gradient(top,  rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* IE10+ */
              background: linear-gradient(to bottom,  rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* W3C */
              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe',GradientType=0 ); /* IE6-9 */
            }
            
            .led-box {
              height: 30px;
              width: 25%;
              float: left;
            }
            
            .led-box p {
              font-size: 12px;
              margin: 1em;
            }
            
            .led-red {
              width: 24px;
              height: 24px;
              background-color: #F00;
              border-radius: 50%;
              box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 12px;
              -webkit-animation: blinkRed 0.5s infinite;
              -moz-animation: blinkRed 0.5s infinite;
              -ms-animation: blinkRed 0.5s infinite;
              -o-animation: blinkRed 0.5s infinite;
              animation: blinkRed 0.5s infinite;
            }
            
            @-webkit-keyframes blinkRed {
                from { background-color: #F00; }
                50% { background-color: #A00; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 0;}
                to { background-color: #F00; }
            }
            @-moz-keyframes blinkRed {
                from { background-color: #F00; }
                50% { background-color: #A00; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 0;}
                to { background-color: #F00; }
            }
            @-ms-keyframes blinkRed {
                from { background-color: #F00; }
                50% { background-color: #A00; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 0;}
                to { background-color: #F00; }
            }
            @-o-keyframes blinkRed {
                from { background-color: #F00; }
                50% { background-color: #A00; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 0;}
                to { background-color: #F00; }
            }
            @keyframes blinkRed {
                from { background-color: #F00; }
                50% { background-color: #A00; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 0;}
                to { background-color: #F00; }
            }
            
            .led-yellow {
              margin: 0 auto;
              width: 24px;
              height: 24px;
              background-color: #FF0;
              border-radius: 50%;
              box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 12px;
              -webkit-animation: blinkYellow 1s infinite;
              -moz-animation: blinkYellow 1s infinite;
              -ms-animation: blinkYellow 1s infinite;
              -o-animation: blinkYellow 1s infinite;
              animation: blinkYellow 1s infinite;
            }
            
            @-webkit-keyframes blinkYellow {
                from { background-color: #FF0; }
                50% { background-color: #AA0; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 0; }
                to { background-color: #FF0; }
            }
            @-moz-keyframes blinkYellow {
                from { background-color: #FF0; }
                50% { background-color: #AA0; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 0; }
                to { background-color: #FF0; }
            }
            @-ms-keyframes blinkYellow {
                from { background-color: #FF0; }
                50% { background-color: #AA0; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 0; }
                to { background-color: #FF0; }
            }
            @-o-keyframes blinkYellow {
                from { background-color: #FF0; }
                50% { background-color: #AA0; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 0; }
                to { background-color: #FF0; }
            }
            @keyframes blinkYellow {
                from { background-color: #FF0; }
                50% { background-color: #AA0; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 0; }
                to { background-color: #FF0; }
            }
            
            .led-green {
              width: 24px;
              height: 24px;
              background-color: #ABFF00;
              border-radius: 50%;
              box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px, #89FF00 0 2px 12px;
            }
            
            .led-blue {
              margin: 0 auto;
              width: 24px;
              height: 24px;
              background-color: #24E0FF;
              border-radius: 50%;
              box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #006 0 -1px 9px, #3F8CFF 0 2px 14px;
            }
        `}
    </style>
    </>

}