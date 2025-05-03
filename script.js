function changeText() {
    const about = document.getElementById("about-text");
    about.textContent = "I transform your ideas into pixel-perfect websites that captivate and convert. Let's design the future — together.";
  }
  
  function highlightSkills() {
    const listItems = document.querySelectorAll("section ul li");
    listItems.forEach(item => {
      item.classList.toggle("highlight");
    });
  }
  
  function toggleElement() {
    const container = document.getElementById("extra-container");
    if (container.firstChild) {
      container.innerHTML = ""; // Remove
    } else {
      const newPara = document.createElement("p");
      newPara.textContent = "Want a sleek site that speaks your brand? Let's connect and build it from scratch.";
      newPara.style.marginTop = "1rem";
      container.appendChild(newPara); // Add
    }
  }
  