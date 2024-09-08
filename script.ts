function onSubmit(){
    const userConfirmation = confirm("Are you sure you want to submit the form");
    if(userConfirmation){
        alert("Your form hhas been submit")
    }
  
}
function submitForm(): void {
    const resumeDown = document.getElementById('resumeForm') as HTMLFormElement | null;
    
    if (!resumeDown) {
        console.error('Form not found');
        return;
    }
    const formData = new FormData(resumeDown);
    let csvContent = "data:text/csv;charset=utf-8,Field,Value\n";
    
    formData.forEach((value, key) => {
        csvContent += `${key},${value}\n`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    
    link.href = encodedUri;
    link.download = 'resume.csv';
    
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);  
}
