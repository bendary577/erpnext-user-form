import React from 'react';
import '../../assets/css/subscription_plan_card.css';


const EInvoiceServiceCard = (props) => {
    return (
        <div className="subscription_plan_card_div">
            <div class="card card-shadow border-0 mb-4">
                <div class="card-body p-4">
                <div class="d-flex align-items-center">
                    <h5 class="font-weight-medium mb-0">Integrate</h5>
                </div>
                <p>your erp system with e-invocie</p>
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