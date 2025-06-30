import '../App.css';
import  {useState} from 'react';

function Editor({text, onTextChange}){
    
    
    return(
        <div>
            <h3>Editor</h3>
            <textarea value={text} onChange={onTextChange} id="editor"></textarea>
        </div>  
    )
}


export default Editor