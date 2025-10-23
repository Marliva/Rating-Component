const app = document.getElementById("app");

// élément <div> avec l'ID "star" qui contiendra l'icône étoilée
const star = document.createElement("div");
star.id = "star";
app.append(star);

// élément <img> qui contiendra l'image de l'étoile
const img = document.createElement("img");
img.src = "./assets/img/icon-star.svg";
star.append(img);

// élément <div> avec l'ID "result" qui contiendra le résultat de la note choisie par l'utilisateur
const result = document.createElement("div");
result.id = "result";
app.append(result);

// élément <div> avec l'ID "text" qui contiendra le titre et le texte
const text = document.createElement("div");
text.id = "text";
app.append(text);

// élément <h1> qui contiendra le titre
const title = document.createElement("h1");
title.textContent = "How did we do?";
text.append(title);

// élément <p> qui contiendra le texte
const info = document.createElement("p");
info.textContent =
  "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!";
text.append(info);

// élément <div> avec l'ID "note" qui contiendra les boutons de notation
const note = document.createElement("div");
note.id = "note";
app.append(note);

// On crée un tableau contenant les boutons de notation
const numbers = [1, 2, 3, 4, 5];
let n = 0;
while (n < numbers.length) {
  const btn = document.createElement("button");
  btn.textContent = numbers[n];
  // On ajoute un événement de mouseover pour ajouter la classe "hover"
  btn.addEventListener("mouseover", () => {
    console.log("hover");
    btn.classList.add("hover");
  });

  // On ajotue un événement de mouseleave pour enlever la classe "hover" lorsque l'on retire la souris du bouton
  btn.addEventListener("mouseleave", () => {
    btn.classList.remove("hover");
  });

  // On ajoute un événement de click pour ajouter la classe "active"
  btn.addEventListener("click", () => {
    document
      .querySelectorAll("button")
      .forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
  });
  note.append(btn);
  n++;
}

// élément <div> avec l'ID "submit" qui contiendra le bouton de soumission
const submit = document.createElement("div");
submit.id = "submit";
app.append(submit);

// On crée le bouton submit
const submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";
submitBtn.addEventListener("mouseover", () => {
  submitBtn.classList.add("hover");
});

submitBtn.addEventListener("mouseleave", () => {
  submitBtn.classList.remove("hover");
});

// On ajoute un événement au click pour afficher les résultats de la note choisie par l'utilisateur
submitBtn.addEventListener("click", () => {
  app.style.alignItems = "center";
  app.style.textAlign = "center";
  star.id = "thanks";
  img.src = "./assets/img/illustration-thank-you.svg";

  result.textContent = `You selected ${
    document.querySelector(".active").textContent
  } out of 5`;
  result.style.borderRadius = "1.5rem";
  result.style.padding = ".7rem 1rem .5rem 1rem";
  result.style.color = "#fb7413ff";
  result.style.backgroundColor = "#373d46";
  result.style.fontWeight = "300";
  result.style.marginTop = "2rem";
  title.textContent = "Thank you!";
  title.style.marginTop = ".5rem";
  info.textContent =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
  info.style.marginBottom = "1.2rem";
  note.style.display = "none";
  submit.style.display = "none";
});
submit.append(submitBtn);