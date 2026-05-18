
import { createStore, createEvent } from 'effector';

const initialState = { language: 'ru' };

// Загрузка состояния из localStorage
const loadStateFromLocalStorage = () => {
  try {
    const savedState = localStorage.getItem('cvData');
    return savedState ? JSON.parse(savedState) : initialState;
  } catch (error) {
    console.error('Error loading state from localStorage:', error);
    return initialState;
  }
};

// События
export const setLangugage = createEvent();

// Стор с данными CV
export const $cvData = createStore(loadStateFromLocalStorage())
  .on(setLangugage, (state, language) => ({ ...state, language }));

// Сохранение в localStorage при изменении стора
$cvData.watch((state) => {
  try {
    localStorage.setItem('cvData', JSON.stringify(state));
  } catch (error) {
    console.error('Error saving state to localStorage:', error);
  }
});
