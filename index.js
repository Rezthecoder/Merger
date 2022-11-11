const express = require('express')
const path = require('path')
const multer = require('multer')
const {mergePdf} = require('./test')
const upload = multer({ dest: 'uploads/' })

const app = express()

app.use('/static',express.static('public'))
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
// debugger  
app.post('/merge', upload.array('pdfs', 2), async (req, res, next)=>{
  console.log(req.files);
  mergePdf(path.join(__dirname, req.files[0].path),path.join(__dirname, req.files[1].path))
  res.redirect("http://localhost:3000/static/merged.pdf");

})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})


