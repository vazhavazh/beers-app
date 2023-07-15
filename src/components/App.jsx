import { useEffect, useState } from 'react';
import useBeersStore from 'stores/useBeersStore';

export const App = () => {
  const beers = useBeersStore(state => state.data);
  const getBeers = useBeersStore(state => state.getBeers);
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
        // Deselect recipe
        return prevSelectedRecipes.filter(id => id !== recipe.id);
      } else {
        // Select recipe
        return [...prevSelectedRecipes, recipe.id];
      }
    });
  };
  const handleClick = () => {};

  const handleDeleteButtonClick = () => {
    const updatedRecipes = beers.filter(
      recipe => !selectedRecipes.includes(recipe.id)
    );
    useBeersStore.setState({ data: updatedRecipes });
    setSelectedRecipes([]);
  };

  const handleLoadMoreClick = async () => {
    const nextPage = page + 1; // Получите следующую страницу для загрузки
    await getBeers(nextPage);
    setPage(nextPage);
  };

  const emptyList = beers.length === 0;

  return (
    <>
      <div>
        <ul>
          {beers.slice(0, 15).map(beer => (
            <li key={beer.id}>
              <div
                onContextMenu={event => handleSelect(event, beer)}
              
                style={{
                  background: selectedRecipes.includes(beer.id)
                    ? 'lightblue'
                    : 'white',
                }}
              >
                <span>{beer.id}</span>
                <p>{beer.name}</p>
                <span>{beer.tagline}</span>
                <span>{beer.first_brewed}</span>
                <span>{beer.description}</span>
                <img
                  src={beer.image_url}
                  alt="beer"
                  style={{
                    maxWidth: '360px',
                    maxHeight: '360px',
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
        {selectedRecipes.length > 0 && (
          <button onClick={handleDeleteButtonClick}>Delete</button>
        )}
        {emptyList ? (
          <button onClick={handleLoadMoreClick}>Load More</button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
