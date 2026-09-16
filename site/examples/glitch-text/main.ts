const smoothMode = document.querySelector<HTMLInputElement>("#smooth-mode");
const slowPreview = document.querySelector<HTMLInputElement>("#slow-preview");
const horizontalJitter =
  document.querySelector<HTMLInputElement>("#horizontal-jitter");
const skewJitter = document.querySelector<HTMLInputElement>("#skew-jitter");
const chromaticAberration = document.querySelector<HTMLInputElement>(
  "#chromatic-aberration"
);
const sliceEffect = document.querySelector<HTMLInputElement>("#slice-effect");
const verticalRoll = document.querySelector<HTMLInputElement>("#vertical-roll");
const scanlineInterference = document.querySelector<HTMLInputElement>(
  "#scanline-interference"
);
const signalDropout =
  document.querySelector<HTMLInputElement>("#signal-dropout");
const luminanceSurge =
  document.querySelector<HTMLInputElement>("#luminance-surge");
const turbulenceDisplacement = document.querySelector<HTMLInputElement>(
  "#turbulence-displacement"
);
const zalgoDistortion =
  document.querySelector<HTMLInputElement>("#zalgo-distortion");
const reduceMotion = document.querySelector<HTMLInputElement>("#reduce-motion");

if (
  smoothMode === null ||
  slowPreview === null ||
  horizontalJitter === null ||
  skewJitter === null ||
  chromaticAberration === null ||
  sliceEffect === null ||
  verticalRoll === null ||
  scanlineInterference === null ||
  signalDropout === null ||
  luminanceSurge === null ||
  turbulenceDisplacement === null ||
  zalgoDistortion === null ||
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
const verticalRollInput = verticalRoll;
const scanlineInterferenceInput = scanlineInterference;
const signalDropoutInput = signalDropout;
const luminanceSurgeInput = luminanceSurge;
const turbulenceDisplacementInput = turbulenceDisplacement;
const zalgoDistortionInput = zalgoDistortion;
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
  document.documentElement.dataset.verticalRoll = verticalRollInput.checked
    ? "on"
    : "off";
  document.documentElement.dataset.scanlineInterference =
    scanlineInterferenceInput.checked ? "on" : "off";
  document.documentElement.dataset.signalDropout = signalDropoutInput.checked
    ? "on"
    : "off";
  document.documentElement.dataset.luminanceSurge = luminanceSurgeInput.checked
    ? "on"
    : "off";
  document.documentElement.dataset.turbulenceDisplacement =
    turbulenceDisplacementInput.checked ? "on" : "off";
  document.documentElement.dataset.zalgoDistortion =
    zalgoDistortionInput.checked ? "on" : "off";
}

smoothModeInput.addEventListener("change", updateMotionMode);
slowPreviewInput.addEventListener("change", updateMotionMode);
horizontalJitterInput.addEventListener("change", updateMotionMode);
skewJitterInput.addEventListener("change", updateMotionMode);
chromaticAberrationInput.addEventListener("change", updateMotionMode);
sliceEffectInput.addEventListener("change", updateMotionMode);
verticalRollInput.addEventListener("change", updateMotionMode);
scanlineInterferenceInput.addEventListener("change", updateMotionMode);
signalDropoutInput.addEventListener("change", updateMotionMode);
luminanceSurgeInput.addEventListener("change", updateMotionMode);
turbulenceDisplacementInput.addEventListener("change", updateMotionMode);
zalgoDistortionInput.addEventListener("change", updateMotionMode);
reduceMotionInput.addEventListener("change", updateMotionMode);
updateMotionMode();
