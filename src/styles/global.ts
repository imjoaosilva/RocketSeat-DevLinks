import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  .react-toggle {
    margin-bottom: 24px;
  }

  .react-toggle--checked .react-toggle-track {
    background-color: #FFCCFF;
  }

  .react-toggle-track {
    background-color: black;
}
  
  .react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: #FFCCFF;
    opacity: 0.5;
  }

  .react-toggle--checked .react-toggle-thumb {
    left: 27px;
    border-color: white;
  }

  .react-toggle--focus .react-toggle-thumb {
    box-shadow: none;
  }

  .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
    box-shadow: none;
  }

}
  
`