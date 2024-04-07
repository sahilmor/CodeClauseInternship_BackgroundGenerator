document.addEventListener("DOMContentLoaded", function() {
    const color1Input = document.getElementById("color1");
    const color2Input = document.getElementById("color2");
    const gradientTypeSelect = document.getElementById("gradientType");
    const previewDiv = document.querySelector(".preview");
    const cssCodeTextarea = document.getElementById("cssCode");
    const generateBtn = document.getElementById("generateBtn");

    generateBtn.addEventListener("click", generateBackground);

    function generateBackground() {
        const color1 = color1Input.value;
        const color2 = color2Input.value;
        const gradientType = gradientTypeSelect.value;

        const gradientValue = gradientType === "linear" ?
            `linear-gradient(to right, ${color1}, ${color2})` :
            `radial-gradient(${color1}, ${color2})`;

        previewDiv.style.background = gradientValue;

        const cssCode = `background: ${gradientValue};`;
        cssCodeTextarea.value = cssCode;
    }
});
