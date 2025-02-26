"use client";

export default function CustomErrorFallback({ error }: { error: Error }) {
  return (
    <div>
      <h2>Terjadi Kesalahan</h2>
      <p>{error.message}</p>
    </div>
  );
}
