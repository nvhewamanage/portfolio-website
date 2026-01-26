import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();


app.use(express.static(path.join(__dirname, '../public')));

// View engine setup
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        title: "Home",
        name: "Chanuka"
    });
});

app.get("/", (req, res) =>{
    res.render("home",{title: "Home", name:"Chanuka"})
});

app.get("/about", (req, res) =>{
    res.render("about",{title: "About"})
});

app.get("/services", (req, res) =>{
    res.render("services",{title: "Services"})
});

app.get("/contact", (req, res) =>{
    res.render("contact",{title: "Contact"})
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
