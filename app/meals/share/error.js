"use client";

function Error({ error }) {
  console.log("error", error);
  return (
    <main className="error">
      <h1>An error occured</h1>
      <p>Failed to Create meal.</p>
    </main>
  );
}

export default Error;
