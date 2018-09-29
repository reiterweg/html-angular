import { WorkTeam } from './work-team.interface';

export interface InfoPage {
  name?: string;
  email?: string;
  short_name?: string;
  author_page?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  tumblr?: string;
  work_team?: WorkTeam[];
}
