import DOMPurify from 'dompurify';
import { marked } from 'marked';

import '../App.css'

function Preview({text}){

    return(
        <div>
        <h3>Preview</h3>
        <div id="preview" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked.parse(text))}}></div>
        </div>

    )
}


export default Preview