const app = document.getElementById("app");

const star = document.createElement("div");
star.id = "star";
app.append(star);

const img = document.createElement("img");
img.src = "./assets/img/icon-star.svg";
star.append(img);

const text = document.createElement("div");
text.id = "text";
app.append(text);

const title = document.createElement("h1");
title.textContent = "How did we do?";
text.append(title);

const info = document.createElement("p");
info.textContent =
  "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!";
text.append(info);

const note = document.createElement("div");
note.id = "note";
app.append(note);

const numbers = [1, 2, 3, 4, 5];
let n = 0;
while (n < numbers.length) {
  const btn = document.createElement("button");
  btn.textContent = numbers[n];
  note.append(btn);
  n++;
  // console.log(n);
}

const submit = document.createElement("div");
submit.id = "submit";
app.append(submit);

const submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";
submit.append(submitBtn);
