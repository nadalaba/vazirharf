"use client";

import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Grow, { GrowProps } from "@mui/material/Grow";

export default function Toast(props: {
  message: string;
  open: boolean;
  handleClose: () => void;
}) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={props.open}
      onClose={props.handleClose}
      slots={{ transition: (props: GrowProps) => <Grow {...props} /> }}
      message={props.message}
      key={props.message + new Date().getTime()}
      autoHideDuration={10000}
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          sx={{ p: 0.5 }}
          onClick={props.handleClose}
        >
          <CloseIcon />
        </IconButton>
      }
    />
  );
}
