import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs');

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { 
    title: "Home",
   })
})


app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about", { name: "Chanuka" });
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/", (req, res) => {
  res.render("index", { title: "Home", isHome: true });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About", isAbout: true });
});

app.get("/services", (req, res) => {
  res.render("services", { title: "Services", isServices: true });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact", isContact: true });
});



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})