import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {loadPosts} from '../redux/actions/PostAction';


function PostList(props) {
    const data = useSelector(state => state.posts.data)
    
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(loadPosts());
    },[dispatch]);
   
    const columns = React.useMemo(
        () => [
          {
            Header: 'Name',
            columns: [
              {
                Header: 'ID',
                accessor: 'id',
              },
              {
                Header: 'User ID',
                accessor: 'userId',
              },
              {
                Header: 'Title',
                accessor: 'title',
              },
              {
                Header: 'Body',
                accessor: 'body',
              },
            ],
          },
          
        ],
        []
      )  
    return (
      <div></div>
        // <Table columns={columns} data={data} />
    );
}

export default PostList;