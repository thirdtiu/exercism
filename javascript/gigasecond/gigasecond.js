Date.prototype.addDays = function(days)
{
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}

var Gigasecond = function(dateinput){
    this.dateinput = dateinput;
    this.daysToAdd = 11574.0740741;
    // 1 gigasecond = 1000000000 seconds.
    // 1000000000 = 11574.0740741 days
};

Gigasecond.prototype.date = function(){
    var dat = new Date(this.dateinput);
    return dat.addDays(this.daysToAdd);
};


module.exports = Gigasecond;

