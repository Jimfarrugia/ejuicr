import styled from "styled-components";
import { colors } from "../../constants";

export const SpinnerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 0;

  .spinner {
    animation: rotator 1.4s linear infinite;
  }

  @keyframes rotator {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }

  .path {
    stroke-dasharray: 187;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
  }

  @keyframes colors {
    0% {
      stroke: ${colors.cyan};
    }
    25% {
      stroke: ${colors.blue};
    }
    50% {
      stroke: ${colors.purple};
    }
    75% {
      stroke: ${colors.pink};
    }
    100% {
      stroke: ${colors.yellow};
    }
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: 187;
      transform: rotate(0);
    }
    50% {
      stroke-dashoffset: 47;
      transform: rotate(135deg);
    }
    100% {
      stroke-dashoffset: 187;
      transform: rotate(450deg);
    }
  }
`;
