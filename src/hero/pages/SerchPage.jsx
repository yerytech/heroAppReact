import { useLocation, useNavigate } from "react-router";
import { useForm } from "../../hooks/useForm";
import queryString from 'query-string'
import { getheroByName } from "../helpers";
import { CondtionResult,HeroCard } from "../components";


export const SerchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const heroes = getheroByName(q);

  const {searchText,onInputChange} = useForm({
    searchText:q,
  });

  const onSearchSumit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`)
  }
    

  return (
    <>
      <div className="row">
        <h1>SerchPage</h1>
        <hr />

        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSumit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          
          <CondtionResult  q={q} heroes={heroes}/>


          {  
            heroes.map(
              hero =>
                <HeroCard key={hero.id}{...hero} />
               )

          }
        </div>
      </div>
    </>
  );
}
