//Kim Rader MFA Thesis Kutztown University 2022
//Professor Josh Miller

let radio;
let positive;
let negative;
let neither;
let accepted;
let loving;
let excited;
let interested;
let confident;
let happy;
let afraid;
let sad;
let dislike;
let alone;
let angry;
let embarrassed;
let anxious;
let sleep;
let meal;
let water;
let exercise;
let outside;
let talk;
let submit;
let email;
let button;
let posaccepted;
let posloving;
let posexcited;
let posinterested;
let posconfident;
let poshappy;
let negafraid;
let negsad;
let negdislike;
let negalone;
let negangry;
let negembarrassed;
let mehindifferent;
let mehbored;
let mehnumb;
let mehwithdrawn;
let circles = true;
let squares = true;
let triangles = true;
let current;
let size = 90;
//lecoace = 100;
let rows = 10;
let columns = 10;
let minS = 20;
let anxiety;
var database;
var drawing = [];
let canvas;
let lastImage;
let caption;


//Using library minimalPerfectSquaredSquares by Tetsunori Nakayama https://github.com/tetunori/minimalPerfectSquaredSquares

//mpass variables
let MPASS;
let SQUARES;
const MPASS_MODES = [
  mPSS.tfTypeIdOriginal,
  mPSS.tfTypeIdRotate90,
  mPSS.tfTypeIdRotate180,
  mPSS.tfTypeIdRotate270,
  mPSS.tfTypeIdMirror,
  mPSS.tfTypeIdMirrorRotate90,
  mPSS.tfTypeIdMirrorRotate180,
  mPSS.tfTypeIdMirrorRotate270,
];

//random seed number
let SEED_NUM;

// set this to true when you're done asking questions
let questions = true;

function setup() {
  canvas = createCanvas(1080, 1080);
  background(255);
  strokeWeight(0);
  textSize(18);
  textStyle(BOLD);
  canvas.parent("canvascontainer");

  var saveButton = select("#saveButton");
  saveButton.mousePressed(saveDrawing);

  // Create mpss instance
  MPASS = new mPSS(allSize());

  Init();

  noStroke();

  //refresh color, seed number and square composite
  function Init() {
    randomSeed(); //reset seed number

    SEED_NUM = int(random(10000));

    const mode = random(MPASS_MODES);
    SQUARES = MPASS.getSquares(mode);
  }

  //Question 1
  radio = createRadio();
  radio.option(1, "Good Day");
  radio.option(2, "Bad Day");
  radio.option(3, "Neither");
  radio.style("width", "770px");
  radio.position(10, 40);

  //Question 2A
  positive = createRadio();
  positive.option(1, "Accepted/Valued");
  positive.option(2, "Loving");
  positive.option(3, "Excited");
  positive.option(4, "Interested");
  positive.option(5, "Confident");
  positive.option(6, "Happy");
  positive.style("width", "770px");
  positive.position(10, 115);
  positive.hide();

  //Question 2B
  negative = createRadio();
  negative.option(1, "Afraid");
  negative.option(2, "Sad");
  negative.option(3, "Dislike");
  negative.option(4, "Alone");
  negative.option(5, "Angry");
  negative.option(6, "Embarrassed");
  negative.style("width", "770px");
  negative.position(10, 115);
  negative.hide();

  //Question 2C
  neither = createRadio();
  neither.option(1, "Indifferent/Apathetic");
  neither.option(2, "Bored");
  neither.option(3, "Numb/Empty");
  neither.option(4, "Withdrawn/Distant");
  neither.style("width", "770px");
  neither.position(10, 115);
  neither.hide();

  //Question 3A
  accepted = createRadio();
  accepted.option(1, "Needed/Wanted");
  accepted.option(2, "Attractive");
  accepted.option(3, "Loved");
  accepted.option(4, "Cherished/Precious");
  accepted.option(5, "Important/Esteemed");
  accepted.option(6, "Popular/Admired");
  accepted.option(7, "Cooperative/Helpful");
  accepted.option(8, "Respected");
  accepted.style("width", "700px");
  accepted.position(10, 190);
  accepted.hide();

  //Question 3B
  loving = createRadio();
  loving.option(1, "Joyful");
  loving.option(2, "Thankful");
  loving.option(3, "Content");
  loving.option(4, "Tolerant");
  loving.option(5, "Caring");
  loving.option(6, "Committed");
  loving.option(7, "Accepting");
  loving.option(8, "Humble");
  loving.option(9, "Generous");
  loving.style("width", "770px");
  loving.position(10, 190);
  loving.hide();

  //Question 3C
  excited = createRadio();
  excited.option(1, "Amazed");
  excited.option(2, "Surprised");
  excited.option(3, "Energetic/Enthusiastic");
  excited.option(4, "Aroused");
  excited.option(5, "Moved");
  excited.option(6, "Expectant");
  excited.option(7, "Charged");
  excited.style("width", "770px");
  excited.position(10, 190);
  excited.hide();

  //Question 3D
  interested = createRadio();
  interested.option(1, "Sensitive/Responsive");
  interested.option(2, "Intrigued");
  interested.option(3, "Allured/Enticed");
  interested.option(4, "Intimate/Romantic");
  interested.option(5, "Attracted/Infatuated");
  interested.option(6, "Creative/Inspired");
  interested.option(7, "Curious");
  interested.option(8, "Playful");
  interested.style("width", "660px");
  interested.position(10, 190);
  interested.hide();

  //Question 3E
  confident = createRadio();
  confident.option(1, "Trusting");
  confident.option(2, "Positive");
  confident.option(3, "Fearless");
  confident.option(4, "Honest/Authentic");
  confident.option(5, "Optimistic");
  confident.option(6, "Bold/Brave");
  confident.option(7, "Powerful");
  confident.option(8, "Proud");
  confident.style("width", "770px");
  confident.position(10, 190);
  confident.hide();

  //Question 3F
  happy = createRadio();
  happy.option(1, "Joyful/Delighted");
  happy.option(2, "Euphoric/Elated");
  happy.option(3, "Cheerful/Playful");
  happy.option(4, "Content/Satisfied");
  happy.option(5, "Optimistic/Enthusiastic");
  happy.option(6, "Peaceful/Tranquil");
  happy.style("width", "700px");
  happy.position(10, 190);
  happy.hide();

  //Question 3G
  afraid = createRadio();
  afraid.option(1, "Helpless");
  afraid.option(2, "Threatened");
  afraid.option(3, "Confused");
  afraid.option(4, "Inferior/Insecure");
  afraid.option(5, "Worried/Anxious");
  afraid.option(6, "Stressed/Overwhelmed");
  afraid.option(7, "Apprehensive/Nervous");
  afraid.style("width", "700px");
  afraid.position(10, 190);
  afraid.hide();

  //Question 3H
  sad = createRadio();
  sad.option(1, "Depressed");
  sad.option(2, "Hurt");
  sad.option(3, "Bereft/Inconsolable");
  sad.option(4, "Melancholy/Sorrowful");
  sad.option(5, "Subdued/Gloomy");
  sad.option(6, "Aggrieved");
  sad.option(7, "Discouraged");
  sad.style("width", "800px");
  sad.position(10, 190);
  sad.hide();

  //Question 3I
  dislike = createRadio();
  dislike.option(1, "Dismissive/Disdainful");
  dislike.option(2, "Disgusted");
  dislike.option(3, "Suspicious");
  dislike.option(4, "Appalled");
  dislike.option(5, "Repelled/Loathing");
  dislike.option(6, "Skeptical/Disapproving");
  dislike.style("width", "770px");
  dislike.position(10, 190);
  dislike.hide();

  //Question 3J
  alone = createRadio();
  alone.option(1, "Distant/Withdrawn");
  alone.option(2, "Lonely");
  alone.option(3, "Excluded");
  alone.option(4, "Fragile/Vulnerable");
  alone.option(5, "Rejected/Friendless");
  alone.option(6, "Desolate");
  alone.style("width", "770px");
  alone.position(10, 190);
  alone.hide();

  //Question 3K
  angry = createRadio();
  angry.option(1, "Offended/Insulted");
  angry.option(2, "Indignant/Outraged");
  angry.option(3, "Dismayed/Betrayed");
  angry.option(4, "Bitter/Resentful/Jealous");
  angry.option(5, "Frustrated/Annoyed");
  angry.option(6, "Aggressive/Hostile");
  angry.option(7, "Harassed/Persecuted");
  angry.option(8, "Bored/Indifferent");
  angry.option(9, "Rushed/Pressured");
  angry.style("width", "770px");
  angry.position(10, 190);
  angry.hide();

  //Question 3L
  embarrassed = createRadio();
  embarrassed.option(1, "Humiliated");
  embarrassed.option(2, "Worthless");
  embarrassed.option(3, "Guilty/Regret");
  embarrassed.option(4, "Sheepish");
  embarrassed.option(5, "Ashamed");
  embarrassed.option(6, "Inferior");
  embarrassed.style("width", "770px");
  embarrassed.position(10, 190);
  embarrassed.hide();

  //Question 4
  anxious = createSlider(0, 5, 0, 1);
  anxious.position(10, 300);
  anxious.style("width", "600px");

  //Question 5
  sleep = createSlider(1, 5, 0, 1);
  sleep.position(10, 400);
  sleep.style("width", "600px");

  //Question 6
  meal = createSlider(1, 6, 0, 1);
  meal.position(10, 500);
  meal.style("width", "600px");

  //Question 7
  water = createSlider(1, 5, 0, 1);
  water.position(10, 600);
  water.style("width", "600px");

  //Question 8
  exercise = createSlider(1, 4, 0, 1);
  exercise.position(10, 700);
  exercise.style("width", "600px");

  //Question 9
  talk = createSlider(0, 3, 0, 1);
  talk.position(10, 800);
  talk.style("width", "600px");

 //Question 10
  outside = createRadio();
  outside.option(1, "yes");
  outside.option(2, "no");
  positive.style("width", "600px");
  outside.position(10, 900);

  // Email address
  email = createInput();
  email.position(10, 980);
  button = createButton("enter");
  button.position(email.x + email.width, 980);

  // Caption
  caption = createInput();
  caption.position(400, 980);
  buttonb = createButton("enter");
  buttonb.position(caption.x + caption.width, 980);

  //Submit button
  submit = createButton("Create Your Design");
  submit.position(10, 1040);
  submit.mousePressed(changeBG);

  //set up color arrays
  posaccepted = [
    color("#e3154a"),
    color("#e4b0a2"),
    color("#6b859e"),
    color("#4da9ab"),
    color("#283554"),
  ];
  posloving = [
    color("#d2203e"),
    color("#fc607f"),
    color("#ffe6b4"),
    color("#ef820c"),
    color("#ee2939"),
  ];
  posexcited = [
    color("#c6ea46"),
    color("#effd5e"),
    color("#fd771e"),
    color("#fcf4ee"),
    color("#df3163"),
  ];
  posinterested = [
    color("#89bbd2"),
    color("#e0dfba"),
    color("#868489"),
    color("#aa415f"),
    color("#6a8dad"),
  ];
  posconfident = [
    color("#df3163"),
    color("#fe6901"),
    color("#ffe12a"),
    color("#b5348b"),
    color("#1135a7"),
  ];
  poshappy = [
    color("#f4c40c"),
    color("#ee7a0c"),
    color("#dc092a"),
    color("#047dc3"),
    color("#5cc4fc"),
  ];
  negafraid = [
    color("#e34534"),
    color("#94b840"),
    color("#f0e600"),
    color("#6b4d4d"),
    color("#2e240b"),
  ];
  negsad = [
    color("#a1c2e0"),
    color("#11256b"),
    color("#4f244e"),
    color("#202233"),
    color("#79879f"),
  ];
  negdislike = [
    color("#c6ea46"),
    color("#86b33d"),
    color("#23393a"),
    color("#0c0c04"),
    color("#acacac"),
  ];
  negalone = [
    color("#344c6c"),
    color("#1c233c"),
    color("#b3d4e1"),
    color("#69747e"),
    color("#3b7347"),
  ];
  negangry = [
    color("#fe6901"),
    color("#c31708"),
    color("#960119"),
    color("#5e1913"),
    color("#d4af36"),
  ];
  negembarrassed = [
    color("#edadb4"),
    color("#c93041"),
    color("#f0dada"),
    color("#c76a6a"),
    color("#165661"),
  ];
  mehindifferent = [
    color("#a3c0d4"),
    color("#dfe0ed"),
    color("#d3c3b9"),
    color("#cae3db"),
    color("#66858f"),
  ];
  mehbored = [
    color("#9ebbc5"),
    color("#ddc8b7"),
    color("#848762"),
    color("#333233"),
    color("#90a396"),
  ];
  mehnumb = [
    color("#cccccc"),
    color("#403939"),
    color("#4a6b74"),
    color("#0c0c04"),
    color("#8f8478"),
  ];
  mehwithdrawn = [
    color("#e4dbbb"),
    color("#c848484"),
    color("#435c74"),
    color("#99a177"),
    color("#1e2836"),
  ];
}

function draw() {
  background(255);

  if (questions == true) {
    textSize(18);
    textStyle(BOLD);
    text("In general, how was your day today?", 10, 25);
    text("How are you feeling right now?", 10, 100);
    text("How anxious are you feeling today?", 10, 290);
    text("Did you get enough sleep?", 10, 390);
    text("Did you eat a healthy meal today?", 10, 490);
    text("Did you drink water today?", 10, 590);
    text("Did you move or exercise today?", 10, 690);
    text("Have you talked or texted with family or friends today?", 10, 790);
    text("Have you been outside today?", 10, 890);
    text("Your email - optional", 10, 970);
    text("Add a caption or Instagram username", 400, 970);

    textSize(12);
    textStyle(NORMAL);

    //Question 4 slider labels
    text("Calm/Relaxed", 10, 335);
    text("Focused", 115, 335);
    text("Distracted/Scattered", 200, 335);
    text("Tense", 355, 335);
    text("Stressed", 465, 335);
    text("Overwhelmed", 550, 335);

    //Question 5 slider labels
    text("Exhausted", 10, 435);
    text("Sleepy", 150, 435);
    text("Just Right", 285, 435);
    text("Well Rested", 425, 435);
    text("Alert", 595, 435);

    //Question 6 slider labels
    text("nothing to eat", 10, 535);
    text("nothing healthy", 95, 535);
    text("1 healthy thing", 215, 535);
    text("1 healthy meal", 330, 535);
    text("2 healthy meals", 450, 535);
    text("3 healthy meals", 570, 535);

    //Question 7 slider labels
    text("none", 10, 635);
    text("1-2 cups", 140, 635);
    text("3-4 cups", 290, 635);
    text("5-6 cups", 435, 635);
    text("7-8+ cups", 570, 635);

    //Question 8 slider labels
    text("Did not move at all", 10, 735);
    text("Light movement", 175, 735);
    text("Moderate movement", 360, 735);
    text("Exercise/worked out ", 555, 735);

    //Question 9 slider labels
    text("No communication", 10, 835);
    text("Text/email", 190, 835);
    text("Phone/video", 380, 835);
    text("In person", 580, 835);

    //answers to Q1
    if (radio.value() == 1) {
      console.log("positive/circles");
      positive.show();
      negative.hide();
      neither.hide();
      circles = true;
      squares = false;
      triangles = false;
    } else if (radio.value() == 2) {
      console.log("negative/squares");
      negative.show();
      positive.hide();
      neither.hide();
      circles = false;
      squares = true;
      triangles = false;
    } else if (radio.value() == 3) {
      console.log("neither/triangles");
      neither.show();
      positive.hide();
      negative.hide();
      circles = false;
      squares = false;
      triangles = true;
    }
    //Answers to Q2
    if (positive.value() == 1) {
      console.log("Accepted/Valued");
      textSize(18);
      textStyle(BOLD);
      text("How would you describe your feeling of acceptance and value?", 10, 175);
      current = posaccepted;
      accepted.show();
      loving.hide();
      excited.hide();
      interested.hide();
      confident.hide();
      happy.hide();
    } else if (positive.value() == 2) {
      console.log("Loving");
      textSize(18);
      textStyle(BOLD);
      text("How would you describe your loving feeling?", 10, 175);
      current = posloving;
      accepted.hide();
      loving.show();
      excited.hide();
      interested.hide();
      confident.hide();
      happy.hide();
    } else if (positive.value() == 3) {
      console.log("Excited");
      textSize(18);
      textStyle(BOLD);
      text("How would you describe your excitement?", 10, 175);
      current = posexcited;
      accepted.hide();
      loving.hide();
      excited.show();
      interested.hide();
      confident.hide();
      happy.hide();
    } else if (positive.value() == 4) {
      console.log("Interested");
      textSize(18);
      textStyle(BOLD);
      text("How would you describe your interest?", 10, 175);
      current = posinterested;
      accepted.hide();
      loving.hide();
      excited.hide();
      interested.show();
      confident.hide();
      happy.hide();
    } else if (positive.value() == 5) {
      console.log("Confident");
      textSize(18);
      textStyle(BOLD);
      text("How would you describe your confidence?", 10, 175);
      current = posconfident;
      accepted.hide();
      loving.hide();
      excited.hide();
      interested.hide();
      confident.show();
      happy.hide();
    } else if (positive.value() == 6) {
      console.log("Happy");
      textSize(18);
      textStyle(BOLD);
      text("How would you describe your happiness?", 10, 175);
      current = poshappy;
      accepted.hide();
      loving.hide();
      excited.hide();
      interested.hide();
      confident.hide();
      happy.show();
    }

    if (negative.value() == 1) {
      console.log("Afraid");
      textSize(18);
      textStyle(BOLD);
      text("How would you describe your fear?", 10, 175);
      current = negafraid;
      afraid.show();
      sad.hide();
      dislike.hide();
      alone.hide();
      angry.hide();
      embarrassed.hide();
    } else if (negative.value() == 2) {
      console.log("Sad");
      textSize(18);
      textStyle(BOLD);
      text("How would you describe your sadness?", 10, 175);
      current = negsad;
      afraid.hide();
      sad.show();
      dislike.hide();
      alone.hide();
      angry.hide();
      embarrassed.hide();
    } else if (negative.value() == 3) {
      console.log("Dislike");
      textSize(18);
      textStyle(BOLD);
      text("How would you describe your feeling of dislike?", 10, 175);
      current = negdislike;
      afraid.hide();
      sad.hide();
      dislike.show();
      alone.hide();
      angry.hide();
      embarrassed.hide();
    } else if (negative.value() == 4) {
      console.log("Alone");
      textSize(18);
      textStyle(BOLD);
      text("How would you describe your loneliness?", 10, 175);
      current = negalone;
      afraid.hide();
      sad.hide();
      dislike.hide();
      alone.show();
      angry.hide();
      embarrassed.hide();
    } else if (negative.value() == 5) {
      console.log("Angry");
      textSize(18);
      textStyle(BOLD);
      text("How would you describe your anger?", 10, 175);
      current = negangry;
      afraid.hide();
      sad.hide();
      dislike.hide();
      alone.hide();
      angry.show();
      embarrassed.hide();
    } else if (negative.value() == 6) {
      console.log("Embarrassed");
      textSize(18);
      textStyle(BOLD);
      text("How would you describe your embarrassment?", 10, 175);
      current = negembarrassed;
      afraid.hide();
      sad.hide();
      dislike.hide();
      alone.hide();
      angry.hide();
      embarrassed.show();
      }  
        
      if (neither.value() == 1) {
      console.log("Indifferent/Apathetic");
      current = mehindifferent;
    } else if (neither.value() == 2) {
      console.log("Bored");
      current = mehbored;
    } else if (neither.value() == 3) {
      console.log("Numb/Empty");
      current = mehnumb;
    } else if (neither.value() == 4) {
      console.log("Withdrawn/Distant");
      current = mehwithdrawn;
    }
    
  } else {
    // draw all the pretty things here.
    console.log("anxious", anxious.value());
    console.log("sleep", sleep.value());
    console.log("healthy meal", meal.value());
    console.log("water", water.value());
    console.log("exercise", exercise.value());
    console.log("outside", outside.value());
    console.log("communicate", talk.value());
    anxiety = anxious.value() * 10;
    console.log("dots", anxiety);
    console.log("email", email.value());
    console.log("caption", caption.value());

    //circles - thanks to Roni Kauffman
    //https://openprocessing.org/sketch/1151289
    if (circles == true) {
      let n = 5;
      let s = width / n;
      let col1, col2;
      console.log("circles true");
      for (let x = 0; x < width; x += s) {
        for (let y = 0; y < width; y += s) {
          col1 = random(current);
          fill(col1);
          rect(x, y, s);

          do {
            col2 = random(current);
          } while (col1 === col2);
          fill(col2);
          let r = random();
          if (r < 1 / 2) {
            r = random();
            if (r < 1 / 4) {
              arc(x, y, s * 2, s * 2, 0, PI / 2);
              const d = width * 0.08;
              shuffle(current, true);
              patternColors(current);
              pattern(PTN.stripeCircle(d / random(sleep.value())));
              arcPattern(x, y, s * 2, s * 2, 0, PI / 2);
            } else if (r < 1 / 2) {
              arc(x + s, y, s * 2, s * 2, PI / 2, PI);
              const d = width * 0.08;
              shuffle(current, true);
              patternColors(current);
              pattern(
                PTN.dot(
                  d / 10,
                  (d / 10) * random(map(meal.value(), 1, 6, 0.2, 1))
                )
              );
              arcPattern(x + s, y, s * 2, s * 2, PI / 2, PI);
            } else if (r < 3 / 4) {
              arc(x + s, y + s, s * 2, s * 2, PI, (3 * PI) / 2);
              const d = width * 0.08;
              shuffle(current, true);
              patternColors(current);
              pattern(
                PTN.wave(
                  d / random(water.value()),
                  d / random(water.value()) / 5,
                  d / 5,
                  d / 10
                )
              );
              arcPattern(x + s, y + s, s * 2, s * 2, PI, (3 * PI) / 2);
            } else {
              arc(x, y + s, s * 2, s * 2, (3 * PI) / 2, 0);
              const d = width * 0.08;
              shuffle(current, true);
              patternColors(current);
              pattern(
                PTN.stripeRadial(
                  TAU / random(map(exercise.value(), 1, 4, 6, 30))
                )
              );
              arcPattern(x, y + s, s * 2, s * 2, (3 * PI) / 2, 0);
            }
          } else {
            r = random();
            if (r < 1 / 4) {
              arc(x + s / 2, y, s, s, 0, PI);
            } else if (r < 1 / 2) {
              arc(x + s, y + s / 2, s, s, PI / 2, (3 * PI) / 2);
            } else if (r < 3 / 4) {
              arc(x + s / 2, y + s, s, s, PI, 0);
            } else {
              arc(x, y + s / 2, s, s, (3 * PI) / 2, PI / 2);
            }
          }
        }
      }
      noLoop();

      //squares - thanks to Sayama
      //https://openprocessing.org/sketch/1418778
    } else if (squares == true) {
      if (frameCount % 120 == 0) Init();

      randomSeed(SEED_NUM);

      background(255);

      translate(width / 2 - allSize() / 2, width / 2 - allSize() / 2);

      // Draw each squares
      for (let i = 0; i < SQUARES.length; i++) {
        let sq = SQUARES[i];
        const c = shuffle(current);
        drawUnit(sq.x, sq.y, sq.size + 1, c);
        noLoop();
      }

      //triangles - thanks to Zlosk
      //https://openprocessing.org/sketch/1494139
    } else if (triangles == true) {
      console.log("triangles true");
      ellipseMode(CENTER);

      background(150);
      noStroke();
      noLoop();

      let n = 5;
      tileWidth = width / n;
      tileHeight = width / n;

      for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
          switch (
            floor(random(6)) // choose random shape to draw
          ) {
            case 0:
              fn = DrawTriangleNW;
              break;
            case 1:
              fn = DrawTriangleNE;
              break;
            case 2:
              fn = DrawTriangleSW;
              break;
            case 3:
              fn = DrawTriangleSE;
              break;
            case 4:
              fn = DrawSquare;
              break;
            case 5:
              fn = DrawSquare;
              break;
          }
          DrawShape(
            fn,
            i * tileWidth - 0.5,
            j * tileHeight - 0.5,
            tileWidth + 1,
            tileHeight + 1
          );
        }
      }
    }

    for (let anx = 0; anx < anxiety; anx++) {
      fill(255);
      circle(random(width), random(width), random(anxiety / 2));
    }
    for (let com = 0; com < talk.value()*2; com++) {
      strokeWeight(2);
      stroke(255);
      line(random(width), 0, random(width), width);
    }

    if (outside.value() == 2) {
      rectMode(CENTER);
      strokeWeight(20);
      stroke(0);
      noFill();
      square(width / 2, width / 2, 1060);
    }

    function DrawShape(fn, x, y, w, h) {
      fill(random(current));
      fn(x, y, w, h);
    }

    function DrawSquare(x, y, w, h) {
      shuffle(current, true);
      fill(random(current));
      rect(x, y, w, h);
    }
    
    function DrawTriangleNW(x, y, w, h) {
      shuffle(current, true);
      DrawTriangle(x, y, x, y + h, x + w, y);
      const d = width * 0.08;
      patternColors(current);
      pattern(PTN.stripeCircle(d / random(sleep.value())));
      trianglePattern(x, y, x, y + h, x + w, y);
    }

    function DrawTriangleNE(x, y, w, h) {
      shuffle(current, true);
      DrawTriangle(x + w, y, x, y, x + w, y + h);
      const d = width * 0.08;
      patternColors(current);
      pattern(
        PTN.dot(d / 10, (d / 10) * random(map(meal.value(), 1, 6, 0.2, 1)))
      );
      trianglePattern(x + w, y, x, y, x + w, y + h);
    }

    function DrawTriangleSW(x, y, w, h) {
      shuffle(current, true);
      DrawTriangle(x, y + h, x + w, y + h, x, y);
      const d = width * 0.08;
      patternColors(current);
      pattern(
        PTN.wave(
          d / random(water.value()),
          d / random(water.value()) / 5,
          d / 5,
          d / 10
        )
      );
      trianglePattern(x, y + h, x + w, y + h, x, y);
    }

    function DrawTriangleSE(x, y, w, h) {
      shuffle(current, true);
      DrawTriangle(x + w, y + h, x + w, y, x, y + h);
      const d = width * 0.08;
      patternColors(current);
      pattern(
        PTN.stripeRadial(TAU / random(map(exercise.value(), 1, 4, 6, 30)))
      );
      trianglePattern(x + w, y + h, x + w, y, x, y + h);
    }

    function DrawTriangle(x1, y1, x2, y2, x3, y3) {
      fill(random(current));
      beginShape();
      vertex(x1, y1);
      vertex(x2, y2);
      vertex(x3, y3);
      endShape();
    }
  }
}

function allSize() {
  return min(width, width);
}

function drawUnit(cox, coy, s, c) {
  const rn = random(5);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
  push();
  translate(cox + s / 2, coy + s / 2);

  if (rn < 1) {
    const d = width * 0.08;
    shuffle(current, true);
    patternColors(current);
    patternAngle((int(random(8)) * HALF_PI) / 2);
    pattern(PTN.stripeCircle(d / random(sleep.value())));
    rectPattern(0, 0, s, s);
  } else if (rn < 2) {
    const d = width * 0.08;
    shuffle(current, true);
    patternColors(current);
    pattern(
      PTN.dot(d / 10, (d / 10) * random(map(meal.value(), 1, 6, 0.2, 1)))
    );
    rectPattern(0, 0, s, s);
  } else if (rn < 3) {
    const d = width * 0.08;
    shuffle(current, true);
    patternColors(current);
    patternAngle((int(random(8)) * HALF_PI) / 2);
    pattern(
      PTN.wave(
        d / random(water.value()),
        d / random(water.value()) / 5,
        d / 5,
        d / 10
      )
    );
    rectPattern(0, 0, s, s);
  } else if (rn < 4) {
    const d = width * 0.08;
    shuffle(current, true);
    patternColors(current);
    pattern(PTN.stripeRadial(TAU / random(map(exercise.value(), 1, 4, 6, 30))));
    rectPattern(0, 0, s, s);
  } else if (rn < 5) {
    shuffle(current, true);
    fill(random(current));
    rect(0, 0, s, s);
  }

  pop();
}

function changeBG() {
  radio.hide();
  positive.hide();
  negative.hide();
  neither.hide();
  accepted.hide();
  loving.hide();
  excited.hide();
  interested.hide();
  confident.hide();
  happy.hide();
  afraid.hide();
  sad.hide();
  dislike.hide();
  alone.hide();
  angry.hide();
  embarrassed.hide();
  anxious.hide();
  sleep.hide();
  meal.hide();
  water.hide();
  exercise.hide();
  outside.hide();
  talk.hide();
  submit.hide();
  email.hide();
  button.hide();
  caption.hide();
  buttonb.hide();

  // record that we are done asking questions
  questions = false;
}

function saveDrawing() {
  // saveCanvas("TodaysMood", "jpg");
  lastImage = canvas.elt.toDataURL("image/jpeg", 1.0);
  image(canvas, 0, 0, 300, 300);
  
  $.ajax({
  method: "POST",
  url: "https://josh-miller.com/kim/insert.php",
  data: { name: (caption.value()), email: (email.value()), image: lastImage }
  })
  .done(function( msg ) {
    alert( "Data Saved: " + msg );
    
  });
} 

  // https://openprocessing.org/sketch/1278485
  function randPattern(t) {
    const ptArr = [
      PTN.noise(0.5),
      PTN.noiseGrad(0.4),
      PTN.stripe(t / int(random(6, 12))),
      PTN.stripeCircle(t / int(random(6, 12))),
      PTN.stripePolygon(int(random(3, 7)), int(random(6, 12))),
      PTN.stripeRadial(TAU / int(random(6, 30))),
      PTN.wave(t / int(random(1, 3)), t / int(random(10, 20)), t / 5, t / 10),
      PTN.dot(t / 10, (t / 10) * random(0.2, 1)),
      PTN.checked(t / int(random(5, 20)), t / int(random(5, 20))),
      PTN.cross(t / int(random(10, 20)), t / int(random(20, 40))),
      PTN.triangle(t / int(random(5, 20)), t / int(random(5, 20))),
    ];
    return random(ptArr);
  }
