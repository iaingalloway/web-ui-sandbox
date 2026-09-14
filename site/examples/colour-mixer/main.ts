const channels = ["red", "green", "blue"] as const;

const inputs = channels.map((channel) => {
  const input = document.querySelector<HTMLInputElement>(
    `input[name="${channel}"]`
  );

  if (input === null) {
    throw new Error(`Missing ${channel} input`);
  }

  return input;
});

const value = document.querySelector<HTMLParagraphElement>("#value");

if (value === null) {
  throw new Error("Missing #value element");
}

const valueElement = value;

function updateColour() {
  const colour = inputs.map((input) => Number(input.value));
  const cssColour = `rgb(${colour.join(" ")})`;
  const hexColour = colour
    .map((channel) => channel.toString(16).padStart(2, "0"))
    .join("");

  document.documentElement.style.setProperty("--colour", cssColour);
  valueElement.textContent = `${cssColour} / #${hexColour}`;
}

for (const input of inputs) {
  input.addEventListener("input", updateColour);
}

updateColour();
