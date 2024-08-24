import PropTypes from 'prop-types'


export const CondtionResult = ({q,heroes}) => {
 return ( <> {
     q === "" ? (
       <div className="alert alert-primary">Serch hero</div>
     ) : (
       heroes.length === 0 && (
         <div className="alert alert-danger">Sorry no hero with {q}</div>
       )
     )
    }
</>

)
}

CondtionResult.propTypes = {
    q: PropTypes.string.isRequired,
    heroes:PropTypes.array.isRequired
}
