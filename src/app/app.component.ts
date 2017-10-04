import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'my-app',
    templateUrl : './app.component.html',
   // styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'KEEP TRACK OF YOUR EVENTS';
    values: string[] = [] 
    isEdit = false;
    //myHero = this.heroes[0];
    onEnter(value: string) { this.values.push(value); }
    onDelete(value: string) { const index: number = this.values.indexOf(value); this.values.splice(index, 1); }
   // onEdit() { this.isEdit = true; }
}
