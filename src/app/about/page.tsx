"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <div className="w-3/4 lg:w-2/4 flex flex-col items-center gap-10">
        <h1 className="text-4xl">About Very Fast Bulk URL Opener</h1>
        <div className="text-lg">
          <p>
            <strong>Very Fast Bulk URL Opener</strong> is a convenient tool
            designed to help users open multiple URLs simultaneously. Whether
            you need to check multiple websites for updates, open a series of
            links for a project, or simply manage multiple tabs efficiently, our
            tool provides a quick and easy solution.
          </p>
          <p className="mt-4">
            <strong>Features:</strong>
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Paste multiple URLs and open them all at once.</li>
            <li>Supports opening URLs in new tabs.</li>
            <li>Clear the list of URLs with a single click.</li>
            <li>Detects if pop-ups are blocked and provides a warning.</li>
          </ul>
          <p className="mt-4">
            To use this tool, simply paste your URLs into the provided textarea,
            and click "Open". Ensure that your browser allows pop-ups for this
            site to function correctly.
          </p>
          <p className="mt-4">
            <strong>Note:</strong> If pop-ups are blocked, a notification will
            appear asking you to enable pop-ups for this site.
          </p>
        </div>
      </div>
    </main>
  );
}
