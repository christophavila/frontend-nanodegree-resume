/*
This is empty on purpose! Your code to build the resume will go here.
*/

//--------------------------------------
// OBJECTS
//--------------------------------------
var bio = {
    'name': 'Christopher Avila',
    'role': 'ICT Consultant',
    'contacts': {
        'mobile': '+5215561049160',
        'email': 'avila.christopher@gmail.com',
        'github': 'christophavila',
        'twitter': '@christophavila',
        'location': 'Mexico'
    },
    'welcomeMessage': 'Welcome to my site that has been built during Udacity FE-ND',
    'skills': [
        'programming', 'html/css/js', 'IMS', 'UnifiedComms'
    ],
    'biopic': 'images/mypic.jpg'
};

var education = {
    'schools': [{
        'name': 'UNAM',
        'location': 'Mexico',
        'degree': 'Bachelor Degree',
        'majors': ['Computer Systems Engineer'],
        'dates': '2001',
        'url': 'https://unam.mx'
    }, {
        'name': 'ITAM',
        'location': 'Mexico',
        'degree': 'Master Degree',
        'majors': ['Computer Science'],
        'dates': '2015',
        'url': 'https://itam.mx'
    }],
    'onlineCourses': [{
        'title': 'FrontEnd NanoDegree',
        'school': 'Udacity',
        'date': '2016',
        'url': 'https://udacity.com'
    }]
};

var work = {
    "jobs": [{
        "employer": "Ericsson",
        "title": "CSI Senior",
        "location": "San Jose",
        "dates": "2001-2005",
        "description": "Install/Integ/Config: IMS Solutions (EMM2.1, IMT3.0), 3PP. Oracle 10g, BEA WLSS, Intervoice and TexttoSpeech"
    }, {
        "employer": "Ericsson",
        "title": "SA Experienced",
        "location": "Stockholm",
        "dates": "2005-2012",
        "description": "Develop Ericsson IMS Solution Architectures. \(Nodes involved are ICS5.0, MTAS2.0, VPNBT1.0\)"
    }, {
        "employer": "BroadSoft",
        "title": "Senior Sales Engineer",
        "location": "Washington DC",
        "dates": "20012-2015",
        "description": "Supporting pre-sales technical activities forBroadSoft’s flagship Unified Communications Platforms and Mobile Applications (BroadWorks, BroadCloud, BroadTouch)"
    }]
};

var projects = {
    "projects": [{
        "title": "IN Network",
        "dates": "2001-2005",
        "description": "Create IP-BB for IN",
        "images": ["images/pro1.jpg"]
    }, {
        "title": "IMS Mexico",
        "dates": "2006-2012",
        "description": "CDeploy first IMS Network",
        "images": ["images/pro2.jpg"]
    }, {
        "title": "CUAD",
        "dates": "2012-2015",
        "description": "UC Communications",
        "images": ["images/pro3.jpg"]
    }]
};


//--------------------------------------
// BIO
//--------------------------------------
bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    //var contactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var contactEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var contactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var contactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var contactLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var bioPicture = HTMLbioPic.replace('%data%', bio.biopic);
    var bioMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

    $("#header").prepend(formattedRole).prepend(formattedName);

    $("#topContacts").append(contactEmail)
        .append(contactTwitter)
        .append(contactGithub)
        .append(contactLocation);

    $("#footerContacts").append(contactEmail)
        .append(contactTwitter)
        .append(contactGithub)
        .append(contactLocation);

    $("#header").prepend(bioPicture).append(bioMessage);

    if (bio.skills.lenght !== 0) {

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

bio.display();

//--------------------------------------
// WORK
//--------------------------------------
// --->Recommendation
//
// for (var key in arr) {
//    console.log(arr[key]);
// }
// The correct way to do the iteration is code below,
//
// var len = array.length;
// for (var i = 0; i < len; i++) {
//     console.log(array[i]);
// }
// or...
// array.forEach(function(val) {
//     console.log(val);
// });

//function displayWork() {
work.display = function() {

    //    for (job in work.jobs) {
    var len = work.jobs.length;
    for (var i = 0; i < len; i++) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
//displayWork ();
work.display();

//--------------------------------------
// PROJECTS
//--------------------------------------
projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedProTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProTitle);

        var formattedProDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProDates);

        var formattedProDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProDesc);

        if (projects.projects[project].images.lenght !== 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }

    }
};
projects.display();

//--------------------------------------
// EDUCATION.SCHOOLS
//--------------------------------------
//function displaySchools() {
education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var eduSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var eduSchoolDeg = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var eduSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var eduSchoolLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var eduSchoolMaj = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

        $(".education-entry:last").append(eduSchoolName)
            .append(eduSchoolDates)
            .append(eduSchoolLoc)
            .append(eduSchoolMaj);
    }
};
//displaySchools ();
education.display();

//--------------------------------------
// EDUCATION.ONLINE
//--------------------------------------

//function displayOnline() {
education.display = function() {
    for (course in education.onlineCourses) {

        var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
        var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

        $(".education-entry:last").append(HTMLonlineClasses)
            .append(onlineTitle)
            .append(onlineDates)
            .append(onlineURL);
    }
};
//displayOnline();
education.display();

//--------------------------------------
// InternationalizationButtonFunction
//--------------------------------------
function inName(name) {

    // Needs to be added because of error:
    // "Uncaught TypeError: Cannot read property ‘trim’ of undefined"
    // https://discussions.udacity.com/t/uncaught-typeerror-cannot-read-property-trim-of-undefined/41446/5
    var name = $('#name').html();

    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];

}

//$("#main").append(internationalizeButton);

//--------------------------------------
// How to see the Map
//--------------------------------------
$("#mapDiv").append(googleMap);