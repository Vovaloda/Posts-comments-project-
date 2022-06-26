import React from 'react';
import MyInput from './UI/inputs/MyInput';
import MySelect from './UI/selects/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return(
        <div>
          <MyInput
            type="text" 
            placeholder="Search..."
            value={filter.query} 
            onChange={e => setFilter({...filter, query: e.target.value})}
          />
          <MySelect 
            value={filter.sort}
            onChange={selectionSort => setFilter({...filter, sort: selectionSort})}
            defaultValue="Sort by: "
            options={[
              {value: "title", name: "Name"},
              {value: "body", name: "Description"},
            ]}
          />
        </div>
    );
}

export default PostFilter;