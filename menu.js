document.addEventListener("DOMContentLoaded", function() {
  // Crea l'element <nav> per al menú
  const menu = document.createElement("nav");
  menu.id = "menu";
  
  // Defineix l'estil bàsic del menú (opcional, pots modificar-ho o incloure-ho en un CSS separat)
  menu.style.backgroundColor = "#f4f4f4";
  menu.style.padding = "10px";
  
  // Crea una llista per als enllaços
  const ul = document.createElement("ul");
  ul.style.listStyle = "none";
  ul.style.padding = "0";
  
  // Genera els enllaços de nivell0.html a nivell9.html
  for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    li.style.marginBottom = "5px";
    
    const a = document.createElement("a");
    a.href = `nivell${i}.html`;
    a.textContent = `Nivell ${i}`;
    a.style.textDecoration = "none";
    a.style.color = "#333";
    
    li.appendChild(a);
    ul.appendChild(li);
  }
  
  menu.appendChild(ul);
  
  // Insereix el menú al principi del <body>
  document.body.insertBefore(menu, document.body.firstChild);
});

