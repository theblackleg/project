var btn = document.querySelector(".sai");
var getText = document.querySelector(".getText");
var content = document.querySelector(".getcontent");
var editorContent = document.querySelector(".editor");

//LOADER FUNCTION
function loading() {
    document.getElementById("particles-js").classList.add("fadeout");
    document.getElementById("mainPage").classList.add("fadein");
    document.getElementById("mainPage").style.display = "block";
    setTimeout(() => {
        document.getElementById("particles-js").style.display = "none";
    }, 3000);
}

//MAIN PAGE FUNCTIONS
btn.addEventListener("click", function () {
    var s = editorContent.innerHTML;
    content.style.display = "block";
    content.textContent = s;
});

getText.addEventListener("click", function () {
    const old = editorContent.textContent;
    content.style.display = "block";
    content.textContent = old;
});

//button-textbox-radio creation
function buttoncreation(type) {
    var btnelement = document.createElement("input");
    var value = prompt("Enter the value");
    var name = prompt("Enter the name");
    btnelement.setAttribute("type", type);
    btnelement.setAttribute("value", value);
    btnelement.setAttribute("name", name);
    editorContent.appendChild(btnelement);
}

//Link
function link() {
    var url = prompt("Enter the URL");
    document.execCommand("createLink", false, url);
}
//Copy
function copy() {
    document.execCommand("copy", false, "");
}
//Color change
function changeColor() {
    var color = prompt("Enter your color in hex ex:#f1f233");
    document.execCommand("foreColor", false, color);
}

//UPLOAD IMAGE 
function getImage() {
    var dataURI = window.URL.createObjectURL(document.getElementById("file").files[0]);
    const img = document.createElement("img");
    img.src = dataURI;
    img.setAttribute("id", "img" + Math.floor(Math.random() * 100) + 1);//id=img109 id =img208
    img.setAttribute("onclick", "imgSize(this.id);");
    editorContent.appendChild(img);
}
//UPLOAD VIDEO
function getVideo() {
    var videoURI = window.URL.createObjectURL(document.getElementById("file1").files[0]);
    const vid = document.createElement("video");
    vid.src = videoURI;
    vid.controls = true;
    vid.setAttribute("width", "320");
    vid.setAttribute("height", "240");
    editorContent.appendChild(vid);
}

//UPLOAD AUDIO
function getAudio() {
    var audioURI = window.URL.createObjectURL(document.getElementById("file2").files[0]);
    const audio = document.createElement("audio");
    audio.src = audioURI;
    audio.controls = true;
    editorContent.appendChild(audio);
}

//TABLE CREATION  
function tablecreation() {

    var noOfRows = 0;
    document.getElementById("displayText").innerText = "Enter the number of rows";
    modal2.style.display = "block";
    document.getElementById("userSubmit").addEventListener("click", () => {
        noOfRows = document.getElementById("userInput").value;
        if (isNaN(noOfRows) ) {
            return alert("Enter a Valid Number");
        }
        var t = document.createElement('table');
        var row;
        var col;
        t.setAttribute("border", "3");
        t.setAttribute("width", "150");
        t.setAttribute("height", "150");
        for (var itr = 0; itr < noOfRows; itr++) {
            row = document.createElement('tr');
            for (var itr1 = 0; itr1 < noOfRows; itr1++) {
                col = document.createElement('td');
                row.appendChild(col);
            }
            row.appendChild(col);
            t.appendChild(row);
        }
        editorContent.appendChild(t);
        document.getElementById("userInput").value = null;
        return;
    });
    return;
}

//Print html code
function printMe() {
    if (confirm("Check your Content before print")) {
        var filename = prompt("Enter the filename");
        divHtml = editorContent.innerHTML;
        var link = document.createElement("a");
        mimeType = 'text/plain';
        link.setAttribute('download', filename);
        link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(divHtml));
        link.click();
    }
}


//Print text as content editable
function printMeText() {
    if (confirm("Check your Content before print")) {
        var filename = prompt("Enter the filename");
        divHtml = editorContent.innerHTML;
        var link = document.createElement("a");
        mimeType = 'text/html';
        link.setAttribute('download', filename);
        link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(divHtml));
        link.click();
    }
}

//RESIZE IMAGE
var thatImage;
function imgSize(id) {
    thatImage = id;
    modal.style.display = "block";
}
function smallImg() {
    document.getElementById(thatImage).removeAttribute("class");
    document.getElementById(thatImage).classList.toggle("smallImgSize");
}
function medImg() {
    document.getElementById(thatImage).removeAttribute("class")
    document.getElementById(thatImage).classList.toggle("medImgSize");
}
function larImg() {
    document.getElementById(thatImage).removeAttribute("class")
    document.getElementById(thatImage).classList.toggle("larImgSize");
}

//MODALS
var modal = document.getElementById('myModal');
var modal2 = document.getElementById("myModal2");
var span = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[0]
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
span2.onclick = function () {
    modal2.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal || event.target == modal2) {
        modal.style.display = "none";
        modal.style.display = "none";
    }
}
