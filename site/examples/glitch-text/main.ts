const smoothMode = document.querySelector<HTMLInputElement>("#smooth-mode");
const slowPreview = document.querySelector<HTMLInputElement>("#slow-preview");

if (smoothMode === null || slowPreview === null) {
  throw new Error("Missing animation controls");
}

const smoothModeInput = smoothMode;
const slowPreviewInput = slowPreview;

function updateMotionMode() {
  document.documentElement.dataset.motion = smoothModeInput.checked
    ? "smooth"
    : "stepped";
  document.documentElement.dataset.preview = slowPreviewInput.checked
    ? "slow"
    : "normal";
}

smoothModeInput.addEventListener("change", updateMotionMode);
slowPreviewInput.addEventListener("change", updateMotionMode);
updateMotionMode();
