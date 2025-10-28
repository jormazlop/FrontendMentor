import { Component } from '@angular/core';
import { Title } from './title/title';
import { Separator } from '@shared/components/separator/separator';
import { Mission } from './mission/mission';
import { MissionT } from '@shared/models/mission';
import { Beyond } from './beyond/beyond';
import { CookSmarter } from '@shared/components/cook-smarter/cook-smarter';

@Component({
  selector: 'app-about',
  imports: [Title, Separator, Mission, Beyond, CookSmarter],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export default class About {
  missionsExists: MissionT[] = [
    {
      title: 'Cut through the noise.',
      description: `The internet is bursting with recipes,
      yet most busy cooks still default to take-away or packaged foods.
      We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.`,
    },
    {
      title: 'Empower home kitchens.',
      description: `When you control what goes into your meals,
      you control how you feel. Every recipe is built around unrefined ingredients and ready
      in about half an hour of active prep.`,
    },
    {
      title: 'Make healthy look good.',
      description: `High-resolution imagery shows you exactly what success looks like—because
      we eat with our eyes first, and confidence matters.`,
    },
  ];

  missionsFood: MissionT[] = [
    {
      title: 'Whole ingredients first.',
      description: `Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.`,
    },
    {
      title: 'Flavor without compromise.',
      description: `Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.`,
    },
    {
      title: 'Respect for time.',
      description: `Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.`,
    },
    {
      title: 'Sustainable choices.',
      description: `Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.`,
    },
  ];
}
