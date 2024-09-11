import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { useSelector } from "react-redux";

function Loading() {
  const { Loading } = useSelector((store) => store.product);

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={Loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Loading;
