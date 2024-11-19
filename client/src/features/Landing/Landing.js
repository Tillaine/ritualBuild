import logo from '../../rblogo.png';
import Button from '@mui/material/Button';
import '../../App.css';

function Landing({handlePageUpdate}) {
  return (
    <div className="Landing">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Breathe. Be Here. Begin
        </p>
        <Button onClick={() => {handlePageUpdate('search')}} color="#724f7b" variant="text">Ritual Generator</Button>

           

    </div>
  );
}

export default Landing;
