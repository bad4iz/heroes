import { Component } from '@angular/core';

export class Hero{
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `
            <h1>{{title}}</h1>
            <h2>{{hero.name}}</h2>
            <div>
                <label>id: </label>{{hero.id}}
            </div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="имя">
            </div>
                 `
})
export class AppComponent {
    title = 'тур героев';
    hero: Hero = {
        id:1,
        name: 'вася'
    };
}
