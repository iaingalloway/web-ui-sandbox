const smoothMode = document.querySelector<HTMLInputElement>("#smooth-mode");
const slowPreview = document.querySelector<HTMLInputElement>("#slow-preview");
const horizontalJitter =
  document.querySelector<HTMLInputElement>("#horizontal-jitter");
const skewJitter = document.querySelector<HTMLInputElement>("#skew-jitter");
const chromaticAberration = document.querySelector<HTMLInputElement>(
  "#chromatic-aberration"
);
const sliceEffect = document.querySelector<HTMLInputElement>("#slice-effect");
const reduceMotion = document.querySelector<HTMLInputElement>("#reduce-motion");

if (
  smoothMode === null ||
  slowPreview === null ||
  horizontalJitter === null ||
  skewJitter === null ||
  chromaticAberration === null ||
  sliceEffect === null ||
  reduceMotion === null
) {
  throw new Error("Missing animation controls");
}

const smoothModeInput = smoothMode;
const slowPreviewInput = slowPreview;
const horizontalJitterInput = horizontalJitter;
const skewJitterInput = skewJitter;
const chromaticAberrationInput = chromaticAberration;
const sliceEffectInput = sliceEffect;
const reduceMotionInput = reduceMotion;

function updateMotionMode() {
  document.documentElement.dataset.motion = reduceMotionInput.checked
    ? "reduced"
    : smoothModeInput.checked
      ? "smooth"
      : "stepped";
  document.documentElement.dataset.preview = slowPreviewInput.checked
    ? "slow"
    : "normal";
  document.documentElement.dataset.horizontalJitter =
    horizontalJitterInput.checked ? "on" : "off";
  document.documentElement.dataset.skewJitter = skewJitterInput.checked
    ? "on"
    : "off";
  document.documentElement.dataset.chromaticAberration =
    chromaticAberrationInput.checked ? "on" : "off";
  document.documentElement.dataset.slices = sliceEffectInput.checked
    ? "on"
    : "off";
}

smoothModeInput.addEventListener("change", updateMotionMode);
slowPreviewInput.addEventListener("change", updateMotionMode);
horizontalJitterInput.addEventListener("change", updateMotionMode);
skewJitterInput.addEventListener("change", updateMotionMode);
chromaticAberrationInput.addEventListener("change", updateMotionMode);
sliceEffectInput.addEventListener("change", updateMotionMode);
reduceMotionInput.addEventListener("change", updateMotionMode);
updateMotionMode();
