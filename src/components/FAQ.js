import { Link } from 'react-router-dom';

const FAQ = ()=>{
    return (
      <div>
        <h1>FAQ</h1>
        <p>Here is the FAQ page.</p>
        <nav>
            <Link to="/">Home</Link>
        </nav>
      </div>
      
    );
  }


export default FAQ