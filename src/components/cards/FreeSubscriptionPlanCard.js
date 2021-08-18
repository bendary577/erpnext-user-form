import React from 'react';
import '../../assets/css/subscription_plan_card.css';

const FreeSubscriptionPlanCard = () => {

    return (
        <div className="subscription_plan_card_div">
            <div class="card card-shadow border-0 mb-4">
                <div class="card-body p-4">
                <div class="d-flex align-items-center">
                    <h5 class="font-weight-medium mb-0">Basic Plan</h5>
                    <div class="ml-auto"><span class="badge badge-danger font-weight-normal me-2 p-2">Popular</span></div>
                </div>
                <div class="row">
                    <div class="col-lg-5 text-center">
                    <div class="price-box my-3">
                        <h3 class="font-weight-light text-success">Free</h3>
                        <span class="text-dark">for only 1 month</span>
                        {/*<sup>$</sup><span class="text-dark">for only 1 month</span>*/}
                        <a class="btn btn-info-gradiant font-14 border-0 text-white p-3 btn-block mt-3" href="#">CHOOSE PLAN </a>
                    </div>
                    </div>
                    <div class="col-lg-7 align-self-center">
                    <ul class="list-inline pl-3 font-14 font-weight-medium text-dark">
                        <li class="py-2"><i class="icon-check text-info mr-2"></i> <span>6 Days a Week </span></li>
                        <li class="py-2"><i class="icon-check text-info mr-2"></i> <span>Dedicated Trainer</span></li>
                        <li class="py-2"><i class="icon-check text-info mr-2"></i> <span>Diet Plan Included </span></li>
                        <li class="py-2"><i class="icon-check text-info mr-2"></i> <span>Morning and Evening Batches</span></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default FreeSubscriptionPlanCard;