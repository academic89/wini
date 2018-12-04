module.exports.cron = {

  job: {
    schedule: '0 0 13 * * *',
    // schedule: '0 * * * * *',
    onTick: function () {
      Report.excel();
    }
  }

};
