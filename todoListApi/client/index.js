function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

function showTasks() {
    var xhr = createCORSRequest('GET', 'http://localhost:3000/tasks');

    xhr.send();

    xhr.onload = function () {
        var responseText = xhr.responseText;
        console.log(responseText);

        for (var i = 0; ; i++) {
            var obj = JSON.parse(responseText);
            var data = obj[i];
            console.log(data);
            var name = '<div>Task is - ' + data.name + '</div>';
            var status = '<div>Status is - ' + data.status + '</div>';
            var Created_date = '<div>Date is - ' + data.Created_date + '</div>';

            document.getElementById('app').innerHTML += name;
            document.getElementById('app').innerHTML += status;
            document.getElementById('app').innerHTML += Created_date;
        }

    };

    xhr.onerror = function () {
        console.log('There was an error!');
    };
}

function addTask() {

    var xhr = createCORSRequest('POST', 'http://localhost:3000/tasks');

    var body = 'name' + encodeURIComponent(name);

    xhr.open("POST", 'http://localhost:3000/tasks', true)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(xhr.responseText);
        }
        ;
    };

    xhr.send(body);

}

function delTask() {

}