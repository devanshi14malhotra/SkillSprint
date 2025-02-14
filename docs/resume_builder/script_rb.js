document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const summary = document.getElementById("summary").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;

    const resumeContent = `
        <h3>${fullName}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h4>Professional Summary</h4>
        <p>${summary}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
        <h4>Work Experience</h4>
        <p>${experience}</p>
    `;

    document.getElementById("resumeContent").innerHTML = resumeContent;
    document.getElementById("resumeOutput").classList.remove("hidden");
});

// PDF Download functionality
document.getElementById("downloadResume").addEventListener("click", function() {
    const content = document.getElementById("resumeContent").innerHTML;
    const blob = new Blob([content], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "resume.html";
    a.click();
});
