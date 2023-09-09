import { Component } from '@angular/core';
import { Blog } from './model/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  blogs: Blog[] = [
    {
      title: 'How to Run an Effective Business Meeting',
      image: '../../assets/blog/blog-1.jpeg',
      date: new Date()
    },
    {
      title: 'What Is an ISV (Independent Software Vendor)?',
      image: '../../assets/blog/blog-2.jpeg',
      date: new Date(new Date().setDate(new Date().getDate() - 5))
    },
    {
      title: 'Building a Positive Culture For Your Business is Just as Important as Scaling – Here’s What You Need to Know',
      image: '../../assets/blog/blog-3.jpg',
      date: new Date(new Date().setDate(new Date().getDate() - 15))
    },
    {
      title: 'Trello vs Asana in 2023 – How to Pick Which Project Management Tool Is Right for You',
      image: '../../assets/blog/blog-4.jpeg',
      date: new Date(new Date().setDate(new Date().getDate() - 22))
    },
    {
      title: 'How to Get a Business Credit Card in 5 Simple Steps',
      image: '../../assets/blog/blog-5.jpeg',
      date: new Date(new Date().setDate(new Date().getDate() - 38))
    },
    {
      title: 'Were You a US Facebook User Between 2007 and 2022? It’s Your Last Chance to File a Claim For Its $725 Million Class-Action Lawsuit Settlement',
      image: '../../assets/blog/blog-6.jpg',
      date: new Date(new Date().setDate(new Date().getDate() - 70))
    }
  ]
}
