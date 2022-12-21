import React from 'react'
import { Card, Typography } from 'antd'

const { Text } = Typography;

export default function ForumMessage(props) {
    const message = props.message;

    return (
        <>
            <Card>
                <Text keyboard style={{fontSize:"9px"}}>{message.customerId}</Text>
                <div style={{fontSize:"18px"}}>
                    {message.message}
                </div>
                <Text type='secondary' style={{fontSize:"9px"}}>{message.createdTime}</Text>
            </Card>

        </>
    )
}
