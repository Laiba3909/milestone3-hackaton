function onSubmit() {
    var userConfirmation = confirm("Are you sure you want to submit the form");
    if (userConfirmation) {
        alert("Your form hhas been submit");
    }
}
function submitForm() {
    var resumeDown = document.getElementById('resumeForm');
    if (!resumeDown) {
        console.error('Form not found');
        return;
    }
    var formData = new FormData(resumeDown);
    var csvContent = "data:text/csv;charset=utf-8,Field,Value\n";
    formData.forEach(function (value, key) {
        csvContent += "".concat(key, ",").concat(value, "\n");
    });
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement('a');
    link.href = encodedUri;
    link.download = 'resume.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
