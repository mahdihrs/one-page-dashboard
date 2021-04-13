import * as React from 'react';
import { useMediaQuery as useMediaQueryResponsive } from 'react-responsive';

function useMediaQuery({
  desktopWidth,
  smallDesktopWidth,
  tabletWidth,
  midMobileWidth,
  mobileWidth
} = {}) {
  const [width, setWidth] = React.useState(600);

  // const isBigScreen = useMediaQueryResponsive({ query: '(min-device-width: 1440px)' });
  const isDesktopOrLaptop = useMediaQueryResponsive({ query: '(min-device-width: 1440px)' });
  const isSmallDesktopOrLaptop = useMediaQueryResponsive({ query: '(min-device-width: 1200px)' });
  const isTabletOrMobile = useMediaQueryResponsive({ query: '(min-device-width: 992px)' });
  const isTabletOrMobileDevice = useMediaQueryResponsive({ query: '(min-device-width: 576px)' });
  const isMobile = useMediaQueryResponsive({ query: '(min-device-width: 320px)' });

  React.useEffect(() => {
    if (isDesktopOrLaptop) {
      setWidth(desktopWidth);
    } else if (isSmallDesktopOrLaptop) {
      setWidth(smallDesktopWidth);
    } else if (isTabletOrMobile) {
      setWidth(tabletWidth);
    } else if (isTabletOrMobileDevice) {
      setWidth(midMobileWidth);
    } else if (isMobile) {
      setWidth(mobileWidth);
    }
  }, [desktopWidth, isDesktopOrLaptop, isMobile, isSmallDesktopOrLaptop, isTabletOrMobile, isTabletOrMobileDevice, midMobileWidth, mobileWidth, smallDesktopWidth, tabletWidth]);

  return width;
}

export default useMediaQuery;