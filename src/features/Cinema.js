import React from 'react'
import { Collapse } from 'antd';
import SessionLists from './movieSession/SessionLists';

const { Panel } = Collapse;

export default function Cinema(props) {

    const { cinema } = props;

    const onChange = (key) => {
        console.log(key);
      };

    
    return (
        <div style={{margin:"10px", textAlign:"left"}}>
            <Collapse defaultActiveKey={['1']} onChange={onChange}>
            <Panel header={cinema.cinemaName} key="1">
                <div>
                    <SessionLists cinema={cinema}/>
                </div>
            </Panel>
            </Collapse>
        </div>
    )
}
