import React from "react";
import styled from "styled-components";
import theme, { flexCenter } from "../Styles/Theme";

function Faq() {
  return (
    <FaqContainer>
      <Title>
        <h1>FAQS</h1>
        <h4>Exponential Growth & Logarithmic Scales</h4>
      </Title>
      <p>
        What is exponential growth? And how does it relate to the use of
        logarithmic scales?
      </p>
      <p>
        At the beginning of an epidemic, epidemic growth exponentially.
        Exponential growth is growth that happens by multiplying rather than
        adding.
      </p>
      <p>
        Compare linear growth that adds 10 at each time step with exponential
        growth that multiplies by 2.
      </p>
      <p>A linear growth sequence that adds 10 at each time step looks like:</p>
      <pre>0, 10, 20, 30, 40, 50, 60, 70, 80, 100…</pre>
      <p>
        Whereas exponential sequence that multiplies by 2 at each time step
        looks like:
      </p>
      <pre>1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024....</pre>
      <p>
        At the beginning, linear growth seems faster (20 is much larger than 4),
        but linear growth does not accelerate. It adds the same amount every
        time. Exponential growth accelerates, adding more at each time step, so
        it can grow suddenly.
      </p>
      <p>
        After 10 steps, linear (+10) growth brings us to 100. Exponential (x2)
        growth brings us to (1,024). After 20 steps, linear growth only brings
        us to 200. Exponential growth to more than 1 million!
      </p>
      <p>
        Exponential growth is so fast that to appreciate it better we need to
        use logarithmic scales. These are scales that also grow by multiples.
        For example, a logarithmic scale between 1 and 1,000,000 goes from 1 to
        10, from 10 to 100, from 100 to 1,000, from 1,000 to 10,000, from 10,000
        to 100,000, and from 100,000 to 1,000,000. This is a logarithmic scale
        in base 10, because we are multiplying by ten each time. What this scale
        shows is that, in exponential growth, 1,000 is halfway to 1,000,000.
        That’s why it is important to stop exponential growth even if the
        numbers look small. The same number of steps that bring you from 1 to
        1,000 bring you from 1,000 to 1,000,000.
      </p>
      <p>
        Strictly speaking, epidemic processes are only exponential early on,
        when the number of cases is small compared to the size of the population
        or other limiting factors. Eventually, growth peters out, either because
        spreading became widespread, or because other factors, such as physical
        distancing, or immunization, reduces the speed of the spreading. To
        learn more about the basic functional forms of epidemic spreading, watch
        this video prepared by the CDC.
      </p>
      <Title>
        <h4>Disclaimer</h4>
        <p>
          Information on this site is provided on an “as is” and “as available”
          basis. Data USA makes every effort to ensure, but does not guarantee,
          the accuracy or completeness of the information on the Data USA
          website. This site is for informational purposes and is not intended
          provide advice or aid in decision making. Our goal is to keep this
          information timely. If errors are brought to our attention, we will
          try to correct them.
        </p>
      </Title>
    </FaqContainer>
  );
}

export default Faq;

const FaqContainer = styled.div`
  padding-bottom: 60px;
  ${flexCenter}
  flex-direction:column;
  text-align: left;
  color: #333;

  p {
    width: 600px;
    margin-bottom: 10px;
    text-align: left;
    font-size: 15px;
    line-height: 23px;
    opacity: 0.8;
  }

  pre {
    width: 600px;
    height: 40px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    border: 1px solid ${theme.grey};
    border-radius: 3px;
    text-indent: 10px;
    font-size: 13px;
    font-family: monospace;
    background-color: ${theme.white};
  }
`;

const Title = styled.div`
  width: 600px;
  margin: 10px 0;
  font-family: ${theme.fontTitle};

  h1 {
    margin-bottom: 50px;
    font-size: 48px;
    text-align: center;
  }

  h4 {
    margin-bottom: 30px;
    font-size: 30px;
    text-align: left;
  }
`;
