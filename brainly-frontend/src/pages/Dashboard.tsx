import "../App.css";
import Button from "../components/ui/Button";
import { PlusIcon } from "../icons/PlusIcon";
import ShareIcon from "../icons/ShareIcon";
import Card from "../components/ui/Card";
import { CreateContentModal } from "../components/ui/CreateContentModal";
import { useState } from "react";
import { Sidebar } from "../components/ui/Sidebar";
import { useContent } from "../hooks/useContent";

function Dashboard() {
  const [open, onclose] = useState(false);
  const contents = useContent();

  return (
    <>
      <Sidebar></Sidebar>
      <div
        className="pl-80 bg-[#f9fbfc] min-h-screen
      "
      >
        <CreateContentModal
          open={open}
          onClose={() => {
            onclose(false);
          }}
        ></CreateContentModal>
        <div
          className="flex justify-between
          m-2 mb-8 mt-0 pt-5 items-center "
        >
          <h1 className="text-2xl font-semibold">All Notes</h1>
          <div
            className="flex 
          "
          >
            <Button
              text="Add Content"
              variant="Primary"
              size="md"
              onClick={() => {
                onclose(true);
              }}
              startIcon={<PlusIcon size="md" />}
            ></Button>

            <Button
              text="Share Brain"
              variant="Secondary"
              size="md"
              startIcon={<ShareIcon size="md" />}
              onClick={() => {}}
            ></Button>
          </div>
        </div>

        <div className="flex gap-4 m-2 ">
          {contents.map(
            (content: {
              link: string;
              type: "Youtube" | "Twitter";
              title: string;
            }) => (
              <Card
                link={content.link}
                type={content.type}
                title={content.title}
              ></Card>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
