/**
 * Created by khoale on 9/17/16.
 */
// this is the Course Selection for Freshmen CS major

$(document).ready(function () {
    var CS100 = new Course('CS100', 'easy', 1, false);
    var CS310 = new Course('CS310', 'Challenging', 8, false);

    var freshmanFall = [
        ['Class', 'Difficulty'], ['CS 100', 1], ['MATH 198', 4]
    ];

    var count = 7;
    var ranking = new Array(0);
    var courseName = new Array(0);
    var numberofCourse;
    var courseCatalog = new Array(0);
    courseCatalog.push(CS100);
    courseCatalog.push(CS310);
    numberofCourse = 2;

    //databases
    var courseCatalog = [
        new Course ("CS 100: Computer Science Seminar", "Orientation to the University experience and the computer science program. An overview of computer science and the history of computing.", 1, 1),
        new Course ("CS 170: Introduction to Computer Science I", "Introduction to key ideas of computing and programming. Basic concepts, variables, functions, loops, algorithms, data types, graphics. Brief introduction to computing ideas such as data representation, hardware, operating systems, information systems, artificial intelligence, networks, and the world wide web. ", 4, 4),
        new Course ("CS 172: Ada Fundamentals", "An introductory course to Ada for those who learned Python in CS 170.", 3, 1),
        new Course ("CS 180: Foundations of Computer Science I", "An introduction to computer science and programming. Discussion of the algorithmic approach to problem solving and the use of a high-level language to design and implement problem solution. Includes a one-hour lab. CS 180 may not be taken for credit after successfully completing CS 170.", 4, 4),
        new Course ("CS 181: Foundations of Computer Science II", "A continuation of Foundations of Computer Science I. An introduction to traditional simple data structures including multidimensional arrays, stacks, queues, binary trees in an object-oriented programming context. Emphasis on generic structures and collections. May not be taken for credit before successfully completing CS 180.", 5, 3),
        new Course ("CS 191: Computing Structures", "Uses computer as a tool to introduce discrete structures and techniques for computing. Analysis of algorithms, methods of proof, counting techniques, and discrete probability. May not be taken for credit before successfully completing CS 170 or CS 180 as well as MATH 186.", 5, 3),
        new Course ("CS 250: Systems Programming", "An introduction to systems level programming utilizing both assembly and high level languages. May not be taken for credit before successfully completing CS 172 or CS 181.", 5, 3),
        new Course ("CS 291: Models of Computation", "Logic: propositional calculus, first-order predicate calculus. Formal reasoning: natural deduction, resolution. Applications to program correctness and automatic reasoning. Formal models of computation: regular languages, finite automata, grammars, pushdown automata, Turing machines, classes P and NP, uncomputability, the halting problem. May not be taken for credit before successfully completing CS 191 and MATH 198.", 6, 3),
        new Course ("CS 310: Data Structures and Algorithms", "A continuation of the study of abstract data types and their implementations in a high-level language. Topics include lists, trees, priority queues, and graphs as well as efficient searching and sorting algorithms. May not be taken for credit before successfully completing CS 172 or CS 181 and CS 191.", 10, 3),
        new Course ("CS 315: Internet Programming", "Teaches programming concepts that are particularly relevant to building large applications for the World Wide Web. This is primarily a programming course, so significant programming experience is required. Possible topics include: HTML, Perl, Javascript, Java applets, servlets, Java Server pages, and XML. May not be taken unless junior status is achieved. May not be taken for credit before successfully completing CS 171 or CS 181.", 6, 3),
        new Course ("CS 325: Introduction to Bioinformatics", "A hands-on, project-oriented interdisciplinary introduction to molecular bioinformatics. The course takes the definition of bioinformatics to be the science of examining the structure, function, and evolution of genes and proteins through the use of computational analysis, statistics, visualization, and pattern recognition. May not be taken for credit before successfully completing CS 310 or BIOL 300.", 7, 3),
        new Course ("CS 330: Computer Architecture and Organization", "An introduction to the levels of hardware and software in a computer system. Topics include digital logic, addressing, primary and secondary storage, microcode, interrupts, and alternate architectures. May not be taken for credit before successfully completing CS 250.", 8, 3),
        new Course ("CS 345: Cyberethics", "Study of the social, ethical, and professional issues of computing and the Internet. May not be taken unless junior status is achieved.", 6, 3),
        new Course ("CS 370: Software Engineering", "The study of software life cycles, development methodology process improvement, and project management, with emphasis on an engineering approach to the software development process. Relies on a project-based approach for applying software engineering principles. May not be taken unless junior status is achieved. May not be taken for credit before successfully completing CS 310.", 7, 3),
        new Course ("CS 380: Programming Languages", "Formal language concepts, and structures of algorithmic languages. A study of the variety of programming languages and techniques used to reason about programming. May not be taken for credit before successfully completing CS 310.", 8, 3),
        new Course ("CS 390: Operating Systems", "A survey of the characteristics of current popular computer operating systems as well as a detailed examination of the functions that operating systems perform and how those functions may be performed. May not be taken for credit before successfully completing CS 330.", 8, 3),
        new Course ("CS 420: Compilers", "Principles of compiler design, including structure of compilers, lexical analysis, parsing, type analysis, code generation, and optimization. May not be taken for credit before successfully completing CS 250, CS 291, and CS 310.", 9, 3),
        new Course ("CS 430: Database Systems", "Fundamentals of current design approaches in database systems, including extensive work with a commercially available system. May not be taken unless junior status is achieved. May not be taken for credit before successfully completing CS 310.", 7, 3),
        new Course ("CS 435: Parallel and Distributed Processing", "An introduction to parallel and distributed processing and programming concepts and techniques. Course content will include discussions of different types of parallel and distributed machines and machine models, data parallelism, the design and analysis of parallel algorithms, and the development of parallel programs. May not be taken for credit before successfully completing CS 310 and CS 330.", 9, 3),
        new Course ("CS 460: Computer Graphics", "An introduction to basic topics including graph plotting, windows, viewports and clipping, graphics hardware and software, interactive devices and techniques, polygons and geometric transformations, projections, modeling and object hierarchy, hidden surfaces, shading models, ray tracing, and intensity and color. May not be taken for credit before successfully completing CS 250 and CS 310.", 7, 3),
        new Course ("CS 470: Computer Networks", "An introduction to current computer communication technology including protocol structures and overview of physical media usage. Additional topics include privacy, security, data representation, and data compression. May not be taken unless junior status is achieved. May not be taken for credit before successfully completing CS 170 and CS 180.", 7, 3),
        new Course ("CS 480: Artificial Intelligence", "Overview of some basic concepts of artificial intelligence. Designed to give insight into areas of active research and application. Programming in a language commonly used for artificial intelligence applications. Typical topics covered include expert systems, knowledge engineering, learning, natural language understanding, symbolic computation, automated reasoning, and neural networks. May not be taken unless junior status is achieved. May not be taken for credit before successfully completing CS 170 and CS 180.", 7, 3),
        new Course ("CS 490: Automata Theory and Formal Languages", "Finite automata, regular and context free grammars, the pumping theorem, Turing machines, undecidability, LR grammars, complexity theory, NP-completeness. May not be taken for credit before successfully completing CS 291.", 7, 3),
        new Course ("CS 495: Senior Computer Science Seminar", "Topics designed to aid preparation for employment, graduate study, and life as a computer science professional. May not be taken unless senior status is achieved.", 7, 1),
        new Course ("ENG 190: Writing as Critical Thinking", "Writing as Critical Thinking requires students to read, think, and write carefully and critically, using instructor and peer response as well as self-assessment for revision. Students generate topics that are of interest to them as well as to the communities to which they belong, at Truman State University and beyond.", 4, 3),
        new Course ("COMM 170: Public Speaking", "This course develops an understanding of the fundamental principles and processes of human communication. Students practice and refine their skills as public speakers through frequent in-class presentations, critiques, and discussions.", 3, 3),
        new Course ("POL 011: Missouri Statute", "Required by the state of Missouri.", 4, 1),
        new Course ("JINS 307: Friendship", "Friendship in the contemporary U.S. has been called “the neglected relationship” because few social ceremonies mark the beginning, development, or ending of friendships as significant relationships despite the reality that many of us identify it as the relationship most necessary for survival and happiness. Seminar members will scrutinize the nature and varieties of friendship from a number of perspectives (philosophy, psychology, sociology).", 7, 3),
        new Course ("GEOG 211: World Geography", "An overview of evolving global regions using a variety of experiential and analytical approaches to discover and interpret our world.", 5, 3),
        new Course ("ART 224: Non-Western Art", "A survey of the arts of Asia, Africa, and the indigenous peoples of the Pacific and Americas.", 6, 3),
        new Course ("STAT 190: Basic Statistics", "An introduction to descriptive and inferential statistics with practical applications.", 4, 3),
        new Course ("STAT 290: Statistics", "An introduction to descriptive and inferential statistics with practical applications and an introduction to probability including both discrete and continuous models.", 7, 3),
        new Course ("HLTH 195 & 196: Lifetime Health & Fitness", "The purpose of this course is to integrate material from human physiology, psychology, sociology, and nutrition to present an interdisciplinary framework for disease prevention and health promotion. The course focus is to promote a behavioral lifestyle change in which students integrate into their lives patterns of physical activity, health, and well-being.", 4, 2),
        new Course ("HLTH 198 & 198L: Personal Health & Fitness", "An online alternative to HLTH 195 & 196.", 3, 3),
        new Course ("SPAN 101: Elementary Spanish I", "Basic grammar structures, together with vocabulary, idioms and accurate pronunciation, are presented and practiced in communicative contexts that mirror Hispanic culture. Emphasis is placed on the development of the four skills (speaking, listening, reading and writing) and on expanding cultural awareness. Three classroom hours per week plus one peer learning session are required.", 4, 3),
        new Course ("SPAN 330: Spanish Grammar and Composition ", "This course helps the student to reinforce and expand upon knowledge of verb conjugations, vocabulary, idiomatic expressions and syntax. It develops strategies for various modes of writing through the composition/revision process. ", 7, 3),
        new Course ("FREN 120: Elementary French I", "Beginning practice in understanding, speaking, reading, and writing French in the context of French and Francophone cultures. Three class sessions plus an additional peer teaching session per week are required. Supplemental work online or in the Language Learning Center is required.", 5, 3),
        new Course ("FREN 320: French Composition and Conversation", "Using literary and non-fiction texts as well as film and songs, students improve their ability to speak and write for interpersonal, interpretive, and presentational purposes. Formal compositions are required. Additional work using Internet media may be included. The course includes the study of vocabulary and the structure of French.", 8, 3),
        new Course ("THEA 275: Introduction to the Theatre Arts", "A general introduction to the art of theatre, surveying basic categories and structures of dramatic literature and theatre history as met by principles and problems of theatre production.", 3, 4),
        new Course ("ART 332: Baroque Art", "This course covers the history of art in Europe from 1600-1700; issues such as the effect of the Catholic Reformation on art, changes in patronage and the art market, styles, materials and individual artists will be examined.", 6, 3),
        new Course ("ENG 206: Popular Genres", "An exploration and evaluation of a popular genre in a single semester, with appropriate background readings and criticism. Students read and write about a variety of works in the selected genre. Potential topics include but are not limited to, science fiction, fantasy, mystery, horror, and the graphic novel. May be repeated under different topics. ", 4, 3),
        new Course ("ENG 365: Folklore", "After a brief history of folklore as an academic discipline, this course focuses on methods of fieldwork and its analysis.", 6, 3),
        new Course ("HIST 104: United States History I", "A survey of major themes and events in American history from European settlement though Reconstruction.", 3, 3),
        new Course ("NASC 400: The History of Science to 1700", "Introduction to basic topics in the history of science from ancient Greece to Isaac Newton. Students will read a variety of primary and secondary sources covering three time periods: the origins of western science in Greece and the Middle East, the nature of science in medieval Islam and medieval Europe, and the Scientific Revolution in Europe (1500-1700). Emphasis is placed on the historical, philosophical, and religious influences on the emergence of western science. Previous knowledge of science or history is helpful, but not necessary.", 8, 3),
        new Course ("PHRE 185: Exploring Religions", "Analyzes religion and its roles in the human cultures of the world with emphasis on major living religions.", 4, 3),
        new Course ("PHRE 301: Christianity", "An intensive study of the Christian tradition, with special attention given to themes, figures, and developments of major importance for the history and contemporary state of Christianity, such as the Trinity, Thomas Aquinas, and the Reformation.", 5, 3),
        new Course ("MATH 198: Analytical Geometry & Calculus I", "Functions, limits, continuity, derivatives, definite integrals, exponentials, logarithms, and applications.", 6, 3),
        new Course ("MATH 263: Analytical Geometry & Calculus II", "Transcendental functions, techniques and applications of integration, improper integrals, infinite series, topics from analytic geometry, polar coordinates, vectors and vector-valued functions.", 9, 3),
        new Course ("PHYS 185: College Physics I", "College Physics I is the first semester of a year-long introduction to the fundamentals of physics, beginning with classical (Newtonian) physics. It requires extensive use of algebra and trigonometry, and pairs discussion of theoretical models with laboratory investigations of basic physical concepts. Students will learn about Newtonian mechanics, including rotational motion; momentum, energy, and the power of conservation laws; basic thermal physics and thermodynamic principles; and fluids.", 5, 3),
        new Course ("PHYS 246: Astronomy I", "Qualitative and quantitative introduction to the development of astronomy which includes the contributions made by early astronomers, celestial mechanics, time, electromagnetic radiation, telescopes and astronomical instrumentation. Planets, planet motions, stellar motions, smaller solar system objects and the motions of these objects both apparent and real will be covered. Laboratory emphasis will be astronomical observations with telescopes, and during poor seeing conditions analysis of data collected by professional astronomers.", 5, 3),
        new Course ("BIOL 100: Biology", "General theme is similarities in living systems as viewed at various levels – the genetic code, energy production, homeostasis, and adaptations for survival. The scientific method as a mode of inquiry will be presented and used in laboratory investigations. (This course may not be used as biology elective by a biology major.)", 5, 3),
        new Course ("AGSC 100: Food, Agriculture, and the Environment", "A multidisciplinary study of the structure and function of agricultural systems and of their impact on society and the environment. Includes laboratory.", 2, 3),
        new Course ("POL 171: Introduction to Political Science", "An overview of basic concepts, principles, approaches and methods of the discipline representing the social scientific mode of inquiry. Exposes the student to national, comparative, and international politics as well as political thought.", 4, 3),
        new Course ("PSYC 166: General Psychology", "A survey of behavioral principles. Topics include human development, personality, learning and thinking, psychological testing, mental health, therapy, and social behavior.", 5, 3)
    ];
    
    for (var i = 0; i <= courseCatalog.length; i++) {
        var html = '<li class="ui-state-default" id="' + courseCatalog[i].getName() +'"> ' + courseCatalog[i].getName() + ' </li>';
        document.getElementById('sortable1').innerHTML += html;
    }
    
    // add the required courses for freshmen
    var i = 0;
    dragProcess();

    function dragProcess(){
        $("#sortable2").sortable({
            update: function (event, ui) {
                // var order = $(this).data();
                // alert($(event.relatedTarget)).data();
                // var number = ui.item.index();
//                for (j = 0; j <= courseCatalog.length; j++) {
//                    console.log(ui.item);
////                    if $(ui.item).attr('id') == courseCatalog[j].getName() {
//                        var n = ui.courseCatalog[j].getDifficulty();
//                        courseName[i] = ui.courseCatalog[j].getName();
//                        ranking[i] = ui.courseCatalog[j].getDifficulty();
//                    window.alert(n+ " "+  ui.courseCatalog[j].getName()+" "+ ui.courseCatalog[j].getDifficulty(); )
//                    //}
//                }
//                var n = ui.item.data("level");
//                courseName[i] = ui.item.data("name");
//                ranking[i] = ui.item.data("level");
//                i++;
//                count+=n;
//                $("#totalScore").text(count);
//                numberofCourse++;
//                updateGraph();
                
                var n = ui.
            }
        });
    }

    function updateGraph() {

        if (numberofCourse == 7) window.alert("Reach maximum number of classes per semester");
        google.charts.load('current', {
            'packages': ['corechart']
        });

        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable(freshmanFall);
            for(s = 0; s < ranking.length; s++){
                data.addRow([''+courseName[s], ranking[s]]);
            }
            var options = {
                title: 'Effort proportion for each class',
                pieHole: 0.4,
                'tooltip' : {
  					text: 'percentage'
				}
            };

            var chart = new google.visualization.PieChart(document.getElementById('piechart'));

            chart.draw(data, options);
        }
    }


   function printArray() {
       window.alert(courseName.toString());
       window.alert(ranking.toString());
   }

  $("#maxGPA").click(function () {
      document.getElementById("cs330").style.display="none";
      document.getElementById("cs310").style.display="none";
      document.getElementById("cs345").style.display="none";
      document.getElementById("cs315").style.display="none";
      document.getElementById("cs325").style.display="none";
      document.getElementById("cs370").style.display="none";
      document.getElementById("cs380").style.display="none";
      document.getElementById("cs420").style.display="none";
      document.getElementById("cs435").style.display="none";
      document.getElementById("cs390").style.display="none";
  });

    $("#even").click(function () {
      document.getElementById("cs330").style.display="none";
      document.getElementById("cs310").style.display="none";
      document.getElementById("cs345").style.display="none";
      document.getElementById("cs315").style.display="none";
      document.getElementById("cs325").style.display="none";
      document.getElementById("cs370").style.display="none";
      document.getElementById("cs380").style.display="none";
      document.getElementById("cs420").style.display="none";
      document.getElementById("cs435").style.display="none";
      document.getElementById("cs390").style.display="none";
    });

    $("#einstein").click(function () {
      document.getElementById("cs330").style.display="none";
      document.getElementById("cs310").style.display="none";
      document.getElementById("cs345").style.display="none";
      document.getElementById("cs315").style.display="none";
      document.getElementById("cs325").style.display="none";
      document.getElementById("cs370").style.display="none";
      document.getElementById("cs380").style.display="none";
      document.getElementById("cs420").style.display="none";
      document.getElementById("cs435").style.display="none";
      document.getElementById("cs390").style.display="none";
    });



});

function  Course (name, description, difficulty, taken, credit) {
    this.name = name;
    this.description = description;
    this.difficulty  = difficulty;
    this.credit = credit;
    this.taken = false;
    this.getName = function () {
        return this.name;
    };
    this.getDifficulty = function () {
        return this.difficulty;
    };
    this.getDescription = function () {
        return this.description;
    };
}