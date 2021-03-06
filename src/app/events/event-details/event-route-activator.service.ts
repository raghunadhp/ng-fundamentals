import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';
import { EventService } from '../shared/event.service';


@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService: EventService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExixts = !!this.eventService.getEvent(+route.params['id']);

        if (!eventExixts) {
            this.router.navigate(['/404']);
        }
        return eventExixts;
    }
}
