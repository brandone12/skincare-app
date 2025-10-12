const routines = {
  seca: {
    día: [
      "Limpiador suave",
      "Tónico hidratante",
      "Suero de ácido hialurónico",
      "Crema hidratante rica",
      "Protector solar SPF 50"
    ],
    noche: [
      "Desmaquillante en aceite",
      "Limpiador suave",
      "Tónico calmante",
      "Crema nutritiva de noche"
    ]
  },
  grasa: {
    día: [
      "Limpiador facial en gel",
      "Tónico astringente",
      "Suero con niacinamida",
      "Hidratante ligera",
      "Protector solar oil-free"
    ],
    noche: [
      "Agua micelar",
      "Limpiador en gel",
      "Tónico purificante",
      "Gel con ácido salicílico"
    ]
  },
  mixta: {
    día: [
      "Limpiador equilibrante",
      "Tónico suave",
      "Suero de vitamina C",
      "Hidratante ligera",
      "Protector solar"
    ],
    noche: [
      "Desmaquillante bifásico",
      "Limpiador suave",
      "Tónico hidratante",
      "Gel hidratante nocturno"
    ]
  },
  sensible: {
    día: [
      "Agua micelar suave",
      "Tónico sin alcohol",
      "Suero calmante",
      "Crema hipoalergénica",
      "Protector solar mineral"
    ],
    noche: [
      "Aceite limpiador suave",
      "Limpiador sin sulfatos",
      "Tónico calmante",
      "Crema restauradora"
    ]
  }
};

function generateRoutine(timeOfDay) {
  const skinType = document.getElementById("skinType").value;
  const routineList = document.getElementById("routineList");

  const steps = routines[skinType][timeOfDay];
  routineList.innerHTML = "";

  steps.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    routineList.appendChild(li);
  });
}
