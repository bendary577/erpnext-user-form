import React from 'react';
import '../../assets/css/subscription_plan_card.css';

const ZakatCircleCard = (props) => {

    return (
        <div className="subscription_plan_card_div">
            <div class="card card-shadow border-1 rounde">
                <div className="p-4">
                    <img src={props.icon} style={{width:'100px', height:'100px'}} alt="" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
    )
}

export default ZakatCircleCard;