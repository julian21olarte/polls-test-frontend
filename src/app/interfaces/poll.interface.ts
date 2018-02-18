import { Question } from './question.interface';

export interface Poll {
    title: string;
    description: string;
    questions: Array<Question>;
}
