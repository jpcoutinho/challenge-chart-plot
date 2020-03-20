import React from 'react'

import AceEditor from 'react-ace'
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-intelie";

import './styles.css'

class CodeArea extends React.Component {

    constructor(props) {
        super(props);

        this.editorRef = React.createRef();
    }

    componentDidMount() {
        this.editorRef.current.style.height = "280px";
        this.default = this.props.defaultValue;
    }

    componentWillUnmount() {
    }

    onMouseDown = (event) => {
        document.body.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('mouseup', this.onMouseUp);
    
        this.prevY = parseInt(this.editorRef.current.style.height);; 
        
        const posY = this.prevY;
        console.log("down: ", posY);
    }

    onMouseMove = (event) => {
        let posY = event.clientY;
        let newY = this.prevY + (posY - this.prevY);

        var h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

        console.log(h);

        if (newY > (h-500)) {
            newY = h-500;
        }
       
        this.editorRef.current.style.height = newY + "px";
    }

    onMouseUp = () => {
        document.body.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('mouseup', this.onMouseUp);

        console.log("up");
    }

    onChange = (input) => {
        this.props.getInput(input);
    }
  
    /*https://github.com/securingsincity/react-ace/blob/master/docs/Ace.md*/
    render() {
        return (
            <div className="editor-wrapper" ref={this.editorRef}>
                <AceEditor
                    mode="javascript"
                    theme="intelie"
                    placeholder="Input your data here"
                    width="100%"
                    height="100%"
                    onChange={this.onChange}
                    value = {this.props.value}
                    defaultValue={this.props.defaultValue}
                    showPrintMargin = {false}
                    wrapEnabled     = {true}
                />
                <div className="resizer" onMouseDown= {this.onMouseDown}></div>
            </div>
        );
    }

}

export default CodeArea;