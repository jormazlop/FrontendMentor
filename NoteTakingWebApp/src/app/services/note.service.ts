import { computed, Injectable, signal } from '@angular/core';
import { Note } from '@models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private _notes = signal<Note[]>([
    new Note(1, 'React Performance Optimization', ["Dev", "React"], new Date("2024-10-29T10:15:00Z"),
    `Key performance optimization techniques:
    \n1. Code Splitting\n- Use React.lazy() for route-based splitting\n- Implement dynamic imports for heavy components
    \n2. Memoization\n- useMemo for expensive calculations\n- useCallback for function props\n- React.memo for component optimization\n\n3. Virtual List Implementation\n- Use react-window for long lists\n- Implement infinite scrolling\n\nTODO: Benchmark current application and identify bottlenecks`),

    new Note(2, 'Japan Travel Planning', ["Travel", "Personal"], new Date("2024-10-28T16:45:00Z"),
    `Japan Trip Planning - Spring 2025\n\nItinerary Draft:
    \nWeek 1: Tokyo\n- Shibuya and Harajuku\n- TeamLab Digital Art Museum\n- Day trip to Mount Fuji
    \nWeek 2: Kyoto & Osaka\n- Traditional temples\n- Cherry blossom viewing\n- Food tour in Osaka\n\nBudget: $3000
    \nAccommodation: Mix of hotels and traditional ryokans
    \nJR Pass: 14 days\n\nTODO: Book flights 6 months in advance`),

    new Note(3, 'Favorite Pasta Recipes', ["Cooking", "Recipes"], new Date("2024-10-27T14:30:00Z"),
    `Classic Italian Recipes:\n\n1. Carbonara
    \n- Eggs, pecorino, guanciale\n- No cream ever!\n- Save pasta water\n\n2. Cacio e Pepe
    \n- Pecorino Romano\n- Fresh black pepper\n- Technique is crucial\n\n3. Arrabbiata
    \n- San Marzano tomatoes\n- Fresh garlic\n- Red pepper flakes\n\nNote:
    Always use high-quality ingredients`),

    new Note(4, 'TypeScript Migration Guide', ["Dev", "React", "TypeScript"], new Date("2024-10-26T09:20:00Z"),
    `Project migration steps:\n\n1. Initial Setup
    \n- Install TypeScript dependencies\n- Configure tsconfig.json\n- Set up build pipeline\n\n2. Migration Strategy
    \n- Start with newer modules\n- Add type definitions gradually\n- Use 'any' temporarily for complex cases\n\n3. Testing Approach
    \n- Update test configuration\n- Add type testing\n- Validate build process\n\nDeadline: End of Q4 2024`),

    new Note(5, 'Weekly Workout Plan', ["Fitness", "Health"], new Date("2024-10-25T18:10:00Z"),
    `Monday: Upper Body\n- Bench Press 4x8\n- Rows 4x10\n- Shoulder Press 3x12\n- Pull-ups 3 sets\n
    \nWednesday: Lower Body\n- Squats 4x8\n- Romanian Deadlifts 3x10\n- Lunges 3x12 each\n- Calf Raises 4x15\n
    \nFriday: Full Body\n- Deadlifts 3x5\n- Push-ups 3x12\n- Leg Press 3x12\n- Core Work\n\nCardio: Tuesday/Thursday - 30 min run`),

    new Note(6, 'Gift Ideas', ["Personal", "Shopping"], new Date("2024-10-20T11:30:15Z"),
    `Birthday and Holiday Gift List:
    \n\nMom:\n- Cooking class subscription\n- Kindle Paperwhite\n- Spa day package
    \n\nDad:\n- Golf lessons\n- Wireless earbuds\n- BBQ accessories\n\nSister:\n- Art supplies set\n- Yoga mat kit\n- Coffee subscription
    \n\nBudget per person: $150-200`),

    new Note(7, 'React Component Library', ["Dev", "React"], new Date("2024-10-15T14:23:45Z"),
    `Custom Component Library Structure:
    \n\n1. Basic Components\n- Button\n- Input\n- Card\n- Modal
    \n\n2. Form Components\n- FormField\n- Select\n- Checkbox\n- RadioGroup
    \n\n3. Layout Components\n- Container\n- Grid\n- Flex
    \n\nAll components need:\n- TypeScript definitions\n- Unit tests\n- Storybook documentation\n- Accessibility support`),

    new Note(8, 'Meal Prep Ideas', ["Cooking", "Health", "Recipes"], new Date("2024-10-12T09:45:15Z"),
    `Weekly Meal Prep Plan:
    \n\nBreakfast Options:\n- Overnight oats\n- Egg muffins\n- Smoothie packs
    \n\nLunch Containers:\n- Greek chicken bowl\n- Buddha bowls\n- Tuna pasta salad
    \n\nSnacks:\n- Cut vegetables\n- Mixed nuts\n- Greek yogurt parfait
    \n\nPrep Time: Sunday 2-4pm\nStorage: Glass containers\nLasts: 4-5 days`),

    new Note(9, 'Reading List', ["Personal", "Dev"], new Date("2024-10-05T12:20:30Z"),
    `Current Reading Queue:
    \n\n1. Technical Books\n- Clean Architecture by Robert Martin\n- Designing Data-Intensive Applications\n- TypeScript Design Patterns
    \n\n2. Personal Development\n- Deep Work by Cal Newport\n- Atomic Habits\n- The Psychology of Money
    \n\nCurrently Reading: Clean Architecture\nNext Up: Deep Work\n\nGoal: One book per month`),

    new Note(10, 'Fitness Goals 2025', ["Fitness", "Health", "Personal"], new Date("2024-09-22T07:30:00Z"),
    `2025 Fitness Objectives:
    \n\n1. Strength Goals\n- Bench press: 225 lbs\n- Squat: 315 lbs\n- Deadlift: 405 lbs
    \n\n2. Cardio Goals\n- Run half marathon\n- 5k under 25 minutes
    \n\n3. Habits\n- Gym 4x per week\n- Daily 10k steps\n- Sleep 7+ hours
    \n\nTrack all workouts in Strong app`),

  ]);
  notes = this._notes.asReadonly();

  private _archived = signal<Note[]>([]);
  archived = this._archived.asReadonly();

  totalNotes = computed(() => [...this._notes(), ...this._archived()]);

  private _opened = signal(true);
  opened = this._opened.asReadonly();

  tags = computed(() => {
    const tags = new Set<string>();

    this._notes().flatMap(note => note.tags).forEach(tag => tags.add(tag));
    this._archived().flatMap(note => note.tags).forEach(tag => tags.add(tag));

    return tags;
  });

  addNote(note: Note): void {
    this._notes.update(val => {

      let existing = val.find(item => item.id === note.id);

      if (existing) {
        existing.body = note.body;
        existing.edited = note.edited;
        existing.tags = note.tags.filter(tag => tag);
        existing.title = note.title;
      } else {
        val.push(note);
      }
      return [...val];
    });
  }

  deleteNote(id: number): void {
    this._notes.update(val => {
      return [...val].filter(note => note.id != id);
    });
    this._archived.update(val => {
      return [...val].filter(note => note.id != id);
    });
  }

  archiveNote(id: number): void {
    this._notes.update(val => {

      const note = val.find(note => note.id == id);

      if(note) {
        this._archived.update(val => {
          val.push(note);
          return [...val];
        })
      }

      return [...val].filter(note => note.id != id);
    });
  }

  restoreNote(id:number): void {
    this._archived.update(val => {

      const note = val.find(note => note.id == id);

      if(note) {
        this._notes.update(val => {
          val.push(note);
          return [...val];
        })
      }

      return [...val].filter(note => note.id != id);
    });
  }

  menu(val?: boolean): void {
    if(val) this._opened.set(val);
    else this._opened.update(val => !val);
  }

}
