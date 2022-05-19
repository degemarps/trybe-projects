/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import localStorageAction from '../context/localStorageHooks/localStorageAction';
import useLocalStorage from '../context/localStorageHooks/useLocalStorage';

export default function IngredientSteps(
  { ingredients, actualRecipe, checkboxProgress, type },
) {
  const [stepsLocalStorage, setStepsLocalStorage] = useState([]);
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const steps = [];
  const notCheckedClass = 'step-not-checked';
  const checkedClass = 'step-checked';
  const RADIX = 10;
  const [progress, setProgress] = useLocalStorage('inProgressRecipes', []);

  useEffect(() => {
  }, [progress]);

  const generateNoClass = () => {
    if (ingredients) {
      for (let index = 0; index <= ingredients.length; index += 1) {
        steps.push({
          step: notCheckedClass,
          checked: false,
          index,
        });
      }
    }
    setStepsLocalStorage(steps);
  };

  const generateWithClass = () => {
    const keys = Object.keys(inProgress[type]);
    const recipe = keys.find((key) => key === actualRecipe.id);
    const arrayIds = inProgress[type][actualRecipe.id];
    let className = '';
    let classValue = false;

    if (recipe) {
      for (let index = 0; index < ingredients.length; index += 1) {
        for (let y = 0; y < arrayIds.length; y += 1) {
          if (index === (Number.parseInt(arrayIds[y], RADIX))) {
            className = checkedClass;
            classValue = true;
            break;
          } else {
            className = notCheckedClass;
            classValue = false;
          }
        }
        steps.push({
          step: className,
          checked: classValue,
          index,
        });
      }
      setStepsLocalStorage(steps);
    }
  };

  useEffect(() => {
    if (!inProgress || !inProgress[type]) {
      generateNoClass();
    } else {
      generateWithClass();
    }
  }, []);

  const populateSteps = () => {
    if (inProgress) {
      if (!inProgress[type]) {
        return;
      }
      const keys = Object.keys(inProgress[type]);
      const recipe = keys.find((key) => key === actualRecipe.id);

      if (recipe) {
        return;
      }

      if (ingredients) {
        for (let index = 0; index < ingredients.length; index += 1) {
          steps.push({
            step: notCheckedClass,
            checked: false,
            index,
          });
        }
      }
      setStepsLocalStorage(steps);
    }
  };

  const addLocalStorage = () => {
    const { id } = actualRecipe;
    switch (!inProgress) {
    case true:
      localStorage.setItem('inProgressRecipes', JSON
        .stringify({ [type]: { [id]: [] } }));
      break;
    default:
      if (!inProgress[type] || !inProgress[type][id]) {
        localStorage.setItem('inProgressRecipes', JSON
          .stringify({
            ...inProgress,
            [type]: { ...inProgress[type], [id]: [] },
          }));
      } else {
        localStorage.setItem('inProgressRecipes', JSON
          .stringify({
            ...inProgress,
            [type]:
                { ...inProgress[type],
                  [id]: [...inProgress[type][id]],
                } }));
      }
    }
  };

  const addOnceLocalStorage = async (array, targetId) => {
    const { id } = actualRecipe;
    const newProgress = await localStorageAction(
      targetId, 'addToggleStep', array[type][id], { id, type, array },
    );
    setProgress(newProgress);
  };

  useEffect(() => {
    populateSteps();
    addLocalStorage();
  }, [ingredients]);

  const doneStepEffect = ({ id: targetId }) => {
    const allProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    let step = checkedClass;

    if (stepsLocalStorage[targetId].checked) {
      step = notCheckedClass;
    }

    setStepsLocalStorage([
      ...stepsLocalStorage,
      stepsLocalStorage[targetId].checked = !stepsLocalStorage[targetId].checked,
      stepsLocalStorage[targetId].step = step,
    ]);

    checkboxProgress(stepsLocalStorage);

    addOnceLocalStorage(allProgress, [targetId][0]);
  };

  return (
    <Container>
      <h3> Ingredients </h3>
      <table width="100%">
        <tbody>
          {
            ingredients && ingredients.map(
              ({ ingredient, measure }, index) => (
                <tr key={ index } data-testid={ `${index}-ingredient-step` }>
                  <td>
                    <input
                      checked={
                        stepsLocalStorage[index] && stepsLocalStorage[index].checked
                      }
                      type="checkbox"
                      id={ `${index}` }
                      value={ `${index}-ingredient` }
                      onChange={ ({ target }) => doneStepEffect(target) }
                    />
                    <label
                      className={
                        stepsLocalStorage[index] && stepsLocalStorage[index].step
                      }
                      htmlFor={ `${index}` }
                    >
                      {`${ingredient} - ${measure}`}
                    </label>
                  </td>
                </tr>
              ),
            )
          }
        </tbody>
      </table>
      <br />
    </Container>
  );
}

IngredientSteps.propTypes = {
  ingredients: PropTypes.array,
}.isRequired;

// const obj = { [actualType]: {
//   [id]: [...stepsLocalStorage],
// } };
//   {
//     cocktails: {
//         id-da-bebida: [lista-de-ingredientes-utilizados],
//         ...
//     },
//     meals: {
//         id-da-comida: [lista-de-ingredientes-utilizados],
//         ...
//     }
// }
