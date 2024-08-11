import { useState, useEffect } from "react";

import useWindowWidth from "./useWindowWidth";

const useColumnsWidth = () => {
  const [columnWidth, setColumnWidth] = useState<string>();
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth > 1440) setColumnWidth("72.5px");
    else if (windowWidth > 1124 && windowWidth < 1440) setColumnWidth("50px");
    else setColumnWidth("50px");
  }, [windowWidth]);

  return columnWidth;
};

export default useColumnsWidth;
