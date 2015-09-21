function School() {
    var roster = {};
    
    function getRoster(){
        return roster;
    }

    function addStudent(name, grade){
        // check if grade property exists inside object
        if (roster.hasOwnProperty(grade)){
            roster[grade].push(name);
            roster[grade] = roster[grade].sort();
        } else {
            //if not, create it here
            roster[grade] = [name];
        }
    }

    function getGrade(grade){
        // check if grade property exists inside object
        if (roster.hasOwnProperty(grade)){
            return roster[grade].sort();
        }else{
            return roster;
        }
    }

    return {
        add : addStudent,
        roster : getRoster,
        grade : getGrade
    };
}
module.exports = School;