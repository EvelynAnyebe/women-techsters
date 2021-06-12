import Button from './../components/button';
import {Link} from 'react-router-dom';

function FourOFour() {
  return (
    <div className="main">
      <div className="card">
        <h1>Oop! Kinda of lost?</h1>
        <p>Let's take you back to the right road</p>
        <Link to="/"><Button value="Go to home" btnClass="btn" /></Link>
        
      </div>
    </div>
  );
}

export default FourOFour;
