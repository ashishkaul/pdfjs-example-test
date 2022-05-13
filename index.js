const pdfjs = require('pdfjs-dist/legacy/build/pdf');

const pdfPath = './invoice.pdf';
const document = pdfjs.getDocument({url: pdfPath});
const promiseArray = [];

document.promise
.then((pdf) => {
    console.log(pdf.numPages);
}).catch( err => {
    console.error(err);
})