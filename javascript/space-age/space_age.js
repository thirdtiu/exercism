var result,
    seconds,
    YEAR_IN_DAYS = 365.25,
    DAY_IN_HOURS = 24,
    HOUR_IN_MINUTES = 60,
    MINUTE_IN_SECONDS = 60,
    MERCURY_YEARS = 0.2408467,
    VENUS_YEARS = 0.61519726,
    MARS_YEARS = 1.8808158,
    JUPITER_YEARS = 11.862615,
    SATURN_YEARS = 29.447498,
    URANUS_YEARS = 84.016846,
    NEPTUNE_YEARS = 164.79132;

function earthSeconds(value){
    return value / MINUTE_IN_SECONDS / HOUR_IN_MINUTES / DAY_IN_HOURS / YEAR_IN_DAYS;
}
function SpaceAge(secondsValue){

    this.seconds = secondsValue;

    this.onEarth = function(){
        result = earthSeconds(secondsValue);
        return parseFloat(result.toFixed(2));
    }

    this.onMercury = function(){
        result = earthSeconds(secondsValue) / MERCURY_YEARS;
        return parseFloat(result.toFixed(2));
    }

    this.onVenus = function(){
        result = earthSeconds(secondsValue) / VENUS_YEARS;
        return parseFloat(result.toFixed(2));
    }

    this.onMars = function(){
        result = earthSeconds(secondsValue) / MARS_YEARS;
        return parseFloat(result.toFixed(2));
    }

    this.onJupiter = function(){
        result = earthSeconds(secondsValue) / JUPITER_YEARS;
        return parseFloat(result.toFixed(2));
    }

    this.onSaturn = function(){
        result = earthSeconds(secondsValue) / SATURN_YEARS;
        return parseFloat(result.toFixed(2));
    }

    this.onUranus = function(){
        result = earthSeconds(secondsValue) / URANUS_YEARS;
        return parseFloat(result.toFixed(2));
    }

    this.onNeptune = function(){
        result = earthSeconds(secondsValue) / NEPTUNE_YEARS;
        return parseFloat(result.toFixed(2));
    }
}


module.exports = SpaceAge;