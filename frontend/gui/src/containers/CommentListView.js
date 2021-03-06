import React from 'react';
import axios from 'axios';

import Comments from '../components/Comment';
import CustomForm from '../components/Form';

// const listData = [];
// for (let i = 0; i < 23; i++) {
//   listData.push({
//     href: 'http://ant.design',
//     title: `ant design part ${i}`,
//     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     description:
//       'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//     content:
//       'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//   });
// }

class CommentList extends React.Component {
    state = {
        comments: []
    }

    componentDidMount() {
        // const commentID = this.props.match.params.commentID;
        // axios.get(`http://127.0.0.1:8000/api/${commentID}`)
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    comments: res.data
                });
                // console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <Comments data={this.state.comments} />
                <br />
                <CustomForm 
                    // requestType="put"
                    // commentID={this.props.match.params.commentID} 
                />
            </div>
        )
    }
}

export default CommentList;
