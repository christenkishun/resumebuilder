document.getElementById('submit1').addEventListener('click', validate);

function validate(){
    var email = document.getElementById("email").value;
    
    var text;
    
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      alert(text);
      return false;
    }
    else{
        class resume {
            constructor(name, email, address, city, state, zip, webLink, twitLink, gitLink, summary, 
                recentComp, jobTitle, jobStart, jobEnd, respons1, recentComp2, jobTitle2, jobStart2, jobEnd2, respons2, recentComp3, jobTitle3, jobStart3, jobEnd3, respons3, designSkills, writingSkills, ethicSkills, backEnd, frontEnd, school1, degree1, schoolStart1, schoolEnd1, school2, degree2, schoolStart2, schoolEnd2, references){
                    this.name = name;
                    this.email = email;
                    this.address = address;
                    this.city = city;
                    this.state = state;
                    this.zip = zip;
                    this.webLink = webLink;
                    this.twitLink = twitLink;
                    this.gitLink = gitLink;
                    this.summary = summary;
                    this.recentComp = recentComp;
                    this.jobTitle = jobTitle;
                    this.jobStart = jobStart;
                    this.jobEnd = jobEnd;
                    this.respons1 = respons1;
                    this.respons2 = respons2;
                    this.recentComp2 = recentComp2;
                    this.jobTitle2 = jobTitle2;
                    this.jobStart2 = jobStart2;
                    this.jobEnd2 = jobEnd2;
                    this.recentComp3 = recentComp3;
                    this.jobTitle3 = jobTitle3;
                    this.jobStart3 = jobStart3;
                    this.jobEnd3 = jobEnd3;
                    this.respons3 = respons3;
                    this.designSkills = designSkills;
                    this.writingSkills = writingSkills;
                    this.ethicSkills = ethicSkills;
                    this.backEnd = backEnd;
                    this.frontEnd = frontEnd;
                    this.school1 = school1;
                    this.degree1 = degree1;
                    this.schoolStart1 = schoolStart1;
                    this.schoolEnd1 = schoolEnd1;
                    this.school2 = school2;
                    this.degree2 = degree2;
                    this.schoolStart2 = schoolStart2;
                    this.schoolEnd2 = schoolEnd2;
                    this.references = references;
                }
        }
          
              
        
        
                    fullName = document.getElementById("name").value;
                    email = document.getElementById('email').value;
                    address = document.getElementById('address').value;
                    city = document.getElementById('city').value;
                    state = document.getElementById('state').value;
                    zip = document.getElementById('zip').value;
                    twitLink = document.getElementById('twitLink').value;
                    webLink = document.getElementById('webLink').value;
                    gitLink = document.getElementById('gitLink').value;
                    summary = document.getElementById('summary').value;
                    recentComp = document.getElementById('recentComp').value;
                    jobTitle = document.getElementById('jobTitle').value;
                    jobStart = document.getElementById('jobStart').value;
                    jobEnd = document.getElementById('jobEnd').value;
                    respons1 = document.getElementById('respons1').value;
                    respons2 = document.getElementById('respons2').value;
                    recentComp2 = document.getElementById('recentComp2').value;
                    jobTitle2 = document.getElementById('jobTitle2').value;
                    jobStart2 = document.getElementById('jobStart2').value;
                    jobEnd2 = document.getElementById('jobEnd2').value;
                    recentComp3 = document.getElementById('recentComp3').value;
                    jobTitle3 = document.getElementById('jobTitle3').value;
                    jobStart3 = document.getElementById('jobStart3').value;
                    jobEnd3 = document.getElementById('jobEnd3').value;
                    respons3 = document.getElementById('respons3').value;
                    designSkills = document.getElementById('designSkills').value;
                    writingSkills = document.getElementById('writingSkills').value;
                    ethicSkills = document.getElementById('ethicSkills').value;
                    backEnd = document.getElementById('backEnd').value;
                    frontEnd = document.getElementById('frontEnd').value;
                    school1 = document.getElementById('school1').value;
                    degree1 = document.getElementById('degree1').value;
                    schoolStart1 = document.getElementById('schoolStart1').value;
                    schoolEnd1 = document.getElementById('schoolEnd1').value;
                    school2 = document.getElementById('school2').value;
                    degree2 = document.getElementById('degree2').value;
                    schoolStart2 = document.getElementById('schoolStart2').value;
                    schoolEnd2 = document.getElementById('schoolEnd2').value;
                    references = document.getElementById('references').value;
        
        
                myResume = ("<html>\n<head>\n<title>Generate a Resume</title>");
                // link Css to output page
                myResume = ('<link rel="stylesheet" href="css/style.css">' + "</head>\n<body>");
                myResume += ('<section>\n<div>\n<h1 id="heroName">' + fullName +"</h1>\n</div>");
                myResume += ('<div>\n<h2 id="byLine">' + jobTitle +"</h2>\n<br>\n</div>");
                myResume += ("<div class='socials'>"+ email + " " + " " + " " + " " + twitLink + " " + " " + " " + " " + gitLink  + " " + " " + " " + " " + webLink + "</div>\n<br>\n<br>");
                myResume += ('<div class="side">' + address + " " + " " +  city + " " + " " + state + " " + " " + zip + "</div>");
                myResume += ("<div>\n<h3 id='title'>" + "< Summary />" +"</h3>\n</div>");
                myResume += ("<div id='sum'>" + summary +"</div>");
                myResume += ('<div id="lineDivider"></div>');
                myResume += ("<div id='floatLeft'>\n<h3>" + "< Experience />" +"</h3>");
                myResume += ("<div class='jobComp'>"+ recentComp + "</div>");
                myResume += ("<div class='jobTitle'>"+ jobTitle + "</div>");
                myResume += ("<div class='jobTitle'>\n<p>"+ "Start Date: </p>" + jobStart + "<p> End Date: </p>" + jobEnd + "</div>");
                myResume += ("<div class='jobTitle'>"+ respons1 + "</div>");
                myResume += ("<div class='jobComp'>"+ recentComp2 + "</div>");
                myResume += ("<div class='jobTitle'>"+ jobTitle2 + "</div>");
                myResume += ("<div class='jobTitle'>\n<p>"+ "Start Date: </p>" + jobStart2 + "<p> End Date: </p>" + jobEnd2 + "</div>");
                myResume += ("<div class='jobTitle'>"+ respons2 + "</div>");
                myResume += ("<div class='jobComp'>"+ recentComp3 + "</div>");
                myResume += ("<div class='jobTitle'>"+ jobTitle3 + "</div>");
                myResume += ("<div class='jobTitle'>\n<p>"+ "Start Date: </p>" + jobStart3 + "<p> End Date: </p>" + jobEnd3 + "</div>");
                myResume += ("<div class='jobTitle'>"+ respons3 + "</div>\n</div>");
                myResume += ("<div id='asideRight'>\n<h3>" + "< Skills />" +"</h3>");
                myResume += ("<h5>" + "< Design Skills />" +"</h5>\n");
                myResume += (designSkills);
                myResume += ("<h5>" +"< Writing skills />" + "</h5>");
                myResume += (writingSkills);
                myResume += ("<h5>" + "< Work Ethic Skills />" + "</h5>");
                myResume += (ethicSkills);
                myResume += ("<br>\n<div id='spacer'>\n<h3>" +"< Languages />" + "</h3>\n</div>");
                myResume += ("<h5>" + "< Back End />" +"</h5>\n");
                myResume += (backEnd);
                myResume += ("<h5>" +"< Front skills />" + "</h5>");
                myResume += (frontEnd);
                myResume += ("<div class='spacer'>\n<h3>" +"< Education />" + "</h3>\n</div>");
                myResume += ("<div class='jobComp'>"+ school1 + "</div>");
                myResume += ("<div class='jobTitle'>"+ degree1 + "</div>");
                myResume += ("<div class='jobTitle'>\n<p>"+ "Start Date: </p>" + schoolStart1 + "<p> End Date: </p>" + schoolEnd1 + "</div>");
                myResume += ("<div class='jobComp'>"+ school2 + "</div>");
                myResume += ("<div class='jobTitle'>"+ degree2 + "</div>");
                myResume += ("<div class='jobTitle'>\n<p>"+ "Start Date: </p>" + schoolStart2 + "<p> End Date: </p>" + schoolEnd2 + "</div>");
                myResume += ("<div class='spacer'>\n<h3>" +"< References />" + "</h3>\n</div>");
                myResume += (references + "</div>");
                myResume += ("</body>\n</html>");
            
                flyWindow = window.open('about:blank','myPop','width=1200,height=800,left=200,top=200');
                flyWindow.document.write(myResume);
                }

    }


/*

class resume {
    constructor(name, email, address, city, state, zip, webLink, twitLink, gitLink, summary, 
        recentComp, jobTitle, jobStart, jobEnd, respons1, recentComp2, jobTitle2, jobStart2, jobEnd2, respons2, recentComp3, jobTitle3, jobStart3, jobEnd3, respons3, designSkills, writingSkills, ethicSkills, backEnd, frontEnd, school1, degree1, schoolStart1, schoolEnd1, school2, degree2, schoolStart2, schoolEnd2, references){
            this.name = name;
            this.email = email;
            this.address = address;
            this.city = city;
            this.state = state;
            this.zip = zip;
            this.webLink = webLink;
            this.twitLink = twitLink;
            this.gitLink = gitLink;
            this.summary = summary;
            this.recentComp = recentComp;
            this.jobTitle = jobTitle;
            this.jobStart = jobStart;
            this.jobEnd = jobEnd;
            this.respons1 = respons1;
            this.respons2 = respons2;
            this.recentComp2 = recentComp2;
            this.jobTitle2 = jobTitle2;
            this.jobStart2 = jobStart2;
            this.jobEnd2 = jobEnd2;
            this.recentComp3 = recentComp3;
            this.jobTitle3 = jobTitle3;
            this.jobStart3 = jobStart3;
            this.jobEnd3 = jobEnd3;
            this.respons3 = respons3;
            this.designSkills = designSkills;
            this.writingSkills = writingSkills;
            this.ethicSkills = ethicSkills;
            this.backEnd = backEnd;
            this.frontEnd = frontEnd;
            this.school1 = school1;
            this.degree1 = degree1;
            this.schoolStart1 = schoolStart1;
            this.schoolEnd1 = schoolEnd1;
            this.school2 = school2;
            this.degree2 = degree2;
            this.schoolStart2 = schoolStart2;
            this.schoolEnd2 = schoolEnd2;
            this.references = references;
        }
}


document.getElementById("submit1").addEventListener("click", submit);
    function submit() {

      


            fullName = document.getElementById("name").value;
            email = document.getElementById('email').value;
            address = document.getElementById('address').value;
            city = document.getElementById('city').value;
            state = document.getElementById('state').value;
            zip = document.getElementById('zip').value;
            twitLink = document.getElementById('twitLink').value;
            webLink = document.getElementById('webLink').value;
            gitLink = document.getElementById('gitLink').value;
            summary = document.getElementById('summary').value;
            recentComp = document.getElementById('recentComp').value;
            jobTitle = document.getElementById('jobTitle').value;
            jobStart = document.getElementById('jobStart').value;
            jobEnd = document.getElementById('jobEnd').value;
            respons1 = document.getElementById('respons1').value;
            respons2 = document.getElementById('respons2').value;
            recentComp2 = document.getElementById('recentComp2').value;
            jobTitle2 = document.getElementById('jobTitle2').value;
            jobStart2 = document.getElementById('jobStart2').value;
            jobEnd2 = document.getElementById('jobEnd2').value;
            recentComp3 = document.getElementById('recentComp3').value;
            jobTitle3 = document.getElementById('jobTitle3').value;
            jobStart3 = document.getElementById('jobStart3').value;
            jobEnd3 = document.getElementById('jobEnd3').value;
            respons3 = document.getElementById('respons3').value;
            designSkills = document.getElementById('designSkills').value;
            writingSkills = document.getElementById('writingSkills').value;
            ethicSkills = document.getElementById('ethicSkills').value;
            backEnd = document.getElementById('backEnd').value;
            frontEnd = document.getElementById('frontEnd').value;
            school1 = document.getElementById('school1').value;
            degree1 = document.getElementById('degree1').value;
            schoolStart1 = document.getElementById('schoolStart1').value;
            schoolEnd1 = document.getElementById('schoolEnd1').value;
            school2 = document.getElementById('school2').value;
            degree2 = document.getElementById('degree2').value;
            schoolStart2 = document.getElementById('schoolStart2').value;
            schoolEnd2 = document.getElementById('schoolEnd2').value;
            references = document.getElementById('references').value;
            
// email validation


        myResume = ("<html>\n<head>\n<title>Generate a Resume</title>");
        // link Css to output page
        myResume = ('<link rel="stylesheet" href="css/style.css">' + "</head>\n<body>");
        myResume += ('<section>\n<div>\n<h1 id="heroName">' + fullName +"</h1>\n</div>");
        myResume += ('<div>\n<h2 id="byLine">' + jobTitle +"</h2>\n<br>\n</div>");
        myResume += ("<div class='socials'>"+ email + " " + " " + " " + " " + twitLink + " " + " " + " " + " " + gitLink  + " " + " " + " " + " " + webLink + "</div>\n<br>\n<br>");
        myResume += ('<div class="side">' + address + " " + " " +  city + " " + " " + state + " " + " " + zip + "</div>");
        myResume += ("<div>\n<h3 id='title'>" + "< Summary />" +"</h3>\n</div>");
        myResume += ("<div id='sum'>" + summary +"</div>");
        myResume += ('<div id="lineDivider"></div>');
        myResume += ("<div id='floatLeft'>\n<h3>" + "< Experience />" +"</h3>");
        myResume += ("<div class='jobComp'>"+ recentComp + "</div>");
        myResume += ("<div class='jobTitle'>"+ jobTitle + "</div>");
        myResume += ("<div class='jobTitle'>\n<p>"+ "Start Date: </p>" + jobStart + "<p> End Date: </p>" + jobEnd + "</div>");
        myResume += ("<div class='jobTitle'>"+ respons1 + "</div>");
        myResume += ("<div class='jobComp'>"+ recentComp2 + "</div>");
        myResume += ("<div class='jobTitle'>"+ jobTitle2 + "</div>");
        myResume += ("<div class='jobTitle'>\n<p>"+ "Start Date: </p>" + jobStart2 + "<p> End Date: </p>" + jobEnd2 + "</div>");
        myResume += ("<div class='jobTitle'>"+ respons2 + "</div>");
        myResume += ("<div class='jobComp'>"+ recentComp3 + "</div>");
        myResume += ("<div class='jobTitle'>"+ jobTitle3 + "</div>");
        myResume += ("<div class='jobTitle'>\n<p>"+ "Start Date: </p>" + jobStart3 + "<p> End Date: </p>" + jobEnd3 + "</div>");
        myResume += ("<div class='jobTitle'>"+ respons3 + "</div>\n</div>");
        myResume += ("<div id='asideRight'>\n<h3>" + "< Skills />" +"</h3>");
        myResume += ("<h5>" + "< Design Skills />" +"</h5>\n");
        myResume += (designSkills);
        myResume += ("<h5>" +"< Writing skills />" + "</h5>");
        myResume += (writingSkills);
        myResume += ("<h5>" + "< Work Ethic Skills />" + "</h5>");
        myResume += (ethicSkills);
        myResume += ("<br>\n<div id='spacer'>\n<h3>" +"< Languages />" + "</h3>\n</div>");
        myResume += ("<h5>" + "< Back End />" +"</h5>\n");
        myResume += (backEnd);
        myResume += ("<h5>" +"< Front skills />" + "</h5>");
        myResume += (frontEnd);
        myResume += ("<div class='spacer'>\n<h3>" +"< Education />" + "</h3>\n</div>");
        myResume += ("<div class='jobComp'>"+ school1 + "</div>");
        myResume += ("<div class='jobTitle'>"+ degree1 + "</div>");
        myResume += ("<div class='jobTitle'>\n<p>"+ "Start Date: </p>" + schoolStart1 + "<p> End Date: </p>" + schoolEnd1 + "</div>");
        myResume += ("<div class='jobComp'>"+ school2 + "</div>");
        myResume += ("<div class='jobTitle'>"+ degree2 + "</div>");
        myResume += ("<div class='jobTitle'>\n<p>"+ "Start Date: </p>" + schoolStart2 + "<p> End Date: </p>" + schoolEnd2 + "</div>");
        myResume += ("<div class='spacer'>\n<h3>" +"< References />" + "</h3>\n</div>");
        myResume += (references + "</div>");
        myResume += ("</body>\n</html>");
    
        flyWindow = window.open('about:blank','myPop','width=1200,height=800,left=200,top=200');
        flyWindow.document.write(myResume);
        }
*/
