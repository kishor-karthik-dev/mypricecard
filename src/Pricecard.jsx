import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
function Pricecard ({item}) {
  return (
    <div className="col-lg-4 col-md-8"> 
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">{item.plan}</h5>
        <h6 className="card-price text-center">${item.price}<span className="period">/month</span></h6>
        <hr />
          <ul className="fa-ul">
            {item.feature.map((detail) => {
              return (
                <li className={detail.value ? '' : 'text-muted'}>
                  <span className="fa-li">
                    {detail.value ? (
                      <FontAwesomeIcon icon={faCheck} />
                    ) : (
                      <FontAwesomeIcon icon={faXmark} />
                    )}
                  </span>
                  {detail.key}
                </li>
              );
            })}
          </ul>
          <div className="d-grid">
            <button className="btn btn-primary text-uppercase">Button</button>
          </div>
      </div>
    </div>
  </div>  );
}
export default Pricecard ;