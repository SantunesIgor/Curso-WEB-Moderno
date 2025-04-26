const schedule = require("node-schedule");

const timer = schedule.scheduleJob("*/5 * * * * *", function () {
  console.log("Running", new Date().getSeconds());
});

setTimeout(function () {
  timer.cancel();
  console.log("Stopping");
}, 20000);

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 5)];
rule.hour = 12;
rule.second = 30;

const timer2 = schedule.scheduleJob(rule, function () {
  console.log("Running timer 2", new Date().getSeconds());
});
