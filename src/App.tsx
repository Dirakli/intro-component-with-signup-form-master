import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import mobileBackground from "/assets/bg-intro-mobile.png";
import desktopBackground from "/assets/bg-intro-desktop.png";
import Form from "./components/Form";

function App() {

  return (
    <WholeScreen>
      <GlobalStyles />
      <MainWrapper mobileImage={mobileBackground} desktopImage={desktopBackground}>
        <HeadingAndDescriptionWrapper>
          <Heading>Learn to code by watching others</Heading>
          <Desctiption>See how experienced developers solve problems in real-time.
            Watching scripted tutorials is great, but understanding how
            developers think is invaluable. </Desctiption>
        </HeadingAndDescriptionWrapper>
          <Form></Form>
      </MainWrapper>
    </WholeScreen>
  )
}

const HeadingAndDescriptionWrapper = styled.div`
 @media (min-width: 1200px) {
   width: 525px;
   display: flex;
   flex-direction: column;
   margin-right: 45px;
   margin-top: 169px;
 }
`



const Desctiption = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  margin-top: 16px;
  line-height: 26px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  
  @media (min-width: 1200px) {
    text-align: left;
    margin-top: 11px;
  }
`

const Heading = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.29px;
  color: rgba(255, 255, 255, 1);
  text-align: center;

  @media (min-width: 1200px) {
    font-size: 50px;
    line-height: 55px;
    letter-spacing: -0.52px;
    align-items: flex-start;
    text-align: left;
    height: 131px;
}
`

const MainWrapper = styled.div<any>`
  padding-top: 88px;
  width: 375px;
  height: 1000px;
  background-image: url(${(props) => props.mobileImage});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
  justify-content: flex-start;

  @media (min-width: 1200px) {
    width: 1200px;
    height: 800px;
    padding-top: 121px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    background-image: url(${(props) => props.desktopImage});
  }
`

const WholeScreen = styled.div`
  width: 100%;
  height: 1000px;
  background-color: rgba(255, 121, 121, 1);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    align-items: flex-start;
  }
`

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
  text-decoration: none;
}
* {
  box-sizing: border-box;
}

textarea {
  resize: none;
}

button {
  cursor: pointer;
}
`

export default App
