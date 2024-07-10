import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { PlusSquare } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/components/ui/button";
const Addresume = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");

  const onCreate = () => {
    const uuid = uuidv4();
    console.log(resumeTitle, uuid);
    setResumeTitle("");
  };

  return (
    <div>
      <div
        className="p-14 py-24 border border-dotted items-center flex justify-center bg-secondary h-[280px] rounded-lg hover:scale-105 transition-all hover:shadow-md cursor-pointer"
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>

      {/* Dialog Box = Opens on clicking the adding new resume  */}
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-left">Create New Resume</DialogTitle>
            <DialogDescription>
              <p className="text-left">Add a title for your new resume</p>
              <Input
                className="my-2"
                value={resumeTitle}
                placeholder="Ex.Full Stack Resume"
                onChange={(e) => setResumeTitle(e.target.value)}
              />
            </DialogDescription>
            <div className="flex justify-end gap-5">
              <Button variant="ghost" onClick={() => setOpenDialog(false)}>
                Cancel
              </Button>
              <Button disabled={!resumeTitle} onClick={onCreate}>
                Create
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Addresume;
