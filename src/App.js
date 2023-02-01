import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./profil/Profile.jsx";
import Container from "./profil/Container";

function App() {
 const data = [
   {
     fullName: "Horchani Wided",
     bio: "Licence appliqué en informatique de gestion",
     profession: "Web Devoloper",
   },
 ];
 const HandleName =() =>{
  alert ("Horchani Wided");
 }
  return (
    <div className="App">
      <Profile catgs={data} HandleName={HandleName} />
      <Container />
    </div>
  );
}

export default App;
