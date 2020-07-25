import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { sessionSetItem } from 'src/app/helpers/storage.helper';
import { AppService } from '../app.service';

@Injectable({ providedIn: 'root' })
export class JourneyService {

  journey;

  constructor(private http: HttpClient, private appService: AppService) { }

  getProgress(journeyId) {
    return this.http.post(this.appService.baseUri + "/journey", { journeyId })
      .pipe(map(this.fetchProgressSuccess));
  }

  fetchProgressSuccess = (data: any) => {
    console.log("progress", data)
    this.journey = data;
    sessionSetItem("journey", data);

    const template = this.getTemplate(data, this.appService.templates);
    const phase = this.getPhase(data, template.phases);
    const waypoint = this.getWaypoint(data, phase.waypoints);
    const activity = this.getActivity(data, waypoint.activities);
    const skill = this.getSkill(data, activity.skills);
    const percentage = this.getPercentage(data, skill.exercises_data.exercises);

    const next = this.getNextStep(data);
    const nextPhase = next ? this.getPhase(next, template.phases) : null;
    const nextWaypoint = next ? this.getWaypoint(next, nextPhase.waypoints) : null;
    const nextActivity = next ? this.getActivity(next, nextWaypoint.activities) : null;
    const nextSkill = next ? this.getSkill(next, nextActivity.skills) : null;

    return {
      phase, waypoint, activity, skill, percentage,
      nextPhase,
      nextWaypoint,
      nextActivity,
      nextSkill,
      nextPercentage: next ? next.percentage : null
    };
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

  getExerciseIndex = (data, exercises) =>
    exercises.findIndex(exercise => exercise.id == data.exercise.id);

  getPercentage = (data, exercises) => {
    let index = this.getExerciseIndex(data, exercises);
    if (data.exercise.video
      && (data.exercise.canvas.show || data.exercise.canvas.download)
      && (data.exercise.document.show || data.exercise.document.download)) {
      index++;
    }
    return Math.round(index / exercises.length * 100) + "%";
  }

  getNextStep(data) {
    const nextData = { ...data };
    const template = this.getTemplate(data, this.appService.templates);
    const phase = this.getPhase(data, template.phases);
    const waypoint = this.getWaypoint(data, phase.waypoints);

    nextData.exercise = {
      canvas: { show: false, download: false },
      document: { show: false, download: false },
      video: false
    }

    const activityIndex = waypoint.activities.findIndex(activity => activity.id == data.activityId);
    if (waypoint.activities.length > activityIndex + 1) {
      nextData.activityId = waypoint.activities[activityIndex + 1].id;
      nextData.skillId = waypoint.activities[activityIndex + 1].skills[0].id;
      nextData.exercise.id = waypoint.activities[activityIndex + 1].skills[0].exercises_data.exercises[0].id
    } else {
      const waypointIndex = phase.waypoints.findIndex(waypoint => waypoint.id == data.waypointId);
      if (phase.waypoints.length > waypointIndex + 1) {
        nextData.waypointId = phase.waypoints[waypointIndex + 1].id;
        nextData.activityId = phase.waypoints[waypointIndex + 1].activities[0].id;
        nextData.skillId = phase.waypoints[waypointIndex + 1].activities[0].skills[0].id;
        nextData.exercise.id = phase.waypoints[waypointIndex + 1].activities[0].skills[0].exercises_data.exercises[0].id
      } else {
        const phaseIndex = template.phases.findIndex(phase => phase.id == data.phaseId);
        if (template.phases.length > phaseIndex + 1) {
          nextData.phaseId = template.phases[phaseIndex + 1].id;
          nextData.waypointId = template.phases[phaseIndex + 1].waypoints[0].id;
          nextData.activityId = template.phases[phaseIndex + 1].waypoints[0].activities[0].id;
          nextData.skillId = template.phases[phaseIndex + 1].waypoints[0].activities[0].skills[0].id;
          nextData.exercise.id = template.phases[phaseIndex + 1].waypoints[0].activities[0].skills[0].exercises_data.exercises[0].id
        } else {
          return null;
        }
      }
    }

    nextData.percentage = "0%"

    return nextData;
  }

  updateJourneyExercise(exercise) {
    this.journey.exercise = exercise;
    this.http.put(this.appService.baseUri + "/update-journey", this.journey)
      .subscribe(this.fetchProgressSuccess);
  }

  updateJourney(journey) {
    this.http.put(this.appService.baseUri + "/update-journey", journey)
      .subscribe(this.fetchProgressSuccess);
  }

}
