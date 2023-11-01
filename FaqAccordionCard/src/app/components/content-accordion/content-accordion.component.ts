import { Component } from '@angular/core';

export type AccordionContent = {
  header: string;
  body: string;
  opened: boolean;
};

@Component({
  selector: 'app-content-accordion',
  templateUrl: './content-accordion.component.html',
  styleUrls: ['./content-accordion.component.scss'],
})
export class ContentAccordionComponent {
  contents: AccordionContent[] = [
    {
      header: `How many team members can I invite?`,
      body: `You can invite up to 2 additional users on the Free plan. There is no limit on
             team members for the Premium plan.`,
      opened: false,
    },
    {
      header: `What is the maximum file upload size?`,
      body: `No more than 2GB. All files in your account must fit your allotted storage space.`,
      opened: false,
    },
    {
      header: `How do I reset my password?`,
      body: `Click “Forgot password” from the login page or “Change password” from your profile page.
              A reset link will be emailed to you.`,
      opened: false,
    },
    {
      header: `Can I cancel my subscription?`,
      body: `Yes! Send us a message and we’ll process your request no questions asked.`,
      opened: false,
    },
    {
      header: `Do you provide additional support?`,
      body: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
      opened: false,
    },
  ];

  closeOpened(opened: boolean, index: number): void {
    if (opened) {
      this.contents.forEach(content => content.opened = false);
      this.contents[index].opened = opened;
    }
  }

  trackByOpened(index: number, item: AccordionContent): AccordionContent {
    return item;
  }
}
