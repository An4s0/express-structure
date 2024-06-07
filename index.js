//require('./src/models/connect')
const express = require("express"),
    bodyParser = require("body-parser"),
    path = require("path"),
    appConfig = require("./src/configs/app.config"),
    app = express();

app.use(require("./src/middlewares/index"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.use('/', require("./src/routes/index"))
app.use('/api/static/assets', express.static(path.join(__dirname, 'src/views/static')))

app.listen(appConfig.port, () => {
    console.log(`Server is running on port ${appConfig.port}`);
});