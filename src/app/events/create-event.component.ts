import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
     em { float:right; color:E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5 }
    .error ::-webkit-input-plcaeholder {color: #999}
    .error ::-moz-plcaeholder {color: #999; }
    .error :-moz-plcaeholder {color: #999; }
    .error :ms-input-plcaeholder {color: #999; }
    `]
})

export class CreateEventComponent {

    isDirty: Boolean = true;
    constructor(private router: Router) {}

    cancel() {
        this.router.navigate(['/events']);
    }

    saveEvent(formValues) {
        console.log(formValues);
    }
}
