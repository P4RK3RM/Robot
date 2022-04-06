var cans = 0;
var bottles = 0;
var test = 0;

function changeStatus(target, new_status, color) {
    document.getElementById(target + "_status").innerHTML = new_status;
    document.getElementById(target + "_status").style.color = color;
    if(target == 'robot') {//Test features to test style and colors || REMOVE BEFORE DEPLOYMENT
        switch(test) {
            case 0:
                document.getElementById(target + "_status").setAttribute( "onclick", "changeStatus('robot', 'Approaching', 'coral')");
            break;
            case 1:
                document.getElementById(target + "_status").setAttribute( "onclick", "changeStatus('robot', 'Collected', 'darkcyan')");
            break;
            case 2:
                document.getElementById(target + "_status").setAttribute( "onclick", "changeStatus('robot', 'Thinking', 'slategrey')");
            break;
            case 3:
                document.getElementById(target + "_status").setAttribute( "onclick", "changeStatus('robot', 'Going Home', 'chocolate')");
            break;
            case 4:
                document.getElementById(target + "_status").setAttribute( "onclick", "changeStatus('robot', 'Depositing', 'indigo')");
                increment("can");
            break;
            case 5:
                document.getElementById(target + "_status").setAttribute( "onclick", "changeStatus('robot', 'Searching', 'slateblue')");
                test = -1;
            break;
        }
        test++;
    }
}

function increment(target) {
    if(target == 'can') {
        cans++;
        document.getElementById("can_quantity").innerHTML = cans;
    } else {
        bottles++;
        document.getElementById("bottle_quantity").innerHTML = bottles;
    }
}