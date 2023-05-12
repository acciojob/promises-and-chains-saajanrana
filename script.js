//your JS code here. If required.
function validateForm() {
    var age = document.getElementById('age').value;
    var name = document.getElementById('name').value;

    if (age === "" || name === "") {
        alert("Inputs cannot be empty!");
        return false;
    }

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (age > 18) {
                alert("Welcome, " + name + ". You can vote.");
                resolve();
            } else {
                alert("Oh sorry " + name + ". You aren't old enough.");
                reject();
            }
        }, 4000); // 4 seconds timeout
    });
}
