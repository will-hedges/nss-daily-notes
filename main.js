/*
  Define a variable named `notes` and assign a value of an empty array
*/
let notes = [];

/*
  Fill the array with several starter objects that have
  the following properties.
      * id (number)
      * text (string)
      * author (string)
      * date (string)
      * topics (array of strings)
*/
const note1 = {
  id: 1,
  text: "Don't forget to get milk on the way home please.",
  author: "Jordan",
  date: "11/01/22",
  topics: ["shopping", "todo"],
};

const note2 = {
  id: 2,
  text: "Code is there to explain the comments to the computer.",
  author: "Andy Harris",
  date: "11/07/22",
  topics: ["programming", "code", "algorithms"],
};

const note3 = {
  id: 3,
  text: "Do y'all want to meet up at Tailgate tonight? They're doing Halloween Trivia!",
  author: "Cole",
  date: "10/31/22",
  topics: ["friends", "beer", "trivia", "activities", "social"],
};

/*
  Either define the objects within the initial array or
  use the .push() method to add them after initialization.
*/
notes = [note1, note2, note3];

// add 3 more notes to the array using the .push() method
const note4 = {
  id: "4",
  text: "Can you come over and feed Mimi tonight?",
  author: "Emily",
  date: "11/08/22",
  topics: ["family", "pets", "dog", "favor"],
};

const note5 = {
  id: "5",
  text: "What night do you guys want to rehearse this week?",
  author: "Rico",
  date: "11/04/22",
  topics: ["friends", "band", "social"],
};

const note6 = {
  id: 6,
  text: "I'm on my way home from work!",
  author: "Jordan",
  date: "08/07/22",
  topics: ["family", "commute", "spouse"],
};

notes.push(note4);
notes.push(note5);
notes.push(note6);

for (const note of notes) {
  console.log(note.text);
}

console.log("*** All Note Topics ***");
for (const note of notes) {
  for (const topic of note.topics) {
    console.log(topic);
  }
}

console.log("*** Average Topics Per Note ***");
// add up the total # of topics in a variable
let totalTopics = 0;
for (const note of notes) {
  totalTopics += note.topics.length;
}

// divide by the total # of notes
let averageTopics = totalTopics / notes.length;
console.log(averageTopics);

const printNotesWithTopic = (topic) => {
  filteredNotes = [];
  // iterate the notes array and check if the criteria is in the topics array property
  for (const note of notes) {
    if (note.topics.includes(topic)) {
      // If the array does contain the criteria, add the current object to the filteredNotes array.
      filteredNotes.push(note);
    }
  }
  console.log(`*** Notes with the ${topic} topic ***`);
  console.log(filteredNotes);
  return;
};

printNotesWithTopic("friends");

console.log("*** Note Articles ***");

// this is my original approach, which is fine, but relies on copy pasting from the console
/*
for (const note of notes) {
  // open the article tag & log the note content
  console.log(`<article>\n\t${note.text}`);
  // iterate over note.topics, wrap each topic in a <section> tag, and log it
  for (const topic of note.topics) {
    console.log(`\t<section>${topic}</section>`);
  }
  // close the article tag
  console.log("</article>");
}
*/

// start a string to store your whole HTML string
allHTML = "";

// iterate over all of the notes
for (const note of notes) {
  /* 
    open the article tag,
    add the note text on a new line and indented
  */
  allHTML += "<article>" + "\n\t" + note.text;

  /* 
    iterate over all of the note.topics,
    and add them on their own lines + indented
    wrapped in section tags
  */
  for (const topic of note.topics) {
    allHTML += "\n\t" + `<section>${topic}</section>`;
  }

  // close the article tag, and newline for the next article
  allHTML += "\n</article>\n";
}

// log the full HTML string
console.log(allHTML);
