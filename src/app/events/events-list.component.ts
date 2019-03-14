import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

 // declare let toastr;

@Component({
    // selector: 'events-list',
    // templateUrl: './events-list.component.html'
    template: `
        <div>
        <h1>Upcoming Angular Events</h1>
        <hr />
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailEvent(event.name)" [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>`
})

export class EventsListComponent implements OnInit {
    events: any;
    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        // doing this in resolver
        //  this.eventService.getEvents().subscribe(events => {
        //      this.events = events;
        //  });
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailEvent(eventName) {
        this.toastr.success(eventName);
    }
}
