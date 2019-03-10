import { Provider } from '@angular/core';
import { DEFAULT_PROJECTS_CONFIG, PROJECTS_CONFIG_TOKEN } from './projects.config';
import { DEFAULT_STATUSES_CONFIG, STATUSES_CONFIG_TOKEN } from './statuses.config';
import { DEFAULT_TASKS_CONFIG, TASKS_CONFIG_TOKEN } from './tasks.config';

export const ENTITIES_PROVIDERS: Provider[] = [
  {
    provide: PROJECTS_CONFIG_TOKEN,
    useValue: DEFAULT_PROJECTS_CONFIG
  },
  {
    provide: STATUSES_CONFIG_TOKEN,
    useValue: DEFAULT_STATUSES_CONFIG
  },
  {
    provide: TASKS_CONFIG_TOKEN,
    useValue: DEFAULT_TASKS_CONFIG
  }
];
