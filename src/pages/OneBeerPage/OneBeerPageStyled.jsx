import styled from '@emotion/styled';

export const BeerPageContainer = styled.div`
padding-top: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #474a51;
`;

export const BeerImage = styled.img`
  max-width: 400px;
  max-height: 400px;
  margin-bottom: 16px;
`;

export const BeerName = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const BeerTagline = styled.p`
  font-size: 18px;
  margin-bottom: 16px;
`;

export const RecipeContainer = styled.div`
  width: 400px;
  padding: 16px;
  background-color: lightgray;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const RecipeTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;

export const RecipeInstructions = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const IngredientsList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

export const Ingredient = styled.li`
  font-size: 16px;
  margin-bottom: 4px;
`;
