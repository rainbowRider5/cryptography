import React, {Component} from 'react';
import Homophonic from './Homophonic'


class Task extends Component {
    constructor(){
        super();
        this.saveFile = this.saveFile.bind(this);
    }

    saveFile(decyphered,cyphered){
        var fileContents =             
        "Text:" + this.props.inputText +
        //"\nCryptogram:" + this.props.inputCryptogram +
        //"\nCipherType:" + this.props.cipherType +
        "\nCoded message:" + cyphered +
        "\nDecoded message for validity check:" + decyphered;
        var filename = "output.txt";
        var filetype = "text/plain";

        var a = document.createElement("a");
        var dataURI = "data:" + filetype +
            ";base64," + btoa(fileContents);
        a.href = dataURI;
        a['download'] = filename;
        var e = document.createEvent("MouseEvents");
        // Use of deprecated function to satisfy TypeScript.
        e.initMouseEvent("click", true, false,
            document.defaultView, 0, 0, 0, 0, 0,
            false, false, false, false, 0, null);
        a.dispatchEvent(e);
    }



    render(){
        let newTask = new Homophonic(this.props.inputText);
        let decyphered = newTask.decypher();
        let cyphered = newTask.cyphered;

        return(
        <div className="row">
            <div className="col-md-6 offset-md-3 task">
                <p>Text: {this.props.inputText}</p>
                {/* <p>Cryptogram: "{this.props.inputCryptogram}"</p> */}
                {/* <p>CipherType: {this.props.cipherType}</p> */}
                <p>Coded message: {cyphered}</p>
                <p>Decoded message for validity check: {decyphered}</p>
                <button onClick={() => this.saveFile(decyphered,cyphered)} className="btn btn-light">Save to File!</button>
                <hr></hr>
            </div>
        </div>
        );
    }
}

export default Task;