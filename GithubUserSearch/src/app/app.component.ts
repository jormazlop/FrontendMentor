import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { UserService } from './services/user.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  theme = 'theme-light';
  userSearched: User | null = null;
  userNotFound = false;
  title = 'GithubUserSearch';

  constructor(private themeService: ThemeService, private userService: UserService) {}

  ngOnInit(): void {
    this.themeService.getTheme().subscribe((theme: string) => {
      this.theme = theme;
    });

    this.onSearch('octocat');
  }

  onSearch(user: string): void {
    this.userService.searchUser(user).subscribe(
      {
        next: (reponse: User) => {
          this.userSearched = reponse;
          this.userNotFound = false;
        },
        error: (err: any) => {
          this.userNotFound = true;
        },
        complete: () => {}
      }
    );
  }

}
