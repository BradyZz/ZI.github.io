const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const resumeInput = document.getElementById('resume');
const coverLetterInput = document.getElementById('cover-letter');
const jobPositionSelect = document.getElementById('job-position');
const submitButton = document.querySelector('input[type="submit"]');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    // Read the file and encode it in base64
    const file = resumeInput.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        const dataUrl = reader.result;
        const base64 = dataUrl.split(',')[1];

        // Include the file in the email body
        const ebody = `
            <h1>Name: </h1>${nameInput.value}
            <br>
            <h1>Email: </h1>${emailInput.value}
            <br>
            <h1>Job Title: </h1>${jobPositionSelect.options[jobPositionSelect.selectedIndex].text}
            <br>
            <h1>Cover Letter: </h1>${coverLetterInput.value}
            <br>
            <h1>Resume: </h1><a href="data:application/octet-stream;base64,${base64}" download="${file.name}">${file.name}</a>
        `;
        
        // Send the email
        Email.send({
            SecureToken: "f515aaa0-8d8e-4bdd-8616-4cb981920589", //add your token here
            To: 'zabbrady@gmail.com',
            From: 'zabbrady@gmail.com',
            Subject: `Application for ${jobPositionSelect.options[jobPositionSelect.selectedIndex].text} position from ${nameInput.value}`,
            Body: ebody
        }).then(message => alert(message));
    };
});



function showJobDescription() {
    var dropdown = document.getElementById("job-position");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    
    var jobDescription = "";
    
    switch (selectedOption) {
      case "software-engineer":
        jobDescription = "As a Software Engineer in our robotics startup, you will design, develop, and test software applications and systems that power our robots. You will work closely with the Robotics and Mechanical Engineering teams to integrate software into the hardware, and collaborate with Data Scientists to ensure that our robots can perform complex tasks. Key skills for this role include proficiency in programming languages such as C++, Python, and ROS, as well as experience with robotics software frameworks like Robot Operating System (ROS) and Gazebo.";
        break;
      case "roboticist":
        jobDescription = "As a Roboticist in our startup, you will design and develop robots from concept to production. You will work closely with the Mechanical Engineering team to design the robot's mechanical structure and with the Software Engineering team to integrate software into the hardware. You will also be responsible for testing the robots to ensure they meet performance standards. Key skills for this role include experience in robotics design, proficiency in 3D design software like SolidWorks or Fusion360, and knowledge of materials, manufacturing techniques, and electromechanical systems.";
        break;
      case "electrical-engineer":
        jobDescription = "As an Electrical Engineer in our robotics startup, you will design, develop, and test electrical systems and equipment that power our robots. You will work closely with the Robotics and Mechanical Engineering teams to integrate electronics into the hardware, and collaborate with Software Engineers to ensure that our robots can perform complex tasks. Key skills for this role include proficiency in circuit design, experience with microcontrollers and embedded systems, and knowledge of power electronics, sensors, and control systems.";
        break;
      case "mechanical-engineer":
        jobDescription = "As a Mechanical Engineer in our robotics startup, you will design and develop mechanical systems and equipment that make up our robots. You will work closely with the Robotics and Electrical Engineering teams to integrate mechanical systems into the hardware, and collaborate with Roboticists to ensure that our robots can perform complex tasks. Key skills for this role include proficiency in 3D design software like SolidWorks or Fusion360, knowledge of materials and manufacturing techniques, and experience in prototyping and testing.";
        break;
      case "systems-analyst":
        jobDescription = "As a Systems Analyst in our robotics startup, you will design and develop computer systems and software that power our robots. You will work closely with the Robotics and Software Engineering teams to integrate software into the hardware, and collaborate with Data Scientists to ensure that our robots can perform complex tasks. Key skills for this role include proficiency in programming languages like C++, Python, and Java, knowledge of software architecture and design patterns, and experience in testing and debugging complex software systems.";
        break;
      case "data-scientist":
        jobDescription = "As a Data Scientist in our robotics startup, you will analyze and interpret complex data sets from our robots, and use your findings to develop insights that inform business decisions. You will work closely with the Robotics and Software Engineering teams to design experiments and collect data, and collaborate with Systems Analysts to build predictive models and algorithms. Key skills for this role include proficiency in statistical analysis, experience with data mining and machine learning tools like Python and TensorFlow, and knowledge of robotics and sensor data.";
        break;
      default:
        jobDescription = "";
    }
    
    document.getElementById("job-description").innerHTML = jobDescription;
  }
  
  
/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SMTPJS TUT</title>
    <script src="https://smtpjs.com/v3/smtp.js"></script>
</head>
<body>
    <form id="submit" action="#">
        <input type="text" id="fname" placeholder="Enter First Name...">
        <input type="text" id="lname" placeholder="Enter Last Name...">
        <input type="submit" value="Send">
    </form>

    
    
    <script src="./index.js"></script>
</body>
</html>*/


