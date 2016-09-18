//This is a sample Course class

function Course (name, difficulty) {
    this.name = name;
    this.difficulty = difficulty;
    this.taken = false;
	this.prerequisites = [];
}

Course.prototype = {
    constructor: Course,
    getName:function ()  {
        return this.name;
    },
    getDifficulty:function ()  {
        return this.difficulty;
    },
    getTaken:function ()  {
        return this.taken;
    },
	setTaken:function (newTaken) {
		this.taken = newTaken;
	},
	setPrerequisites:function (oldCourse) {
		this.prerequisites = oldCourse;
	}
};

var courseList = [
	new Course ("CS 100: Computer Science Seminar", 1, 1),
	new Course ("CS 170: Introduction to Computer Science I", 4),
	new Course ("CS 172: Ada Fundamentals", 3, 1),
	new Course ("CS 180: Foundations of Computer Science I", 4, 4),
	new Course ("CS 181: Foundations of Computer Science II", 5, 3),
	new Course ("CS 191: Computing Structures", 5, 3),
	new Course ("CS 250: Systems Programming", 5, 3),
	new Course ("CS 291: Models of Computation", 6, 3),
	new Course ("CS 310: Data Structures and Algorithms", 10, 3),
	new Course ("CS 315: Internet Programming", 6, 3),
	new Course ("CS 325: Introduction to Bioinformatics", 7, 3),
	new Course ("CS 330: Computer Architecture and Organization", 8, 3),
	new Course ("CS 345: Cyberethics", 6, 3),
	new Course ("CS 370: Software Engineering", 7, 3),
	new Course ("CS 380: Programming Languages", 8, 3),
	new Course ("CS 390: Operating Systems", 8, 3),
	new Course ("CS 420: Compilers", 9, 3),
	new Course ("CS 430: Database Systems", 7, 3),
	new Course ("CS 435: Parallel and Distributed Processing", 9, 3),
	new Course ("CS 460: Computer Graphics", 7, 3),
	new Course ("CS 470: Computer Networks", 7, 3),
	new Course ("CS 480: Artificial Intelligence", 7, 3),
	new Course ("CS 490: Automata Theory and Formal Languages", 7, 3),
	new Course ("CS 495: Senior Computer Science Seminar", 7, 1),
	new Course ("Writing as Critical Thinking", 4),
	new Course ("Public Speaking", 3, 3),
	new Course ("Statistics", 5, 3),
	new Course ("Health & Fitness", 2, 3),
	new Course ("Foreign Language", 5, 3),
	new Course ("JINS", 7, 3),
	new Course ("Intercultural", 5, 3),
	new Course ("Missouri Statute", 4, 3),
	new Course ("Literature", 5, 3),
	new Course ("Visual & Performance Arts", 3, 3),
	new Course ("Philosophy & Religion", 4, 3),
	new Course ("Math", 6, 3),
	new Course ("Physical Science", 5, 3),
	new Course ("Life Science", 5, 3),
	new Course ("Social Science", 4,3 )
];

//for (i = 0; i < courseList; i++) { 
    //switch (courseList[i].getName.substring(0,6)) {
    //case "CS 181":
	//case "CS 191":
        
        //break;
    //case "CS 250":
	//case "CS 260":
		
        //break;
    //case "CS 310":
        
        //break;
    //case 3:
        //day = "Wednesday";
        //break;
    //case 4:
        //day = "Thursday";
        //break;
    //case 5:
        //day = "Friday";
        //break;
    //case 6:
        //day = "Saturday";
	//}
//}