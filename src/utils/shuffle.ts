import { getRankdomNumber } from './calculator';
import data from '../../data/questions.json';

const fetchQuestions = (): string[] => {
  return data.questions;
};

export const shuffle = (): string => {
  const questions = fetchQuestions();
  const rand = getRankdomNumber(questions.length);
  return questions[rand];
};
