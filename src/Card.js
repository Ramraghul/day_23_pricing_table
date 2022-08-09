import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faTimes } from '@fortawesome/free-solid-svg-icons'

function Card({cardData}) {
    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{cardData.Plan}</h5>
                    <h6 className="card-price text-center">${cardData.price}<span className="period">/month</span></h6>
                    <hr />
                    <ul className="fa-ul text-start">
                        {/* Normal method */}

                        {/* <li><span className="fa-li"><FontAwesomeIcon icon={faCheck}/></span>{cardData.features[0].title}</li>
                        <li><span className="fa-li"><FontAwesomeIcon icon={faCheck}/></span>{cardData.features[1].title}</li>
                        <li><span className="fa-li"><FontAwesomeIcon icon={faCheck}/></span>{cardData.features[2].title}</li>
                        <li><span className="fa-li"><FontAwesomeIcon icon={faCheck}/></span>{cardData.features[3].title}</li>
                        <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes}/></span>{cardData.features[4].title}</li>
                        <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes}/></span>{cardData.features[5].title}</li>
                        <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes}/></span>{cardData.features[6].title}</li>
                        <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes}/></span>{cardData.features[7].title}</li> */}

                        {/*Loop method*/}

                        {
                            cardData.features.map((item)=>{
                                return <li className={!item.isEnable ? "text-muted" : ""}><span className="fa-li">{item.isEnable ? <FontAwesomeIcon icon={faCheck}/> : <FontAwesomeIcon icon={faTimes}/>}</span><span>{item.isBold ? <strong>{item.title}</strong> : item.title }</span></li>
                            })
                        }

                    </ul>
                    <div className="d-grid">
                        <a href="#" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;