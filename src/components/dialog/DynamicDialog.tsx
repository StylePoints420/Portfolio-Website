import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDialog } from "@/hooks/useDialog";

interface dialogDetails {
  dialogTitle: string;
  dialogDescription: string;
  dialog: ReturnType<typeof useDialog>;
}

interface Props {
  dialogDetails: dialogDetails;
  children: React.ReactNode;
}

const DynamicDialog = ({ dialogDetails, children }: Props) => {
  return (
    <Dialog {...dialogDetails.dialog.dialogProps}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialogDetails.dialogTitle}</DialogTitle>
          <DialogDescription>
            {dialogDetails.dialogDescription}
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DynamicDialog;
