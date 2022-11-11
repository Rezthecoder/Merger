const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergePdf = async (p1,p2)=> {
  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2);  //merge all pages. parameter is the path to file and filename.
//   await merger.add('1.pdf');  //merge all pages. parameter is the path to file and filename.
//   await merger.add('2.pdf');  //merge all pages. parameter is the path to file and filename.
  await merger.save('public/merged.pdf'); //   under given name and reset the internal document
  
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
}

module.exports = {mergePdf}