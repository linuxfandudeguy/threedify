// threedify.js
"use strict";
export class threedify {
  constructor(container, deltaX, deltaY) {
    this.container = container;
    this.deltaX = deltaX;
    this.deltaY = deltaY;

    this.initContainer();
    this.addMouseEventListeners();
  }

  // Initialize the container with 3D styles
  initContainer() {
    this.container.style.perspective = "1000px";
    this.container.style.position = "relative";
    this.container.style.overflow = "hidden"; // Hide overflow
  }

  // Create and add a shadow-like element layer
  addElementLayer(element) {
    const layer = document.createElement("div");
    layer.classList.add("content-layer");
    layer.textContent = element.textContent || element.alt || "Element";

    // Apply layer-specific styles
    layer.style.position = "absolute";
    layer.style.display = "flex";
    layer.style.alignItems = "center";
    layer.style.justifyContent = "center";
    layer.style.fontSize = "24px";
    layer.style.color = "rgba(255, 255, 255, 0.8)"; // Light color for text
    layer.style.textAlign = "center";
    layer.style.transformStyle = "preserve-3d";
    layer.style.transition = "transform 0.1s"; // Smooth transition

    // Set shadow-like styling
    layer.style.textShadow = `1px 1px 2px rgba(0, 0, 0, 0.5)`; // Shadow effect
    layer.style.background = `rgba(0, 0, 0, 0.3)`; // Dark background
    layer.style.transform = `translateZ(0px)`; // Start without any depth

    this.container.appendChild(layer);
    // Position layer based on its original position
    const rect = element.getBoundingClientRect();
    layer.style.left = `${rect.left - this.container.offsetLeft}px`;
    layer.style.top = `${rect.top - this.container.offsetTop}px`;
    layer.style.transform = `translateZ(0px)`; // Initial depth for the element
  }

  // Mouse movement effect
  addMouseEventListeners() {
    this.container.addEventListener("mousemove", (event) => {
      const rect = this.container.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) / 10;
      const y = (event.clientY - rect.top - rect.height / 2) / 10;

      this.container.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
  }
}
