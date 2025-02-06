// script.js
// Add any interactive JavaScript functionality here if needed
document.addEventListener("DOMContentLoaded", function() {
    // Example: Add a simple animation to the tools section
    const toolsSection = document.getElementById('tools-used');
    toolsSection.addEventListener('mouseover', () => {
        toolsSection.style.transform = 'scale(1.02)';
        toolsSection.style.transition = 'transform 0.3s ease';
    });

    toolsSection.addEventListener('mouseout', () => {
        toolsSection.style.transform = 'scale(1)';
    });
});