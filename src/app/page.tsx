import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
// import { useState } from "react";

export default function Home() {
  // const [bulkLinks, setBulkLinks] = useState("");
  // const [popupBlocked, setPopupBlocked] = useState(false);

  // const handleOpenLinks = () => {
  //   setPopupBlocked(false);
  //   const linksArray = bulkLinks
  //     .split("\n")
  //     .filter((link) => link.trim() !== "");

  //   let popupWindow = window.open("about:blank", "_blank");
  //   if (
  //     !popupWindow ||
  //     popupWindow.closed ||
  //     typeof popupWindow.closed === "undefined"
  //   ) {
  //     setPopupBlocked(true);
  //     return;
  //   }
  //   popupWindow.close();

  //   linksArray.forEach((link, index) => {
  //     setTimeout(() => {
  //       window.open(link.trim(), "_blank");
  //     }, index * 100); // 500ms delay between each link opening
  //   });
  // };

  // const handleClear = () => {
  //   setBulkLinks("");
  // };

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-5 mt-5">
      <div className="w-3/4 lg:w-2/4 flex flex-col items-center gap-10">
        <h1 className="text-4xl">Very Fast Bulk URL Opener</h1>

        <div className="grid w-full gap-2">
          <Textarea
            placeholder="Paste Your Links here"
            rows={15}
            cols={15}
            // value={bulkLinks}
            // onChange={(e) => setBulkLinks(e.target.value)}
          />
          <div className="flex justify-between items-center md:flex-row flex-col ">
            <Button
              variant={"default"}
              className="w-80 mx-auto mt-5"
              // onClick={handleOpenLinks}
            >
              Open
            </Button>{" "}
            <Button
              variant={"destructive"}
              className="w-80 mx-auto mt-5"
              // onClick={handleClear}
            >
              Clear
            </Button>
          </div>
        </div>
        <p className="mt-4">
          <strong>Note:</strong> If pop-ups are blocked, a notification will
          appear asking you to enable pop-ups for this site.
        </p>
      </div>
    </main>
  );
}
