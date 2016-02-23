/*
This is empty on purpose! Your code to build the resume will go here.
*/

//--------------------------------------
// Ejercicio_1
//--------------------------------------
// $("#main").append("Chris Avila");
//--------------------------------------


//--------------------------------------
// Ejercicio_2
//--------------------------------------
// var awesomeThoughts = "I am ChrisAvila and I am AWESOME!";
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);
// console.log(awesomeThoughts);
// console.log(funThoughts);
//--------------------------------------


//--------------------------------------
// Ejercicio_3
//--------------------------------------
// var name = "Chris Avila";
// var formattedName = HTMLheaderName.replace("%data%", name);
// var role = "Web Developer";
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);
//
// var skills = ["smart", "programming", "html", "css", "js"];
// $("#main").append(skills);
// $("#main").append(skills[0]);
// $("#main").append(skills.lenght);
//--------------------------------------


//--------------------------------------
// Ejercicio_4
//--------------------------------------
//var bio = {
//	"name": "Chris Avila",
//	"role": "Solutions Architect",
//
//	"contacts": {
//		"mobile": "52-1-55-61049160",
//		"email": "avila.christopher@gmail.com",
//		"github": "christophavila",
//		"location": "Mexico",
//		},
//
//	"welcomeMessage": "Bienvenidos a mi sitio",
//	"skills": [
//		"smart", "programming", "html", "css", "js"
//		],
//	"bioPic": "images/fry.jpg"
//};
//
// $("#main").append(bio.name);
// bio.city =  "CDMX";
// bio.twitter = "@christophavila";
// $("#main").append(bio.city);
// $("#main").append(bio["city"]);
//--------------------------------------

//--------------------------------------
// Ejercicio_5
//--------------------------------------
// var work = {};
// work.position = "FE-ND Student";
// work.employer = "Udacity";
// work.years = 0.5;
//
// var education = {};
// education["name"] = "UNAM";
// education["years"] = "1997-2001";
// education["city"] = "Mexico";
//
// $("#main").append(work["position"]);
// $("#main").append(education.name);
//--------------------------------------


//--------------------------------------
// Ejercicio_6
//--------------------------------------
//var education = {
//	"schools": [{
//		"name": "UNAM",
//		"city": "Mexico",
//		"degree": "BA",
//		"major": ["CompEng"],
//		"dates": 2001
//	}, {
//		"name": "ITAM",
//		"city": "Mexico",
//		"degree": "Master",
//		"major": ["ComSci"],
//		"dates": 2015
//	}],
//	"onlineCourses": [{
//		"name": "JavaScript",
//		"school": "Udacity",
//		"degree": "FE-ND",
//		"major": ["WebDeveloper"],
//		"dates": 2016
//	}]
//}
// $("#main").append(work["position"]);
// $("#main").append(education.name);
//--------------------------------------



//--------------------------------------
// OBJECTS
//--------------------------------------
var bio = {
	"name": "Christopher Avila",
	"role": "ICT Consultant",
	"welcomeMessage": "Welcome to my Site that has been built in Udacity FE-ND",
	"contacts": {
		"mobile": "52-1-55-61049160",
		"email": "avila.christopher@gmail.com",
		"github": "christophavila",
		"twitter": "@christophavila",
		"location": "Mexico"
	},
	"skills": [
		"programming", "html/css/js", "IMS", "UnifiedComms"
	],
	"bioPic": "images/mypic.jpg"
};

var education = {
	"schools": [{
		"name": "UNAM",
		"location": "Mexico",
		"degree": "BA",
		"major": ["CompEng"],
		"dates": 2001,
		"url": "https://unam.mx"
	}, {
		"name": "ITAM",
		"location": "Mexico",
		"degree": "Master",
		"major": ["ComSci"],
		"dates": 2015,
		"url": "https://itam.mx"
	}],
	"onlineCourses": [{
		"name": "JavaScript",
		"location": "San Francisco",
		"degree": "FE-ND",
		"major": ["WebDeveloper"],
		"dates": 2016,
		"url": "https://udacity.com"
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

 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

 var contactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
 var contactEmail = HTMLemail.replace("%data%", bio.contacts.email);
 var contactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
 var contactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
 var contactLocation = HTMLlocation.replace("%data%", bio.contacts.location);

 var bioPicture = HTMLbioPic.replace('%data%', bio.bioPic);
 var bioMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

 $("#header").append(contactMobile);
 $("#header").append(contactEmail);
 $("#header").append(contactTwitter);
 $("#header").append(contactGithub);
 $("#header").append(contactLocation);

 $('#header').append(bioPicture);
 $('#header').append(bioMessage);



//--------------------------------------
// BIO.SKILLS
//--------------------------------------
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


//--------------------------------------
// JOBS
//--------------------------------------

function displayWork() {
 for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
 }
}

displayWork ();

//--------------------------------------
// PROJECTS
//--------------------------------------

projects.display = function() {
	for (project in projects.projects) {
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
}
projects.display ();

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
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];

}

$("#main").append(internationalizeButton);

//--------------------------------------
// How to see the Map
//--------------------------------------
$("#mapDiv").append(googleMap);

