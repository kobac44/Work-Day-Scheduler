# Work-Day-Scheduler

(This allows the user the option to save plans each hour of their work day.)
## User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

# Installations 

* Moment.js
* Fontawesome.com

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

# Functionality

This Scheduler required a past, present and future if/ else Js condition (very difficult)
This activity required a local storage user enable option. (very difficult)

The page is set to reload on each new hour. Prior to reloading the page, a confirm asks the user if it is okay to reload. This is done in order to prevent unexpected loss of data. If the user confirms, the page reloads displaying the correct colors for each time block and resets the timer to load the page in an hour. If the user denies the reload, they must reload the page to restart this functionality.
