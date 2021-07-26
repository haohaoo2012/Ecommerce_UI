import React, {FC} from 'react';
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Contacts: FC = () => {
    return (
        <div className="container mt-5">
            <h4><FontAwesomeIcon className="ml-2 mr-2" icon={faInfoCircle}/>Contacts</h4>
            <br/>
            <p><b>Phone:</b> 0564847296<br/>
                <b>Mail:</b> nguyendoduchao@gmail.com</p>
            <br/>
            <h6><b>Working time</b></h6>
            <p>The online store is open from 08:00 to 20:00 without breaks and weekends. <br/>
                Online orders are accepted around the clock.</p>
            <br/>
            <h6><b>Delivery</b></h6>
            <p>Delivery of orders come through courier service.</p>
        </div>
    );
};

export default Contacts
