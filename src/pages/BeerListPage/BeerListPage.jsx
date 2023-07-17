import React from 'react';
import { useEffect, useState } from 'react';
import useBeersStore from 'stores/useBeersStore';
import {
  BeerGallery,
  BeerCard,
  ImageWrapper,
  Flex,
  BeerCardHolder,
  DeleteButton,
} from './BeerListPageStyled';

export const BeerListPage = () => {
  const beers = useBeersStore(state => state.data);
  const getBeers = useBeersStore(state => state.getBeers);
  const isLoading = useBeersStore(state => state.isLoading);
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getBeers();
  }, [getBeers]);

  const handleSelect = (event, recipe) => {
    event.preventDefault();
    setSelectedRecipes(prevSelectedRecipes => {
      const isSelected = prevSelectedRecipes.includes(recipe.id);
      if (isSelected) {
        return prevSelectedRecipes.filter(id => id !== recipe.id);
      } else {
        return [...prevSelectedRecipes, recipe.id];
      }
    });
  };

  const handleDeleteButtonClick = () => {
    const updatedRecipes = beers.filter(
      recipe => !selectedRecipes.includes(recipe.id)
    );
    useBeersStore.setState({ data: updatedRecipes });
    setSelectedRecipes([]);
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
                  background: selectedRecipes.includes(beer.id)
                    ? 'lightblue'
                    : 'white',
                }}
              >
                <BeerCard to={`/beers/${beer.id}`}>
                  <div>{beer.description}</div>
                  <ImageWrapper>
                    {' '}
                    <img src={beer.image_url} alt="beer" />
                    <Flex>
                      <span>{beer.name}</span>
                      <span>{beer.tagline}</span>
                      <span>ABV: {beer.abv}</span>
                    </Flex>
                  </ImageWrapper>
                </BeerCard>
              </BeerCardHolder>
            ))}
          </BeerGallery>
          {selectedRecipes.length > 0 && (
            <DeleteButton onClick={handleDeleteButtonClick}>Delete</DeleteButton>
          )}
          {emptyList ? (
            <button onClick={handleLoadMoreClick}>Load More</button>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};
