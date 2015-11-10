/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = {
    "jobs": [
        {
            "employer": "Mi Le No.1 Middle School",
            "title": "High School",
            "location": "Mi Le, Honghe",
            "datesWorked": 3,
            "description": "It sucks. I hate this rubbish school."
        },
        {
            "employer": "Xidian University",
            "title": "BA",
            "location": "Xi'an",
            "datesWorked": 4,
            "description": "It's nice and I miss it."
        },
        {
            "employer": "Yunan University",
            "title": "Master degree",
            "location": "Kunming",
            "datesWorked": 3,
            "description": "It's OK"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "prj01",
            "datesWorked": 0.6,
            "description": "This is project 1.",
            "images": "images/fry.jpg"
        },
        {
            "title": "prj02",
            "datesWorked": 0.3,
            "description": "This is project 2.",
            "images": "images/197x148.gif"
        }
    ]
};

var bio = {
    "name": "Fan Hang-Kai",
    "role": "student",
    "welcomeMessage": "Hello there.",
    "contacts": {
        "mobile": "135-1101-0101",
        "email": "fanoze@hotmail.com",
        "github": "fanoze",
        "twitter": "@fanoze",
        "location": "Wuhua region,Kunming,Yunnan Province"
    },
    "skills": [
        "C/C++",
        "Java",
        "Linux",
        "JavaScript",
        "HTML",
        "Python"
    ]
};

var education = {
    "schools": [
        {
            "name": "Xidian University",
            "location": "Xi'an",
            "degree": "BA",
            "majors": [
                "CS"
            ],
            "dates": 4,
            "url": "http://www.xidian.edu.cn/"
        },
        {
            "name": "Yunnan University",
            "location": "Kunming",
            "degree": "Master",
            "majors": [
                "CS"
            ],
            "dates": 3,
            "url": "http://www.ynu.edu.cn/"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basic",
            "school": "Udacity",
            "dates": "3 Weeks",
            "url": "https://www.udacity.com/course/viewer#!/c-ud804"
        },
        {
            "title": "Intro to Parallel Programming",
            "school": "Udacity",
            "dates": "7 Weeks",
            "url": "https://www.udacity.com/course/viewer#!/c-cs344"
        }
    ]
};

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }
}
