import React from 'react';
import Category from './category';
import './categories.css';
import Search from '../../widgets/containers/search';
import Media from '../../playlist/components/media.js';
import ResultsLayout from '../../widgets/components/results-layout';

function Categories(props) {
  return (
    <div className="Categories">
      <Search />
      <ResultsLayout>
        {
          props.isLoading &&
          <p>Buscando tus videos favoritos...</p>
        }
        {
          props.search.map((item) => {
            return (
              <Media 
                openModal={props.handleOpenModal}
                key={item.get('id')}
                title={item.get('title')}
                author={item.get('author')}
                type={item.get('type')}
                cover={item.get('cover')}
                src={item.get('src')}
                id={item.get('id')}
                category={item.get('category')}
              />
            )
          })
        }
      </ResultsLayout>
      {
        props.categories.map((item) =>{
          return (
            <Category
              key={item.get('id')}
              title={item.get('title')}
              description={item.get('description')}
              playlist={item.get('playlist')}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories