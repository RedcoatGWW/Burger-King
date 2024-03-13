// I have broken down the 4 image articles into 4 sections as it was wasier to group them all together. I have set them all to create elements so it souly can be edited in the JS file.

// -----------------------Top Left--------------------------
let topleft = document.createElement("img"); //Adding image to the top left section
    topleft.src = 'topleftgrid.webp';
    topleft.style.height = "200px";
    topleft.style.position = "relative";
    topleft.style.top = "100px";
    topleft.style.right = "230px";
    topleft.style.paddingBottom = '50px' //Creatin the border and giving it a curved edge
    topleft.style.borderTopLeftRadius = '10px';
    topleft.style.borderTopRightRadius = '10px';
    topleft.style.borderBottomLeftRadius = '10px';
    topleft.style.borderBottomRightRadius = '10px';
    topleft.style.backgroundColor = 'white';
    document.body.appendChild(topleft);

let tlh = document.createElement("h5"); //Adding header to the section
    tlh.innerHTML="Tasty prizes, delivered. Download the BK App.";
    tlh.style.fontSize = "20px";
    tlh.style.cssText = "color:black";
    tlh.style.top = "80px";
    tlh.style.right = "280px";
    tlh.style.position = "relative";
    tlh.style.marginTop = "-30px";
    document.body.appendChild(tlh);

let tlp = document.createElement("p"); //adding a paragraph to the section
    tlp.innerHTML="Take a spin to win tasty prizes. There are no losers!";
    tlp.style.color = "black";
    tlp.style.fontSize = "10px";
    tlp.style.fontWeight = "bold";
    tlp.style.fontFamily = "Arial";
    tlp.style.top = "70px";
    tlp.style.right = "292px";
    tlp.style.position = "relative";
    document.body.appendChild(tlp);
// --------------------------Top Right this is a similar format as the previous--------------------------------
let topright = document.createElement("img");
    topright.src = "toprightgrid.webp";
    topright.style.height = "200px";
    topright.style.position = "relative";
    topright.style.bottom = "187px";
    topright.style.left = "210px";
    topright.style.borderTopLeftRadius = '10px';
    topright.style.borderTopRightRadius = '10px';
    topright.style.paddingBottom = '50px'
    topright.style.borderTopLeftRadius = '10px';
    topright.style.borderTopRightRadius = '10px';
    topright.style.borderBottomLeftRadius = '10px';
    topright.style.borderBottomRightRadius = '10px';
    topright.style.backgroundColor = 'white';
    document.body.appendChild(topright);

let trh = document.createElement("h5");
    trh.innerHTML="YourBurgerKing";
    trh.style.fontSize = "20px";
    trh.style.cssText = "color:black";
    trh.style.bottom = "205px";
    trh.style.left = "80px";
    trh.style.position = "relative";
    trh.style.marginTop = "-30px";
    document.body.appendChild(trh);

let trp = document.createElement("p");
    trp.innerHTML="Earn points and get rewarded with every order on the BK App.";
    trp.style.color = "black";
    trp.style.fontSize = "10px";
    trp.style.fontWeight = "bold";
    trp.style.fontFamily = "Arial";
    trp.style.bottom = "218px";
    trp.style.left = "180px";
    trp.style.position = "relative";
    document.body.appendChild(trp);
// ---------------------------------Bottom Left this is a similar format as the previous---------------------------------
let botleft = document.createElement("img");
    botleft.src = "bottomleftgrid.webp";
    botleft.style.height = "200px";
    botleft.style.position = "relative";
    botleft.style.bottom = "200px";
    botleft.style.right = "235px";
    botleft.style.borderTopLeftRadius = '10px';
    botleft.style.borderTopRightRadius = '10px';
    botleft.style.paddingBottom = '50px'
    botleft.style.borderTopLeftRadius = '10px';
    botleft.style.borderTopRightRadius = '10px';
    botleft.style.borderBottomLeftRadius = '10px';
    botleft.style.borderBottomRightRadius = '10px';
    botleft.style.backgroundColor = 'white';
    document.body.appendChild(botleft);

let blh = document.createElement("h5");
    blh.innerHTML="BK® Delivers, powered by Deliveroo®";
    blh.style.fontSize = "20px";
    blh.style.cssText = "color:black";
    blh.style.position = "relative";
    blh.style.bottom = "220px";
    blh.style.right = "300px";
    blh.style.marginTop = "-30px";
    document.body.appendChild(blh);

let blp = document.createElement("p");
    blp.innerHTML="Get your flame-grilled favourites straight to your door today!";
    blp.style.color = "black";
    blp.style.fontSize = "10px";
    blp.style.fontWeight = "bold";
    blp.style.fontFamily = "Arial";
    blp.style.position = "relative";
    blp.style.bottom = "235px";
    blp.style.right = "260px";
    document.body.appendChild(blp);
// --------------------------------Bottom Right this is a similar format as the previous------------------------
let botright = document.createElement("img");
    botright.src = "bottomrightgrid.webp";
    botright.style.height = "200px";
    botright.style.position = "relative";
    botright.style.bottom = "486px";
    botright.style.left = "210px";
    botright.style.borderTopLeftRadius = '10px';
    botright.style.borderTopRightRadius = '10px';
    botright.style.paddingBottom = '50px'
    botright.style.borderTopLeftRadius = '10px';
    botright.style.borderTopRightRadius = '10px';
    botright.style.borderBottomLeftRadius = '10px';
    botright.style.borderBottomRightRadius = '10px';
    botright.style.backgroundColor = 'white';
    document.body.appendChild(botright);

let brh = document.createElement("h5");
    brh.innerHTML="Peppercorn Gourmet Kings";
    brh.style.fontSize = "20px";
    brh.style.cssText = "color:black";
    brh.style.position = "relative";
    brh.style.bottom = "505px";
    brh.style.left = "100px";
    brh.style.marginTop = "-30px";
    document.body.appendChild(brh);

let brp = document.createElement("p");
    brp.innerHTML="150g of Aberdeen Angus or Crispy Chicken with a classic Peppercorn mayo";
    brp.style.color = "black";
    brp.style.fontSize = "10px";
    brp.style.fontWeight = "bold";
    brp.style.fontFamily = "Arial";
    brp.style.position = "relative";
    brp.style.bottom = "515px";
    brp.style.left = "200px";
    document.body.appendChild(brp);
// -------------------------------------------------------
// Creating a footer for the back drop of the phone using a footer format adjusting the size of the footer to fit the phone.
let backphone = document.createElement("footer");
    backphone.style.backgroundColor = "#f0e4cc";
    backphone.style.height = "400px";
    backphone.style.marginTop = "-300px";
    backphone.style.Top = "600px";
    backphone.style.paddingBottom = "-500px";
    backphone.style.position - "absolute";
    document.body.appendChild(backphone);
// adding images and text for the aside section
let bigphone = document.createElement("img");
    bigphone.src = "Bigphone.webp";
    bigphone.style.height = "600px";
    bigphone.style.position = "relative";
    bigphone.style.bottom = "585px";
    bigphone.style.marginBottom = "-400px";
    document.body.appendChild(bigphone);

let appstore = document.createElement("img");
    appstore.src = "appstore.png";
    appstore.style.height = "100px";
    appstore.style.position = "relative";
    appstore.style.bottom = "340px";
    document.body.appendChild(appstore);

let google = document.createElement("img");
    google.src = "googleplay.png";
    google.style.height = "104px";
    google.style.position = "relative";
    google.style.bottom = "337px";
    google.style.marginRight = "-200px";
    document.body.appendChild(google);

let bph = document.createElement("p");
    bph.innerText="Save £££ \n With offers on \n demand";
    bph.style.fontSize = "50px";
    bph.style.position = "absolute";
    bph.style.top = "980px";
    bph.style.left = "780px";
    bph.style.fontWeight= "bold";
    bph.style.color = '#4e2414';
    bph.style.textAlign = "left";
    bph.style.paddingRight = "-500px";
    document.body.appendChild(bph);

let bpt = document.createElement("p");
    bpt.innerText="Apple and the Apple logo are trademarks of Apple Inc., registered \n in the U.S. and other countries. App Store is a service mark of \n Apple Inc. Google Play is a trademark of Google Inc. Terms apply.";
    bpt.style.fontSize = "15px";
    bpt.style.position = "absolute";
    bpt.style.top = "1250px";
    bpt.style.left = "780px";
    bpt.style.color = "#4e2414";
    bpt.style.textAlign = "center";
    document.body.appendChild(bpt);

let foot = document.createElement("footer");
    foot.style.backgroundColor = "#270200";
    foot.style.height = "600px";
    foot.style.marginTop = "-220px";
    document.body.appendChild(foot);
// ----------------------------Left List---------------------------
// Creating a makeshift list using headers and paragraphs as the items and manipulating the position.
let llh = document.createElement("a");
    llh.innerHTML="BK INFO";
    llh.style.fontSize = "30px";
    llh.style.fontWeight = "bold";
    llh.style.position = "absolute";
    llh.style.color = "#f3ebdc";
    llh.style.left = "60px";
    llh.style.top = "1600px";
    document.body.appendChild(llh);

let ll1 = document.createElement("p");
    ll1.innerText="About BK";
    ll1.style.position = "absolute";
    ll1.style.color = "#b2a18f";
    ll1.style.top = "1625px";
    ll1.style.left = "60px";
    ll1.style.fontSize = "10";
    document.body.appendChild(ll1);

let ll2 = document.createElement("p");
    ll2.innerText="FAQs";
    ll2.style.position = "absolute";
    ll2.style.color = "#b2a18f";
    ll2.style.top = "1645px";
    ll2.style.left = "60px";
    ll2.style.fontSize = "10";
    document.body.appendChild(ll2);

let ll3 = document.createElement("p");
    ll3.innerText="Policies";
    ll3.style.position = "absolute";
    ll3.style.color = "#b2a18f";
    ll3.style.top = "1665px";
    ll3.style.left = "60px";
    ll3.style.fontSize = "10";
document.body.appendChild(ll3);

let ll4 = document.createElement("p");
    ll4.innerText="Get in Touch";
    ll4.style.position = "absolute";
    ll4.style.color = "#b2a18f";
    ll4.style.top = "1685px";
    ll4.style.left = "60px";
    ll4.style.fontSize = "10";
    document.body.appendChild(ll4);

let ll5 = document.createElement("p");
    ll5.innerText="Terms and Conditions";
    ll5.style.position = "absolute";
    ll5.style.color = "#b2a18f";
    ll5.style.top = "1705px";
    ll5.style.left = "60px";
    ll5.style.fontSize = "10";
    document.body.appendChild(ll5);

let ll6 = document.createElement("p");
    ll6.innerText="Guest Trac";
    ll6.style.position = "absolute";
    ll6.style.color = "#b2a18f";
    ll6.style.top = "1725px";
    ll6.style.left = "60px";
    ll6.style.fontSize = "10";
    document.body.appendChild(ll6);

let ll7 = document.createElement("p");
    ll7.innerText="Trademarks";
    ll7.style.position = "absolute";
    ll7.style.color = "#b2a18f";
    ll7.style.top = "1745px";
    ll7.style.left = "60px";
    ll7.style.fontSize = "10";
    document.body.appendChild(ll7);
// adding a horizontal line
let hr1 = document.createElement("hr");
    hr1.style.backgroundColor = "#4e2414";
    hr1.style.bottom = "170px";
    hr1.style.position = "relative";
    hr1.style.width = "1100px";
    document.body.appendChild(hr1);
// ---------------------------socials-----------------------
// Creating social media icons
let insta = document.createElement("img");
    insta.src = "insta.png";
    insta.style.height = "33px";
    insta.style.position = "relative";
    insta.style.bottom = "150px";
    insta.style.left = "500px";
    insta.style.marginLeft = "-80px";    //This aligns the rest of the icons to the left
    document.body.appendChild(insta);

let facebook = document.createElement("img");
    facebook.src = "facebook.png";
    facebook.style.height = "33px";
    facebook.style.position = "relative";
    facebook.style.bottom = "150px";
    facebook.style.left = "500px";
    document.body.appendChild(facebook);

let youtube = document.createElement("img");
    youtube.src = "youtube.png";
    youtube.style.height = "30px";
    youtube.style.position = "relative";
    youtube.style.bottom = "150px";
    youtube.style.left = "500px";
    document.body.appendChild(youtube);

let twitter = document.createElement("img");
    twitter.src = "twitter.png";
    twitter.style.height = "30px";
    twitter.style.position = "relative";
    twitter.style.bottom = "150px";
    twitter.style.left = "500px";
    document.body.appendChild(twitter);
// This is the bottom horizontal line
let hr2 = document.createElement("hr");
    hr2.style.backgroundColor = "#4e2414";
    hr2.style.bottom = "100px";
    hr2.style.position = "relative";
    hr2.style.width = "1100px";
    hr2.style.marginBottom = "-100px";
    document.body.appendChild(hr2);
// --------------------------------Right List---------------------------
// This is the right list section with simular aspects to the left list section.
let rlh = document.createElement("a");
    rlh.innerHTML="BK AND YOU";
    rlh.style.position = "absolute";
    rlh.style.fontWeight = "bold";
    rlh.style.color = "#f3ebdc";
    rlh.style.top = "1605px";
    rlh.style.left = "600px";
    rlh.style.fontSize = "30px";
    document.body.appendChild(rlh);

let rl1 = document.createElement("p");
    rl1.innerText="Careers";
    rl1.style.position = "absolute";
    rl1.style.color = "#b2a18f";
    rl1.style.top = "1625px";
    rl1.style.left = "600px";
    rl1.style.fontSize = "10";
    document.body.appendChild(rl1);

let rl2 = document.createElement("p");
    rl2.innerText="Privacy Policies";
    rl2.style.position = "absolute";
    rl2.style.color = "#b2a18f";
    rl2.style.top = "1645px";
    rl2.style.left = "600px";
    rl2.style.fontSize = "10";
    document.body.appendChild(rl2);

let rl3 = document.createElement("p");
    rl3.innerText="Modern Slavery Statement";
    rl3.style.position = "absolute";
    rl3.style.color = "#b2a18f";
    rl3.style.top = "1665px";
    rl3.style.left = "600px";
    rl3.style.fontSize = "10";
    document.body.appendChild(rl3);

let rl4 = document.createElement("p");
    rl4.innerText="Tax Strategy";
    rl4.style.position = "absolute";
    rl4.style.color = "#b2a18f";
    rl4.style.top = "1685px";
    rl4.style.left = "600px";
    rl4.style.fontSize = "10";
    document.body.appendChild(rl4);
// Adds the bottom footer logo and text
let botburg = document.createElement("h1");
    botburg.innerText="Burger King";
    botburg.style.position = "absolute";
    botburg.style.color = "#f3ebdc";
    botburg.style.top = "1840px";
    botburg.style.left = "60px";
    botburg.style.fontSize = "40";
    document.body.appendChild(botburg);

let tm = document.createElement("p");
    tm.innerText="TM & Copyright 2021 Burger King Corporation. All Rights Reserved.";
    tm.style.position = "absolute";
    tm.style.color = "#b2a18f";
    tm.style.top = "1900px";
    tm.style.left =  "60px";
    tm.style.fontSize = "10px";
    document.body.appendChild(tm);



