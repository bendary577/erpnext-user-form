import React from 'react';
import '../../assets/css/subscription_plan_card.css';


const EInvoiceBenifitsCard = (props) => {
    return (
        <div className="subscription_plan_card_div">
            <div class="card card-shadow border-1 mb-4">
                <div class="card-body">
                    <div class="row">
                        <div className="col-md-7">
                            <div class="d-flex align-items-center">
                                <h5 class="font-weight-medium mb-0"><strong>{props.title}</strong></h5>
                            </div>
                            <div className="d-flex text-justify">
                                <h6>{props.description}</h6>
                            </div>
                            <div className="d-flex">
                                <a class="btn btn-info-gradiant font-14 border-0 text-white p-3 btn-block mt-3" href="#">REQUEST SERVICE</a>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class=" my-3">
                                <img src={props.icon} style={{width:'100px', height:'100px'}} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EInvoiceBenifitsCard;