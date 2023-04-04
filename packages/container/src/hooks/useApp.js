import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

const useMicroApp = (mountApp, onSignIn) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mountApp(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname: currentPathname } = history.location;
        if (nextPathname !== currentPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn,
    });

    history.listen(onParentNavigate);
  }, []);

  return ref;
};

export default useMicroApp;
