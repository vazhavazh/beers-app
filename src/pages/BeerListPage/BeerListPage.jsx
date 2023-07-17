import React, { lazy } from 'react';
import { useEffect, useState } from 'react';
import useBeersStore from 'stores/useBeersStore';
import {
  BeerGallery,
  BeerCardHolder,
  DeleteButton,
  LoadMoreBtn,
  FlexContainer,
} from './BeerListPageStyled';

const BeerCard = lazy(() => import('../../components/BeerCard/BeerCard'));

export const BeerListPage = () => {
  const beers = useBeersStore(state => state.data);
  const getBeers = useBeersStore(state => state.getBeers);
  const isLoading = useBeersStore(state => state.isLoading);
  const [selectedCards, setSelectedCards] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getBeers();
  }, [getBeers]);

  const handleSelect = (event, beer) => {
    event.preventDefault();
    setSelectedCards(prevSelectedCards => {
      const isSelected = prevSelectedCards.includes(beer.id);
      if (isSelected) {
        return prevSelectedCards.filter(id => id !== beer.id);
      } else {
        return [...prevSelectedCards, beer.id];
      }
    });
  };

  const handleDeleteButtonClick = () => {
    const updatedRecipes = beers.filter(
      recipe => !selectedCards.includes(recipe.id)
    );
    useBeersStore.setState({ data: updatedRecipes });
    setSelectedCards([]);
  };

  const handleLoadMoreClick = async () => {
    const nextPage = page + 1;
    await getBeers(nextPage);
    setPage(nextPage);
  };

  const emptyList = beers.length === 0;

  return (
    <div>
      {isLoading ? (
        <h1
          style={{
            textAlign: 'center',
          }}
        >
          Loading...
        </h1>
      ) : (
        <>
          <BeerGallery>
            {beers.slice(0, 15).map(beer => (
              <BeerCardHolder
                key={beer.id}
                onContextMenu={event => handleSelect(event, beer)}
                style={{
                  background: selectedCards.includes(beer.id)
                    ? 'lightblue'
                    : 'white',
                }}
              >
                <BeerCard beer={beer} />
              </BeerCardHolder>
            ))}
          </BeerGallery>
          {selectedCards.length > 0 && (
            <DeleteButton onClick={handleDeleteButtonClick}>
              Delete
            </DeleteButton>
          )}
          {emptyList ? (
            <FlexContainer>
              {' '}
              <LoadMoreBtn onClick={handleLoadMoreClick}>Load More</LoadMoreBtn>
            </FlexContainer>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};
