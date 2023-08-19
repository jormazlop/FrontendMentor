import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Profile } from 'src/app/shared/models/profile';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  profile: Profile = new Profile();

  profileSubscription = new Subscription();

  transition = false;

  count = 0;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileSubscription = this.profileService.getProfiles().subscribe((profile: Profile) => {

      if(this.count > 0) {
        setTimeout(()=> {
          this.profile = profile;
        }, 750);
      } else {
        this.profile = profile;
        this.count++;
      }
    })
  }

  onClickNextProfile(): void {
    if(!this.transition) {
      this.transition = true;
      this.profileService.setNextProfile();
      setTimeout(()=> {
        this.transition = false;
      }, 1500);
    }
  }

  onClickPreviousProfile(): void {

    if(!this.transition) {
      this.transition = true;
      this.profileService.setPreviousProfile();
      setTimeout(()=> {
        this.transition = false;
      }, 1500);
    }
  }

  ngOnDestroy(): void {
    this.profileSubscription.unsubscribe();
  }
}
