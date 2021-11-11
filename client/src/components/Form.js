import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const Form = ({ query, setQuery, data, setData }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const apiCall = () => {
    if (query) {
      fetch(`/api/${query}`)
        .then((res) => res.json())
        .then((data) => setData(data.results))
        // .then(((data) => console.log(data.results)))
        .catch((err) => console.log(err.message));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    apiCall();
    if(location.pathname === '/') {
      navigate('/search');
      return;
    }
  }

  const handleClick = () => {
    if (query) {
      setQuery(query);
      console.log(query);
    }
  }

  const handleQuery = (e) => {
    setQuery(e.target.value);
  }


  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="form__input">Search for podcasts</label>
        <input onChange={handleQuery}
          value={query} type="text"
          className="form__input"
          id="form__input"
          placeholder="Search by keyword...">
        </input>
        <button type="submit"
          onClick={handleClick}
          className="form__button--submit">Find podcasts</button>
      </form>
    </div>
  )

}

export default Form;
