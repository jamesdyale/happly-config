import { TimeOfDay } from "./TimeOfDay";
import { Frequency } from "./Frequency";
import { HabitType } from "./HabitType";
import { UniqueId } from "../generators";
import { ChallengeType } from "./ChallengeType";
import { User } from "./User";

export type Habit = {
  id: UniqueId<"habit">;
  name: string;
  description: string;
  userId: User["id"];
  timeOfDay: TimeOfDay;
  frequencyOption: Frequency;
  createdAt: string;
  reminderAt: string[];
  selectedDays: string[];
  type: HabitType;
  challengeId?: ChallengeType["id"];
};
