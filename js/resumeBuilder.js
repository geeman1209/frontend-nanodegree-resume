var bio = {
  "name": "Gabriel Abreu",
  "role": "Web Developer",
  "contactinfo": {
    "mobile": "860-967-5555",
    "email": "gabreu554@gmail.com",
    "github": "geeman1209",
    "location": "Hartford, CT"
  },

  "welcomeMsg": "Welcome to my resume!",
  "skills": ["JavaScript", "jQuery", "HTML", "CSS "],
  "bioPic": "images/fry.jpg"
}

bio.display = function() {
  var name = "Gabriel Abreu"
  var formattedName = HTMLheaderName.replace("%data%", name);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contactinfo.mobile);
  var formattedemail = HTMLemail.replace("%data%", bio.contactinfo.email);
  var formattedgithub = HTMLgithub.replace("%data%", bio.contactinfo.github);
  var formattedlocation = HTMLlocation.replace("%data%", bio.contactinfo.location);
  var role = "Web Developer"
  var formmattedRole = HTMLheaderRole.replace("%data%", role);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
  
  $("#header").prepend(formmattedRole);
  $("#header").prepend(formattedName);
  $("#header").prepend(formattedBioPic);
  $("#header").append(formattedWelcomeMsg);

  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedemail);
  $("#topContacts").append(formattedgithub);
  $("#topContacts").append(formattedlocation);

  $('#footerContacts').append(formattedMobile);
  $('#footerContacts').append(formattedemail);
  $('#footerContacts').append(formattedgithub);
  $('#footerContacts').append(formattedlocation);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
  }
};

var work = {
  "jobs": [{
    "title": "Academic Computing Specialist I",
    "employer": "University of Connecticut Health Center",
    "years": "May 2014-Present",
    "location": "Farmington, CT",
    "description": "Provide primary hardware/software support for faculty/students in teaching classrooms by delivering technical assistance, support, and advice to users. Participate in project planning sessions in order to establish standard student desktop and security levels. Install and test classroom software to assist in the diagnosis and resolution of hardware/software problems. Troubleshoot and help UCHC students maintain their encrypted laptops. Maintain working knowledge of software and all center materials to assist students/staff with computing needs."
  }, {
    "title": "Computer Support Specialist",
    "employer": "University of Connecticut Health Center",
    "years": "July 2013-May 2014",
    "location": "Farmington, CT",
    "description": "Implemented basic cross platform support for both Windows and Macintosh computers. Provided troubleshoot support for wireless technology and mobile devices. Assisted in encrypting student laptops. Performed regular computer maintenance duties such as anti-virus scans and updated software in the Computer Education Center."
  }, {
    "title": "Education Support Specialist",
    "employer": "Connecticut Teachers Tutoring",
    "years": "January 2012-May 2012",
    "location": "Watertown, CT",
    "description": "Planned and developed learning strategies using computer based educational platforms. Provided educational and technical support to students preparing to take state examinations in math and ELA. Created learning goals and strategies using various blended learning techniques including on-line learning."
  }]
}

work.display = function() {
  for (job in work.jobs) {

    $("#workExperience").append(HTMLworkStart);

    var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
    var formattedworkCity = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;

    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedworkCity);
    $(".work-entry:last").append(formattedworkDates);
    $(".work-entry:last").append(formattedworkDescription);

  }
};

var education = {
  "schools": [{
    "name": "Wesleyan University",
    "degree": "Bachelor of Arts",
    "major": "Government",
    "years": "Aug. 2005 - May 2009",
    "location": "Middletown, CT"
  }],

  "online_courses": [{
    "title": "Intro to HTML and CSS",
    "school": "Udacity",
    "dates": "Sept. 2015",
    "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304-nd/"
  }, {
    "title": "Responsive Web Design Fundamentals",
    "school": "Udacity",
    "dates": "Sept. 2015",
    "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893-nd/"
  }, {
    "title": "Responsive Images",
    "school": "Udacity",
    "dates": "Sept. 2015 - Oct. 2015",
    "url": "https://www.udacity.com/course/responsive-images--ud882-nd/"
  }, {
    "title": "JavaScript Fundamentals",
    "school": "Udacity",
    "dates": "Oct. 2015",
    "url": "https://www.udacity.com/course/javascript-basics--ud804-nd/"
  }, {
    "title": "Front-End Web Developer",
    "school": "Udacity",
    "dates": "Sept. 2015 - Present",
    "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  }]

};

education.display = function() {
  for (school in education.schools) {
    var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedSchoolDegree = formattedSchool + formattedDegree;
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedSchoolDegree);
    $(".education-entry:last").append(formattedSchoolLocation);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedMajor);
  }

  $("#education").append(HTMLonlineClasses);
  $("#education").append(HTMLschoolStart);

  for (onlineCourse in education.online_courses) {
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online_courses[onlineCourse].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online_courses[onlineCourse].school);
    var formattedOnlineTitleOnlineSchool = formattedOnlineTitle + formattedOnlineSchool;

    $(".education-entry:last").append(formattedOnlineTitleOnlineSchool);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.online_courses[onlineCourse].dates);

    $(".education-entry:last").append(formattedOnlineDates);

    var formattedURL = HTMLonlineURL.replace("%data%", education.online_courses[onlineCourse].url);

    $(".education-entry:last").append(formattedURL);

  }
};

var project = {
  "projects": [{
    "title": "Portfolio",
    "dates": "2015",
    "description": "This is the first project that focuses on html, css, and specifically bootstrap to make a responsive website.",
    "images": ["images/Portfolio.png"],
  }, {

    "title": "Resume Project",
    "dates": "2015",
    "description": "A simple that utilizes basic JavaScript to assist in the building process. The project focuses on constructing objects and functions using JavaScript.",
    "images": ["images/Resume.png"],
  }]
}

projects.display = function() {
  for (var i = 0; i < project.projects.length; i++) {
    var proj = project.projects[i];
    $("#projects").append(HTMLprojectStart);

    var formattedprojectTitle = HTMLprojectTitle.replace("%data%", proj.title);
    $(".project-entry:last").append(formattedprojectTitle);
    var formattedprojectDates = HTMLprojectDates.replace("%data%", proj.dates);
    $(".project-entry:last").append(formattedprojectDates);
    var formattedprojectDescription = HTMLprojectDescription.replace("%data%", proj.description);
    $(".project-entry:last").append(formattedprojectDescription);
    var formattedprojectImages = HTMLprojectImage.replace("%data%", proj.images);
    $(".project-entry:last").append(formattedprojectImages);
  }
}



$(window).scroll(function () {
  if ($(window).scrollTop() > 230)
  {
    $('#nav-bar').addClass('fixed-nav');
  }
  else
  {
    $('#nav-bar').removeClass('fixed-nav');
  }
});

$("#mapDiv").append(googleMap);

work.display();
bio.display();
projects.display();
education.display();