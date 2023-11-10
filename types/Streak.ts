import { Habit } from "./Habit";
import { User } from "./User";
import { UniqueId } from "../generators";

export type Streak = {
  id: UniqueId<"streak">;
  habitId: Habit["id"];
  userId: User["id"];
  count: number;
  longestStreak: number;
  startDate: string;
  lastUpdated: string;
};
