"use client";

function Error({ error }) {
  console.log("error", error);
  return (
    <main className="error">
      <h1>An error occured</h1>
      <p>Failed to fetch meal data plz try again later</p>
    </main>
  );
}

export default Error;
