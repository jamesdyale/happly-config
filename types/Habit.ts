import {UniqueId} from "../generators";
import {TimeOfDay} from "./TimeOfDay";
import {User} from "./User";
import {Frequency} from "./Frequency";

export type Habit = {
  id: UniqueId<'habit'>;
  name: string;
  description: string;
  userId: User['id'];
  timeOfDay: TimeOfDay;
  frequencyOption: Frequency;
  createdAt: string;
  reminderAt: string[];
  selectedDays: string[];
}
