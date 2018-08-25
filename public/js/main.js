// Regular map
function regular_map() {
    var var_location = new google.maps.LatLng(12.3375, 75.8069);

    var var_mapoptions = {
        center: var_location,
        zoom: 11
    };

    var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "Karnataka"
    });
}


// Initialize maps
google.maps.event.addDomListener(window, 'load', regular_map);

$(document).ready(function() {
    $('.mdb-select').material_select();
});

function getDetails(det_element) {
    var elem = $('#' + det_element + '_details_div');
    elem.css('display', $('#' + det_element)[0].checked == false ? 'none' : 'block');
}

function sendRequestHelp() {
    var formData = $('#request_form input');
    var reqData = {};
    for(var i = 0; i < formData.length; i++) {
        var elem = formData[i];
        reqData[elem.name] = elem.type == "checkbox" ? elem.checked : elem.value;
    }
    reqData.district = $('#request_form select')[0].value;
    console.log(reqData);
    $.post("/api/request_help", reqData, function(data, status){
        console.log(data);
    });
}
