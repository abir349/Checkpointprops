import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullName from './profile/Component/FullName';
import Bio from './profile/Component/Bio';
import Profession from './profile/Component/Profession';
import Navbarr from './profile/Component/Navbarr';

function App() {
  const person = [
    {FullName: "Abir Nasfi", Email: "abirnasfi7@gmail.com", Number:95314789 , age:23 , bio: "loream loerem ",Profession:"student", img1:"love.jpg",img:"nn.jpg" },
    
  ]

 
const handlealert=(x)=>alert(x);
  return (
    <div className="App">
      <Navbarr/>
     <FullName person = {person} />
     <Bio person ={person}/>
     <Profession person={person} handlealert={handlealert}/>
     <div style={{backgroundColor:"beige	" }}>
    </div>
    </div>
  );
}

export default App;
