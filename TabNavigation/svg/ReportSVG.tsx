import * as React from 'react';
import Animated from 'react-native-reanimated';
import Svg, { Path, PathProps, G, Rect, Circle} from 'react-native-svg';
import { SVGProps } from './types';

const AnimatedPath = (Animated.createAnimatedComponent(
  Path
) as any) as React.ComponentClass<
  Animated.AnimateProps<{}, PathProps & { style?: any }>
>;

Animated.addWhitelistedNativeProps({
  stroke: true,
});

const ReportSVG = ({ color, size }: SVGProps) => {
  return (
      <Svg height={size} viewBox="0 0 512 512" width={size} >
        <G>
          <Path d="m304 88h174a10 10 0 0 1 10 10v380a10 10 0 0 1 -10 10h-174a0 0 0 0 1 0 0v-400a0 0 0 0 1 0 0z" fill="#f39f37"/>
          <G>
            <G>
              <Rect fill="#fdbf44" height="432" rx="10" width="304" x="24" y="56"/>
            <Path d="m296 448v8h-240v-368h240v200" fill="#fffcf8"/>
            <Path d="m206.992 48a32.011 32.011 0 0 0 -61.984 0h-57.008v54a10 10 0 0 0 10 10h156a10 10 0 0 0 10-10v-54z" fill="#fa5131"/>
            <G fill="#fdbf44">
              <Path d="m80 320h96v16h-96z"/>
              <Path d="m192 320h32v16h-32z"/>
              <Path d="m80 360h48v16h-48z"/>
              <Path d="m144 360h88v16h-88z"/>
              <Path d="m80 400h96v16h-96z"/>
              <Path d="m192 400h48v16h-48z"/>
            </G>
            </G>
              <G><Circle cx="176" cy="216" fill="#fa5131" r="48"/>
              <Path d="m256 232v-32h-16v8h-8.57a55.716 55.716 0 0 0 -10.6-25.52l6.079-6.078 5.657 5.657 11.313-11.314-22.627-22.627-11.314 11.313 5.657 5.657-6.078 6.079a55.716 55.716 0 0 0 -25.517-10.597v-8.57h8v-16h-32v16h8v8.57a55.716 55.716 0 0 0 -25.52 10.6l-6.078-6.079 5.657-5.657-11.314-11.313-22.627 22.627 11.313 11.314 5.657-5.657 6.079 6.078a55.716 55.716 0 0 0 -10.597 25.517h-8.57v-8h-16v32h16v-8h8.57a55.716 55.716 0 0 0 10.6 25.52l-6.079 6.078-5.657-5.657-11.313 11.314 22.627 22.627 11.314-11.313-5.657-5.657 6.078-6.079a55.716 55.716 0 0 0 25.517 10.597v8.57h-8v16h32v-16h-8v-8.57a55.716 55.716 0 0 0 25.52-10.6l6.078 6.079-5.657 5.657 11.314 11.313 22.627-22.627-11.313-11.314-5.657 5.657-6.079-6.078a55.716 55.716 0 0 0 10.597-25.517h8.57v8zm-80 24a40 40 0 1 1 40-40 40.045 40.045 0 0 1 -40 40z" fill="#fdbf44"/><G fill="#fffbfa"><Path d="m152 208h16v16h-16z"/><Path d="m176 192h16v16h-16z"/><Path d="m176 224h16v16h-16z"/></G></G><G fill="#fffbfa"><Path d="m112 72h16v16h-16z"/><Path d="m224 72h16v16h-16z"/><Path d="m168 48h16v16h-16z"/></G></G><G><Path d="m320.569 465.469c-33.772-24.311-56.437-59.541-63.819-99.2l-.074-.427-9.2-57.112 104.393-45.5 104.395 45.5-9.315 57.685-.039.212c-7.454 40.015-30.413 75.451-64.65 99.779l-30.392 21.594z" fill="#25b1fa"/>
              <Path d="m408 352h-40v-40h-32v40h-40v32h40v40h32v-40h40z" fill="#fafeff"/>
              </G>
              <G fill="#fffdfa">
                <Path d="m352 120h112v16h-112z"/>
                <Path d="m352 160h64v16h-64z"/>
                <Path d="m432 160h32v16h-32z"/>
                <Path d="m400 200h64v16h-64z"/>
                <Path d="m352 200h32v16h-32z"/>
                <Path d="m392 240h72v16h-72z"/></G></G></Svg>
  );
};

export default ReportSVG;
