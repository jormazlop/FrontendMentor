import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Profile } from 'src/app/shared/models/profile';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss']
})
export class TestimonyComponent {

  profile: Profile = new Profile();

  profileSubscription = new Subscription();

  constructor(private profileService: ProfileService) {}

  transition = false;

  count = 0;

  ngOnInit(): void {
    this.profileSubscription = this.profileService.getProfiles().subscribe((profile: Profile) => {

      if(this.count > 0) {
        this.transition = true;

        setTimeout(()=> {
          this.transition = false;
        }, 1500)

        setTimeout(()=> {
          this.profile = profile;
        }, 400)
      } else {
        this.profile = profile;
        this.count++;
      }
    })
  }

  ngOnDestroy(): void {
    this.profileSubscription.unsubscribe();
  }

}
