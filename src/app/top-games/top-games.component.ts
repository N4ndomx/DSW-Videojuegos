import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-games',
  standalone: true,

  imports: [CommonModule],
  templateUrl: './top-games.component.html',
  styleUrl: './top-games.component.css'
})
export class TopGamesComponent {
  topSoldGames = [
    {
      title: 'Storm of Legends',
      sales: '3.5M',
      imageUrl: 'https://i.pinimg.com/236x/ac/36/dc/ac36dceb0ab5eda4ae2e58a5c6e944a2.jpg'
    },
    {
      title: 'Battlefield Echoes',
      sales: '2.9M',
      imageUrl: 'https://i.pinimg.com/1200x/65/89/8f/65898fa9c6367f6017e6bac72b7b2b37.jpg'
    },
    {
      title: 'Ancient Warriors',
      sales: '2.5M',
      imageUrl: 'https://i.pinimg.com/1200x/02/38/7f/02387f8dcb5a23c1fb5c4e8e0339583c.jpg'
    },
    {
      title: 'Magic Duel',
      sales: '2.2M',
      imageUrl: 'https://i.pinimg.com/1200x/d8/7e/5f/d87e5fcbeb8eecc2a42712c7387c82a7.jpg'
    },
    {
      title: 'Galactic Conquest',
      sales: '2.0M',
      imageUrl: 'https://i.pinimg.com/1200x/6a/21/b5/6a21b5ed7ccc4e7cd528e01fc63b719a.jpg'
    },
    {
      title: 'Space Fighters',
      sales: '1.9M',
      imageUrl: 'https://i.pinimg.com/1200x/7a/68/14/7a681440071a5bcdb7b1d440176c8141.jpg'
    }
  ];

  topPlayedGames = [
    {
      title: 'Galaxy Raiders',
      players: '1.2M',
      imageUrl: 'https://i.pinimg.com/1200x/27/75/8e/27758e8bc0c7e4b725409bcbe49c7c3a.jpg'
    },
    {
      title: 'Mystic Quest',
      players: '950K',
      imageUrl: 'https://i.pinimg.com/1200x/aa/64/c0/aa64c003039b29df13e60db935662988.jpg'
    },
    {
      title: 'The Last Knight',
      players: '800K',
      imageUrl: 'https://i.pinimg.com/1200x/7f/8d/7f/7f8d7f2a55fee52351496c78a2abea82.jpg'
    },
    {
      title: 'Dungeon Masters',
      players: '700K',
      imageUrl: 'https://i.pinimg.com/1200x/ea/73/e3/ea73e33f2602cc085c8af5141a84af79.jpg'
    },
    {
      title: 'Cyber Arena',
      players: '650K',
      imageUrl: 'https://i.pinimg.com/1200x/fa/34/a3/fa34a3fd8dc1dc33d9519a0cbe811593.jpg'
    },
    {
      title: 'Heroic Legends',
      players: '600K',
      imageUrl: 'https://i.pinimg.com/1200x/36/9e/f7/369ef7e489ada416dc618e2fb68cb706.jpg'
    }
  ];


  slides1: any[] = [];
  slides2: any[] = [];

  ngOnInit() {
    this.slides1 = this.chunkArray(this.topSoldGames, 3);
    this.slides2 = this.chunkArray(this.topPlayedGames, 3);

  }

  chunkArray(array: any[], size: number): any[][] {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }
}
