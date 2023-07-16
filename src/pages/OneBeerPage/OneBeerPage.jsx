import React, { useEffect } from 'react';
import {
  BeerImage,
  BeerName,
  BeerPageContainer,
  BeerTagline,
  Ingredient,
  RecipeContainer,
  RecipeInstructions,
  RecipeTitle,
} from './OneBeerPageStyled';
import { useParams } from 'react-router-dom';
import useOneBeerStore from 'stores/useOneBeerStore';

export const OneBeerPage = () => {
  const beer = useOneBeerStore(state => state.data);
  const getOneBeer = useOneBeerStore(state => state.getOneBeer);
  const isLoading = useOneBeerStore(state => state.isLoading);
  const { id } = useParams();
  useEffect(() => {
    getOneBeer(id);
  }, [getOneBeer, id]);

  return (
    <BeerPageContainer>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <BeerImage src={beer.image_url} alt={beer.name} />
          <BeerName>{beer.name}</BeerName>
          <BeerTagline>{beer.tagline}</BeerTagline>

          <RecipeContainer>
            <RecipeTitle>Recipe</RecipeTitle>
            <RecipeInstructions>{beer.description}</RecipeInstructions>

            <p>Brewers Tips: {beer.brewers_tips}</p>

            <h4>Ingredients:</h4>
            <ul>
              {beer.ingredients.malt.map((malt, index) => (
                <Ingredient key={index}>{malt.name}</Ingredient>
              ))}
              {beer.ingredients.hops.map((hop, index) => (
                <Ingredient key={index}>{hop.name}</Ingredient>
              ))}
              <Ingredient>Yeast: {beer.ingredients.yeast}</Ingredient>
            </ul>
          </RecipeContainer>

          <p>Additional content here...</p>
        </>
      )}
    </BeerPageContainer>
  );
};
