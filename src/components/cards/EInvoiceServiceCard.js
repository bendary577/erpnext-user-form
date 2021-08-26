import React from 'react';
import '../../assets/css/subscription_plan_card.css';


const EInvoiceServiceCard = (props) => {
    return (
        <div className="subscription_plan_card_div">
            <div class="card card-shadow border-0 mb-4">
                <div class="card-body p-4">
                <div class="d-flex align-items-center">
                    <h5 class="font-weight-medium mb-0"><strong>{props.title}</strong></h5>
                </div>
                <div className="d-flex mt-2">
                    <h6 className="text-justify">{props.description}</h6>
                </div>
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class="price-box my-3">
                           <img src={props.icon} style={{width:'150px', height:'150px'}} alt="" />
                        </div>
                        <a class="btn btn-info-gradiant font-14 border-0 text-white p-3 btn-block mt-3" href="#">REQUEST SERVICE</a>
                    </div>

                </div>
                </div>
            </div>
        </div>
    )
}

export default EInvoiceServiceCard;