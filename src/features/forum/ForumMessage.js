import React, {useState, useEffect} from 'react'
import { Card, Typography } from 'antd'
import { getCustomerById } from '../../api/movies';

const { Text } = Typography;

export default function ForumMessage(props) {
    const message = props.message;

    const [customer, setCustomer] = useState();

    useEffect(() => {
        getCustomerById(props.message.customerId)
        .then((response)=> {
            setCustomer(response.data);
        })
        .catch((error) => {
        })
    }, [props.message.customerId])


    return (
        <>
            <Card>
                {customer && <Text keyboard style={{fontSize:"9px"}}>{customer.customerName}</Text>}
                <div style={{fontSize:"18px"}}>
                    {message.message}
                </div>
                <Text type='secondary' style={{fontSize:"9px"}}>{message.createdTime}</Text>
            </Card>

        </>
    )
}
