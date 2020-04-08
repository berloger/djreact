import React from 'react';

import { List, Avatar } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

const Comments = (props) => {
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                size: "small",
                pageSize: 3,
            }}
            dataSource={props.data}
            footer={
                <div>
                    {/* Записи пользователей */}
                </div>
            }
            renderItem={item => (
                <List.Item>
                    <b>{item.username}</b>: {item.text}
                </List.Item>
            )}
        />        
    )
}

export default Comments;
