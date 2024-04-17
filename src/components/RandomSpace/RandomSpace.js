import { useNavigate } from 'react-router-dom';
import './RandomSpace.css';
import data from '../../sfpopos-data.json';

function RandomSpace() {
  const navigate = useNavigate();

  return (
    <div className="RandomSpace">
      <button
        onClick={(e) => {
          const id = Math.floor(Math.random() * data.length);
          navigate(`/details/${id}`);
        }}
      >
        Random Space
      </button>
    </div>
  );
}

export default RandomSpace;
