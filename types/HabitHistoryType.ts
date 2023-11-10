import { Habit } from "./Habit";
import { Stats } from "./Stats";

export type HabitHistory = {
  [habitId: string]: {
    habit: Habit;
    stats: Stats[];
  };
};
