const message = document.querySelector<HTMLParagraphElement>("#message");

if (message === null) {
  throw new Error("Missing #message element");
}

message.textContent = "Hello from TypeScript.";
