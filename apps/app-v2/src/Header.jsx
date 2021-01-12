import React from 'react';
function Header({className}) {
  return (
  <header className={`Header ${className}`}>
  <svg className="Header__icon" width="48.891px" height="48.891px" viewBox="0 -3.99 48.891 48.891" xmlns="http://www.w3.org/2000/svg">
    <g id="gold_bars_shiny" data-name="gold bars shiny" transform="translate(-130.272 -38.481)">
      <path id="Path_7" data-name="Path 7" d="M154.718,78.89l-3.991-11.973H134.763L130.772,78.89Z" fill="#ffe959" fill-rule="evenodd"/>
      <path id="Path_8" data-name="Path 8" d="M178.663,78.89l-3.991-11.973H158.708L154.718,78.89Z" fill="#ffe959" fill-rule="evenodd"/>
      <path id="Path_9" data-name="Path 9" d="M166.69,66.917,162.7,54.944H146.736l-3.991,11.973Z" fill="#ffe959" fill-rule="evenodd"/>
      <path id="gold" d="M142.745,42.189l3.991,6.913m-12.757,1.851,6.914,3.991m-10.121,7.982h7.982m39.909,0h-7.982m4.773-11.973-6.912,3.991M166.69,42.189,162.7,49.1m-7.981-10.121v7.981M166.69,66.917,162.7,54.944H146.736l-3.991,11.973ZM176,70.908l-1.331-3.991H158.708l-3.99,11.973h23.945L177.332,74.9m-45.229,0-1.331,3.991h23.946l-3.991-11.973H134.763l-1.331,3.991" fill="none" stroke="#0f0e0b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
    </g>
  </svg>
    <ul className="Header__nav">
      <li className="Header__navLinks">Products</li>
      <li className="Header__navLinks">About us</li>
      <li className="Header__navLinks">Contact</li>
    </ul>
  </header>
  );
}
Header.defaultProps = {
  className: ''
}
export default Header;
