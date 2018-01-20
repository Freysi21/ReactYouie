import styled from 'styled-components';

const ParallaxBackground = styled.div`
  width: ${({width}) => width};
  height: ${({height}) => height};
  min-height: 50vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("${({img}) => img}");
`
ParallaxBackground.defaultProps = {
  img: "https://www.samcodes.co.uk/project/geometrize-haxe-web/assets/images/xseagull.jpg.pagespeed.ic.iK66EGA15-.jpg",
  height: "100vh",
  width: "100vw",
};

export default ParallaxBackground;
