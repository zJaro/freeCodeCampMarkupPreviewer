import DOMPurify from 'dompurify';
import { marked } from 'marked';

import '../App.css'

marked.setOptions({
  gfm: true,
  breaks: true, // Optional: enables carriage return support
});

function Preview({text}){

    return(
        <div>
        <h3>Preview</h3>
        <div id="preview" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked.parse(text))}}></div>
        </div>

    )
}


export default Preview