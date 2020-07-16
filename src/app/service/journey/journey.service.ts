import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  constructor(private http: HttpClient, private appService: AppService) { }

  getProgress(journeyId) {
    return this.http.post(this.appService.baseUri + "/journey", { journeyId })
      .pipe(map(data => {

        const template = this.getTemplate(data, this.appService.templates);
        const phase = this.getPhase(data, template.phases);
        const waypoint = this.getWaypoint(data, phase.waypoints);
        const activity = this.getActivity(data, waypoint.activities);
        const skill = this.getSkill(data, activity.skills);
        const percentage = this.getPercentage();

        const next = this.getNext(data);
        const nextPhase = this.getPhase(next, template.phases);
        const nextWaypoint = this.getWaypoint(next, nextPhase.waypoints);
        const nextActivity = this.getActivity(next, nextWaypoint.activities);
        const nextSkill = this.getSkill(next, nextActivity.skills);
        console.log(nextWaypoint)

        return {
          phase, waypoint, activity, skill, percentage,
          nextPhase,
          nextWaypoint,
          nextActivity,
          nextSkill,
          nextPercentage: next.percentage
        };
      }));
  }

  getTemplate = (data, templates) =>
    templates.find(template => template.sector == data.sector)

  getPhase = (data, phases) =>
    phases.find(phase => phase.id == data.phaseId);

  getWaypoint = (data, waypoints) =>
    waypoints.find(waypoint => waypoint.id == data.waypointId);

  getActivity = (data, activities) =>
    activities.find(activity => activity.id == data.activityId);

  getSkill = (data, skills) =>
    skills.find(skill => skill.id == data.skillId);

  getPercentage = () => {
    return "50%";
  }

  getNext(data) {
    const nextData = { ...data };
    const template = this.getTemplate(data, this.appService.templates);
    const phase = this.getPhase(data, template.phases);
    const waypoint = this.getWaypoint(data, phase.waypoints);

    const activityIndex = waypoint.activities.findIndex(activity => activity.id == data.activityId);
    if (waypoint.activities.length > activityIndex + 1) {
      nextData.activityId = waypoint.activities[activityIndex + 1].id;
    } else {
      const waypointIndex = phase.waypoints.findIndex(waypoint => waypoint.id == data.waypointId);
      if (phase.waypoints.length > waypointIndex + 1) {
        nextData.waypointId = phase.waypoints[waypointIndex + 1].id;
        nextData.activityId = phase.waypoints[waypointIndex + 1].activities[0].id;
      } else {
        const phaseIndex = template.phases.findIndex(phase => phase.id == data.phaseId);
        if (template.phases.length > phaseIndex + 1) {
          nextData.phaseId = template.phases[phaseIndex + 1].id;
          nextData.waypointId = template.phases[phaseIndex + 1].waypoints[0].id;
          nextData.waypointId = template.phases[phaseIndex + 1].waypoints[0].activities[0].id;
        } else {
          return null;
        }
      }
    }

    nextData.percentage = "0%"

    return nextData;
  }

}
