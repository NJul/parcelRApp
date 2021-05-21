// import Header, { myText as mt, myText2 } from './headers.js';
import Header from './headers.js';
import p from './par';

const app = document.getElementById('app');

const myText = 'My text in this file';

// app.appendChild(h1);
const h1 = Header(myText);
// app.appendChild(Header());
app.appendChild(h1);
app.appendChild(Header('Second Header'));

app.appendChild(p);
