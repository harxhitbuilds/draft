export default function Background() {
  return (
    <div
      className="absolute inset-0 -z-10"
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage: `
       radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
       radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
     `,
        backgroundSize: "10px 10px",
        imageRendering: "pixelated",
      }}
    />
  );
}
