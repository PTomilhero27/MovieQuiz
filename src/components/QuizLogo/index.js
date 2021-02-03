import styled from 'styled-components';



import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="280" height="80" viewBox="0 0 250 150" fill="none" className={className}>
<path d="M11.72 33.96H56.76V46.76H11.72V33.96ZM26.2 49.96H42.2V89H26.2V49.96ZM93.2444 61.48C93.2444 56.84 93.2177 53.8 93.1644 52.36C93.0577 50.1733 92.7644 48.6 92.2844 47.64C91.8044 46.6267 91.031 46.0133 89.9644 45.8C88.8977 45.64 87.3777 45.56 85.4044 45.56C83.111 45.56 81.6177 45.6667 80.9244 45.88V33.4C81.4044 33.3467 82.1244 33.32 83.0844 33.32H85.4044C91.3777 33.32 95.991 33.8 99.2444 34.76C102.551 35.6667 104.951 37.1867 106.444 39.32C107.831 41.2933 108.684 43.88 109.004 47.08C109.378 50.28 109.564 55.08 109.564 61.48C109.564 67.08 109.431 71.4 109.164 74.44C108.951 77.4267 108.364 79.9067 107.404 81.88C106.338 84.12 104.684 85.8267 102.444 87C100.258 88.1733 97.191 88.9467 93.2444 89.32V61.48ZM85.4044 89.64C77.6177 89.64 72.0177 88.7867 68.6044 87.08C66.8444 86.2267 65.4577 85.08 64.4444 83.64C63.431 82.2 62.6844 80.4133 62.2044 78.28C61.7777 76.4133 61.511 74.28 61.4044 71.88C61.2977 69.4267 61.2444 65.96 61.2444 61.48C61.2444 55.88 61.351 51.5867 61.5644 48.6C61.831 45.6133 62.4444 43.1067 63.4044 41.08C64.471 38.8933 66.0977 37.2133 68.2844 36.04C70.471 34.8667 73.5644 34.0667 77.5644 33.64V61.48C77.5644 64.6267 77.6177 67.64 77.7244 70.52C77.831 72.7067 78.0977 74.3067 78.5244 75.32C79.0044 76.3333 79.7777 76.92 80.8444 77.08C81.751 77.2933 83.271 77.4 85.4044 77.4C87.591 77.4 89.0844 77.32 89.8844 77.16V89.56C89.4044 89.6133 88.6844 89.64 87.7244 89.64H85.4044ZM118.544 36.36V33.96H133.264L156.304 82.92L153.664 89H143.264L118.544 36.36ZM163.744 65.88H163.424L158.064 78.84L151.184 64.12L163.744 33.96H178.944V89H163.744V65.88ZM118.544 44.28L133.264 75.64V89H118.544V44.28ZM189.325 33.96H205.325V89H189.325V33.96Z" fill="#949494"/>
<path d="M11.72 33.96V32.96H10.72V33.96H11.72ZM56.76 33.96H57.76V32.96H56.76V33.96ZM56.76 46.76V47.76H57.76V46.76H56.76ZM11.72 46.76H10.72V47.76H11.72V46.76ZM26.2 49.96V48.96H25.2V49.96H26.2ZM42.2 49.96H43.2V48.96H42.2V49.96ZM42.2 89V90H43.2V89H42.2ZM26.2 89H25.2V90H26.2V89ZM11.72 34.96H56.76V32.96H11.72V34.96ZM55.76 33.96V46.76H57.76V33.96H55.76ZM56.76 45.76H11.72V47.76H56.76V45.76ZM12.72 46.76V33.96H10.72V46.76H12.72ZM26.2 50.96H42.2V48.96H26.2V50.96ZM41.2 49.96V89H43.2V49.96H41.2ZM42.2 88H26.2V90H42.2V88ZM27.2 89V49.96H25.2V89H27.2ZM93.1644 52.36L94.1638 52.323L94.1632 52.3113L93.1644 52.36ZM92.2844 47.64L91.3806 48.0681L91.3852 48.0777L91.39 48.0872L92.2844 47.64ZM89.9644 45.8L90.1605 44.8194L90.1367 44.8147L90.1127 44.8111L89.9644 45.8ZM80.9244 45.88H79.9244V47.234L81.2185 46.8358L80.9244 45.88ZM80.9244 33.4L80.8139 32.4061L79.9244 32.505V33.4H80.9244ZM99.2444 34.76L98.9614 35.7191L98.9706 35.7218L98.9799 35.7244L99.2444 34.76ZM106.444 39.32L105.625 39.8935L105.626 39.8949L106.444 39.32ZM109.004 47.08L108.009 47.1795L108.01 47.1877L108.011 47.1959L109.004 47.08ZM109.164 74.44L108.168 74.3526L108.167 74.3607L108.167 74.3688L109.164 74.44ZM107.404 81.88L106.505 81.4425L106.502 81.4501L107.404 81.88ZM102.444 87L101.98 86.1141L101.972 86.1188L102.444 87ZM93.2444 89.32H92.2444V90.4191L93.3386 90.3156L93.2444 89.32ZM68.6044 87.08L69.0516 86.1855L69.0406 86.1802L68.6044 87.08ZM64.4444 83.64L63.6266 84.2155L63.6266 84.2155L64.4444 83.64ZM62.2044 78.28L63.18 78.0605L63.1792 78.0572L62.2044 78.28ZM61.4044 71.88L60.4053 71.9234L60.4054 71.9244L61.4044 71.88ZM61.5644 48.6L60.5683 48.5111L60.5675 48.5199L60.5669 48.5288L61.5644 48.6ZM63.4044 41.08L62.5055 40.6415L62.5006 40.6519L63.4044 41.08ZM68.2844 36.04L67.8116 35.1588L67.8116 35.1588L68.2844 36.04ZM77.5644 33.64H78.5644V32.5277L77.4583 32.6456L77.5644 33.64ZM77.7244 70.52L76.725 70.557L76.7256 70.5687L77.7244 70.52ZM78.5244 75.32L77.6027 75.7081L77.6113 75.7283L77.6206 75.7481L78.5244 75.32ZM80.8444 77.08L81.0734 76.1066L81.0334 76.0972L80.9927 76.0911L80.8444 77.08ZM89.8844 77.16H90.8844V75.9402L89.6883 76.1794L89.8844 77.16ZM89.8844 89.56L89.9948 90.5539L90.8844 90.455V89.56H89.8844ZM94.2444 61.48C94.2444 56.8441 94.2178 53.7849 94.1637 52.323L92.1651 52.397C92.2176 53.8151 92.2444 56.8359 92.2444 61.48H94.2444ZM94.1632 52.3113C94.0553 50.1004 93.7572 48.3495 93.1788 47.1928L91.39 48.0872C91.7716 48.8505 92.0601 50.2463 92.1656 52.4087L94.1632 52.3113ZM93.1881 47.2119C92.5777 45.9233 91.5481 45.0969 90.1605 44.8194L89.7683 46.7806C90.5139 46.9297 91.031 47.3301 91.3806 48.0681L93.1881 47.2119ZM90.1127 44.8111C88.9723 44.64 87.3939 44.56 85.4044 44.56V46.56C87.3616 46.56 88.8231 46.64 89.816 46.7889L90.1127 44.8111ZM85.4044 44.56C84.245 44.56 83.2724 44.5869 82.4931 44.6425C81.733 44.6968 81.0914 44.7823 80.6303 44.9242L81.2185 46.8358C81.4507 46.7643 81.9024 46.6898 82.6356 46.6375C83.3497 46.5865 84.2704 46.56 85.4044 46.56V44.56ZM81.9244 45.88V33.4H79.9244V45.88H81.9244ZM81.0348 34.3939C81.4579 34.3469 82.1328 34.32 83.0844 34.32V32.32C82.116 32.32 81.3509 32.3465 80.8139 32.4061L81.0348 34.3939ZM83.0844 34.32H85.4044V32.32H83.0844V34.32ZM85.4044 34.32C91.3429 34.32 95.8442 34.7993 98.9614 35.7191L99.5274 33.8009C96.1378 32.8007 91.4125 32.32 85.4044 32.32V34.32ZM98.9799 35.7244C102.134 36.5891 104.303 38.0044 105.625 39.8935L107.264 38.7465C105.599 36.3689 102.968 34.7442 99.5088 33.7956L98.9799 35.7244ZM105.626 39.8949C106.886 41.6884 107.701 44.0955 108.009 47.1795L109.999 46.9805C109.668 43.6645 108.776 40.8982 107.263 38.7451L105.626 39.8949ZM108.011 47.1959C108.377 50.3361 108.564 55.0888 108.564 61.48H110.564C110.564 55.0712 110.378 50.2238 109.998 46.9641L108.011 47.1959ZM108.564 61.48C108.564 67.0706 108.431 71.3563 108.168 74.3526L110.161 74.5274C110.431 71.4437 110.564 67.0894 110.564 61.48H108.564ZM108.167 74.3688C107.96 77.2716 107.393 79.6174 106.505 81.4425L108.304 82.3175C109.336 80.1959 109.943 77.5817 110.162 74.5112L108.167 74.3688ZM106.502 81.4501C105.53 83.4906 104.033 85.0392 101.98 86.1142L102.908 87.8858C105.336 86.6141 107.146 84.7494 108.307 82.3099L106.502 81.4501ZM101.972 86.1188C99.9514 87.2028 97.0343 87.957 93.1502 88.3244L93.3386 90.3156C97.3478 89.9363 100.564 89.1438 102.917 87.8812L101.972 86.1188ZM94.2444 89.32V61.48H92.2444V89.32H94.2444ZM85.4044 88.64C77.6438 88.64 72.2443 87.7819 69.0516 86.1856L68.1572 87.9744C71.7912 89.7914 77.5916 90.64 85.4044 90.64V88.64ZM69.0406 86.1802C67.416 85.3925 66.1674 84.3509 65.2622 83.0645L63.6266 84.2155C64.748 85.8091 66.2727 87.0609 68.1681 87.9798L69.0406 86.1802ZM65.2622 83.0645C64.3401 81.7542 63.638 80.0959 63.18 78.0605L61.2288 78.4995C61.7308 80.7308 62.522 82.6458 63.6266 84.2155L65.2622 83.0645ZM63.1792 78.0572C62.7688 76.2617 62.508 74.1899 62.4034 71.8356L60.4054 71.9244C60.5141 74.3701 60.7866 76.565 61.2295 78.5028L63.1792 78.0572ZM62.4034 71.8366C62.2977 69.4049 62.2444 65.9552 62.2444 61.48H60.2444C60.2444 65.9648 60.2977 69.4484 60.4053 71.9234L62.4034 71.8366ZM62.2444 61.48C62.2444 55.8872 62.3511 51.622 62.5618 48.6712L60.5669 48.5288C60.351 51.5513 60.2444 55.8728 60.2444 61.48H62.2444ZM62.5604 48.6889C62.8199 45.7826 63.4125 43.3988 64.3081 41.5081L62.5006 40.6519C61.4762 42.8145 60.8422 45.444 60.5683 48.5111L62.5604 48.6889ZM64.3031 41.5184C65.2758 39.5244 66.7515 37.9974 68.7572 36.9212L67.8116 35.1588C65.4439 36.4293 63.6662 38.2623 62.5056 40.6416L64.3031 41.5184ZM68.7572 36.9212C70.7812 35.8351 73.7289 35.0548 77.6704 34.6344L77.4583 32.6456C73.3998 33.0785 70.1609 33.8982 67.8116 35.1588L68.7572 36.9212ZM76.5644 33.64V61.48H78.5644V33.64H76.5644ZM76.5644 61.48C76.5644 64.6379 76.6179 67.6636 76.7251 70.557L78.7237 70.483C78.6175 67.6164 78.5644 64.6154 78.5644 61.48H76.5644ZM76.7256 70.5687C76.8334 72.78 77.1051 74.5261 77.6027 75.7081L79.446 74.9319C79.0903 74.0872 78.8287 72.6333 78.7232 70.4713L76.7256 70.5687ZM77.6206 75.7481C78.2365 77.0483 79.2846 77.8572 80.696 78.0689L80.9927 76.0911C80.2709 75.9828 79.7722 75.6184 79.4281 74.8919L77.6206 75.7481ZM80.6153 78.0534C81.6448 78.2957 83.2669 78.4 85.4044 78.4V76.4C83.2752 76.4 81.8572 76.291 81.0734 76.1066L80.6153 78.0534ZM85.4044 78.4C87.5826 78.4 89.1701 78.3227 90.0805 78.1406L89.6883 76.1794C88.9986 76.3173 87.5995 76.4 85.4044 76.4V78.4ZM88.8844 77.16V89.56H90.8844V77.16H88.8844ZM89.7739 88.5661C89.3509 88.6131 88.676 88.64 87.7244 88.64V90.64C88.6928 90.64 89.4579 90.6135 89.9948 90.5539L89.7739 88.5661ZM87.7244 88.64H85.4044V90.64H87.7244V88.64ZM118.544 36.36H117.544V36.5831L117.639 36.7851L118.544 36.36ZM118.544 33.96V32.96H117.544V33.96H118.544ZM133.264 33.96L134.169 33.5342L133.898 32.96H133.264V33.96ZM156.304 82.92L157.221 83.3183L157.401 82.9034L157.209 82.4942L156.304 82.92ZM153.664 89V90H154.32L154.581 89.3983L153.664 89ZM143.264 89L142.359 89.4251L142.629 90H143.264V89ZM163.744 65.88H164.744V64.88H163.744V65.88ZM163.424 65.88V64.88H162.755L162.5 65.4978L163.424 65.88ZM158.064 78.84L157.158 79.2634L158.12 81.3213L158.988 79.2222L158.064 78.84ZM151.184 64.12L150.261 63.7356L150.091 64.1433L150.278 64.5434L151.184 64.12ZM163.744 33.96V32.96H163.077L162.821 33.5756L163.744 33.96ZM178.944 33.96H179.944V32.96H178.944V33.96ZM178.944 89V90H179.944V89H178.944ZM163.744 89H162.744V90H163.744V89ZM118.544 44.28L119.449 43.8551L117.544 44.28H118.544ZM133.264 75.64H134.264V75.417L134.169 75.2151L133.264 75.64ZM133.264 89V90H134.264V89H133.264ZM118.544 89H117.544V90H118.544V89ZM119.544 36.36V33.96H117.544V36.36H119.544ZM118.544 34.96H133.264V32.96H118.544V34.96ZM132.359 34.3858L155.399 83.3458L157.209 82.4942L134.169 33.5342L132.359 34.3858ZM155.386 82.5217L152.746 88.6017L154.581 89.3983L157.221 83.3183L155.386 82.5217ZM153.664 88H143.264V90H153.664V88ZM144.169 88.5749L119.449 35.9349L117.639 36.7851L142.359 89.4251L144.169 88.5749ZM163.744 64.88H163.424V66.88H163.744V64.88ZM162.5 65.4978L157.14 78.4578L158.988 79.2222L164.348 66.2622L162.5 65.4978ZM158.97 78.4166L152.09 63.6966L150.278 64.5434L157.158 79.2634L158.97 78.4166ZM152.107 64.5044L164.667 34.3444L162.821 33.5756L150.261 63.7356L152.107 64.5044ZM163.744 34.96H178.944V32.96H163.744V34.96ZM177.944 33.96V89H179.944V33.96H177.944ZM178.944 88H163.744V90H178.944V88ZM164.744 89V65.88H162.744V89H164.744ZM117.639 44.7049L132.359 76.0649L134.169 75.2151L119.449 43.8551L117.639 44.7049ZM132.264 75.64V89H134.264V75.64H132.264ZM133.264 88H118.544V90H133.264V88ZM119.544 89V44.28H117.544V89H119.544ZM189.325 33.96V32.96H188.325V33.96H189.325ZM205.325 33.96H206.325V32.96H205.325V33.96ZM205.325 89V90H206.325V89H205.325ZM189.325 89H188.325V90H189.325V89ZM189.325 34.96H205.325V32.96H189.325V34.96ZM204.325 33.96V89H206.325V33.96H204.325ZM205.325 88H189.325V90H205.325V88ZM190.325 89V33.96H188.325V89H190.325Z" fill="white"/>
<path d="M174.056 134.546L162.367 121.792C160.408 119.654 159.112 118.265 158.479 117.624C157.507 116.661 156.707 116.06 156.081 115.82C155.432 115.556 154.816 115.6 154.235 115.952C153.676 116.329 152.942 116.934 152.032 117.767C150.976 118.736 150.333 119.415 150.103 119.806L144.833 114.056C145.032 113.829 145.352 113.512 145.795 113.107L146.864 112.127C149.616 109.605 151.945 107.878 153.849 106.947C155.756 105.968 157.503 105.655 159.092 106.007C160.564 106.331 162.05 107.163 163.549 108.502C165.072 109.819 167.185 111.952 169.887 114.901C172.342 117.579 174.168 119.794 175.366 121.545C176.566 123.249 177.259 124.942 177.445 126.626L188.324 128.728L188.526 128.949L180.269 136.516L174.056 134.546ZM170.646 138.078C167.058 141.366 164.117 143.338 161.824 143.993C160.653 144.343 159.53 144.4 158.455 144.164C157.38 143.929 156.281 143.421 155.159 142.64C154.174 141.96 153.151 141.09 152.088 140.029C151.003 138.944 149.514 137.369 147.623 135.305C145.258 132.724 143.494 130.701 142.331 129.235C141.193 127.746 140.417 126.332 140.004 124.993C139.572 123.535 139.612 122.074 140.124 120.61C140.636 119.146 141.724 117.471 143.386 115.585L155.142 128.413C156.471 129.863 157.768 131.229 159.033 132.511C160.006 133.474 160.804 134.098 161.429 134.385C162.078 134.649 162.682 134.593 163.241 134.216C163.749 133.932 164.494 133.339 165.477 132.438C166.485 131.515 167.139 130.847 167.44 130.436L172.643 136.113C171.754 137.018 171.088 137.673 170.646 138.078ZM196.237 114.626C193.657 116.99 191.475 118.606 189.691 119.472C187.908 120.337 186.256 120.608 184.737 120.282C183.334 119.985 181.951 119.24 180.588 118.048C179.224 116.856 177.337 114.946 174.928 112.316L162.293 98.5298L169.666 91.7735L183.651 107.034C184.485 107.944 185.309 108.794 186.123 109.584C186.781 110.203 187.33 110.58 187.773 110.718C188.215 110.855 188.679 110.769 189.164 110.46C189.623 110.22 190.258 109.729 191.069 108.986L191.916 108.209C192.113 108.029 192.312 107.801 192.512 107.527L197.715 113.204C197.565 113.386 197.331 113.623 197.011 113.916L196.237 114.626ZM175.785 86.1658L183.157 79.4095L195.792 93.1959C197.999 95.6042 199.616 97.4678 200.644 98.7866C201.671 100.105 202.347 101.385 202.67 102.626C203.057 104.035 202.983 105.459 202.449 106.899C201.914 108.338 200.83 109.942 199.195 111.711L175.785 86.1658ZM187.855 75.1047L195.227 68.3484L218.469 93.7095L211.096 100.466L187.855 75.1047ZM199.506 64.4271L218.932 46.6243L223.729 51.8587L223.806 52.5344L204.674 70.067L199.506 64.4271ZM217.376 84.7411L215.131 63.1975L224.051 55.0223L227.208 85.7006L222.342 90.1598L217.376 84.7411ZM228.158 74.453L237.005 66.3455L242.174 71.9853L229.125 83.944L228.158 74.453ZM232.24 50.7731C231.626 50.2508 230.673 49.3835 229.381 48.1712L226.826 45.901L224.888 44.0824L223.868 43.1179L223.362 42.5649L231.582 35.0317L232.089 35.5846L232.998 36.6505L234.604 38.7731L236.68 41.4824L238.986 44.591L245.039 52.6759L239.768 57.5067L232.24 50.7731ZM241.466 61.5797L248.912 54.7558L254.418 60.7643L246.972 67.5882L241.466 61.5797Z" fill="#E5E5E5"/>
<path d="M174.056 134.546L173.319 135.222L173.499 135.419L173.754 135.5L174.056 134.546ZM158.479 117.624L159.191 116.921L159.183 116.913L158.479 117.624ZM156.081 115.82L155.704 116.747L155.714 116.751L155.724 116.754L156.081 115.82ZM154.235 115.952L153.717 115.097L153.696 115.109L153.676 115.123L154.235 115.952ZM150.103 119.806L149.366 120.482L150.281 121.48L150.966 120.312L150.103 119.806ZM144.833 114.056L144.08 113.398L143.491 114.072L144.096 114.732L144.833 114.056ZM153.849 106.947L154.288 107.845L154.297 107.841L154.306 107.836L153.849 106.947ZM159.092 106.007L158.876 106.984L158.877 106.984L159.092 106.007ZM163.549 108.502L162.882 109.248L162.888 109.253L162.895 109.259L163.549 108.502ZM175.366 121.545L174.54 122.11L174.548 122.121L175.366 121.545ZM177.445 126.626L176.451 126.735L176.532 127.468L177.255 127.607L177.445 126.626ZM188.324 128.728L189.061 128.052L188.838 127.809L188.513 127.746L188.324 128.728ZM188.526 128.949L189.202 129.686L189.939 129.011L189.263 128.273L188.526 128.949ZM180.269 136.516L179.967 137.469L180.518 137.644L180.945 137.253L180.269 136.516ZM161.824 143.993L161.549 143.031L161.538 143.035L161.824 143.993ZM158.455 144.164L158.24 145.141L158.24 145.141L158.455 144.164ZM155.159 142.64L155.73 141.819L155.727 141.817L155.159 142.64ZM152.088 140.029L151.381 140.736L151.381 140.737L152.088 140.029ZM142.331 129.235L141.537 129.842L141.542 129.849L141.548 129.856L142.331 129.235ZM140.004 124.993L139.045 125.277L139.048 125.288L140.004 124.993ZM140.124 120.61L139.18 120.28L139.18 120.28L140.124 120.61ZM143.386 115.585L144.124 114.91L143.372 114.09L142.636 114.924L143.386 115.585ZM159.033 132.511L158.322 133.214L158.33 133.222L159.033 132.511ZM161.429 134.385L161.012 135.294L161.032 135.303L161.052 135.311L161.429 134.385ZM163.241 134.216L162.752 133.344L162.716 133.364L162.682 133.387L163.241 134.216ZM167.44 130.436L168.178 129.76L167.353 128.861L166.633 129.846L167.44 130.436ZM172.643 136.113L173.356 136.813L174.021 136.137L173.38 135.437L172.643 136.113ZM174.793 133.871L163.105 121.117L161.63 122.468L173.319 135.222L174.793 133.871ZM163.105 121.117C161.148 118.982 159.839 117.578 159.191 116.921L157.768 118.326C158.385 118.952 159.668 120.327 161.63 122.468L163.105 121.117ZM159.183 116.913C158.193 115.933 157.27 115.205 156.438 114.886L155.724 116.754C156.145 116.915 156.821 117.389 157.776 118.334L159.183 116.913ZM156.458 114.894C155.527 114.515 154.579 114.575 153.717 115.097L154.753 116.808C155.054 116.625 155.337 116.597 155.704 116.747L156.458 114.894ZM153.676 115.123C153.055 115.541 152.278 116.186 151.357 117.03L152.708 118.504C153.605 117.682 154.296 117.117 154.794 116.782L153.676 115.123ZM151.357 117.03C150.819 117.523 150.375 117.952 150.031 118.316C149.7 118.666 149.416 119.002 149.241 119.3L150.966 120.312C151.02 120.22 151.172 120.021 151.484 119.691C151.783 119.374 152.189 118.98 152.708 118.504L151.357 117.03ZM150.841 119.131L145.571 113.38L144.096 114.732L149.366 120.482L150.841 119.131ZM145.586 114.714C145.747 114.53 146.034 114.244 146.47 113.844L145.119 112.37C144.671 112.781 144.317 113.127 144.08 113.398L145.586 114.714ZM146.47 113.844L147.539 112.865L146.188 111.39L145.119 112.37L146.47 113.844ZM147.539 112.865C150.266 110.366 152.512 108.714 154.288 107.845L153.41 106.048C151.378 107.042 148.966 108.844 146.188 111.39L147.539 112.865ZM154.306 107.836C156.071 106.93 157.578 106.696 158.876 106.984L159.309 105.031C157.429 104.614 155.44 105.006 153.392 106.057L154.306 107.836ZM158.877 106.984C160.135 107.261 161.47 107.986 162.882 109.248L164.215 107.756C162.629 106.339 160.994 105.402 159.307 105.031L158.877 106.984ZM162.895 109.259C164.372 110.536 166.453 112.634 169.15 115.576L170.625 114.225C167.916 111.27 165.771 109.102 164.203 107.746L162.895 109.259ZM169.15 115.576C171.592 118.241 173.382 120.416 174.541 122.11L176.191 120.98C174.955 119.173 173.092 116.918 170.625 114.225L169.15 115.576ZM174.548 122.121C175.673 123.718 176.287 125.254 176.451 126.735L178.439 126.516C178.23 124.63 177.458 122.78 176.184 120.969L174.548 122.121ZM177.255 127.607L188.134 129.71L188.513 127.746L177.634 125.644L177.255 127.607ZM187.586 129.403L187.789 129.625L189.263 128.273L189.061 128.052L187.586 129.403ZM187.851 128.212L179.594 135.779L180.945 137.253L189.202 129.686L187.851 128.212ZM180.571 135.563L174.358 133.593L173.754 135.5L179.967 137.469L180.571 135.563ZM169.97 137.341C166.402 140.611 163.606 142.444 161.549 143.031L162.099 144.954C164.629 144.232 167.715 142.121 171.322 138.815L169.97 137.341ZM161.538 143.035C160.511 143.341 159.56 143.383 158.669 143.187L158.24 145.141C159.499 145.417 160.795 145.344 162.11 144.951L161.538 143.035ZM158.669 143.187C157.749 142.986 156.77 142.542 155.73 141.819L154.588 143.461C155.793 144.299 157.011 144.872 158.24 145.141L158.669 143.187ZM155.727 141.817C154.802 141.179 153.825 140.35 152.794 139.322L151.381 140.737C152.476 141.83 153.546 142.742 154.591 143.463L155.727 141.817ZM152.795 139.322C151.725 138.252 150.248 136.69 148.36 134.629L146.885 135.98C148.78 138.048 150.28 139.636 151.381 140.736L152.795 139.322ZM148.36 134.629C146 132.054 144.255 130.051 143.115 128.613L141.548 129.856C142.733 131.351 144.516 133.395 146.885 135.98L148.36 134.629ZM143.126 128.627C142.036 127.203 141.328 125.893 140.959 124.698L139.048 125.288C139.506 126.771 140.349 128.289 141.537 129.842L143.126 128.627ZM140.962 124.709C140.591 123.456 140.624 122.21 141.068 120.94L139.18 120.28C138.6 121.938 138.552 123.613 139.045 125.277L140.962 124.709ZM141.068 120.94C141.519 119.65 142.512 118.088 144.137 116.247L142.636 114.924C140.935 116.854 139.753 118.641 139.18 120.28L141.068 120.94ZM142.649 116.261L154.405 129.089L155.88 127.738L144.124 114.91L142.649 116.261ZM154.405 129.089C155.742 130.547 157.047 131.922 158.322 133.214L159.745 131.809C158.489 130.536 157.201 129.179 155.88 127.738L154.405 129.089ZM158.33 133.222C159.32 134.202 160.221 134.931 161.012 135.294L161.846 133.476C161.388 133.266 160.692 132.746 159.737 131.8L158.33 133.222ZM161.052 135.311C161.995 135.695 162.952 135.617 163.8 135.046L162.682 133.387C162.412 133.569 162.161 133.603 161.806 133.459L161.052 135.311ZM163.73 135.089C164.348 134.743 165.167 134.079 166.153 133.176L164.802 131.701C163.822 132.599 163.15 133.121 162.752 133.344L163.73 135.089ZM166.153 133.176C167.154 132.258 167.88 131.529 168.247 131.026L166.633 129.846C166.399 130.166 165.816 130.772 164.802 131.701L166.153 133.176ZM166.703 131.112L171.905 136.788L173.38 135.437L168.178 129.76L166.703 131.112ZM171.929 135.412C171.042 136.315 170.392 136.954 169.97 137.341L171.322 138.815C171.785 138.391 172.465 137.72 173.356 136.813L171.929 135.412ZM189.691 119.472L189.255 118.572L189.255 118.572L189.691 119.472ZM184.737 120.282L184.947 119.304L184.944 119.304L184.737 120.282ZM180.588 118.048L181.246 117.295L181.246 117.295L180.588 118.048ZM162.293 98.5298L161.618 97.7926L160.88 98.4682L161.556 99.2054L162.293 98.5298ZM169.666 91.7735L170.403 91.0979L169.727 90.3606L168.99 91.0363L169.666 91.7735ZM186.123 109.584L185.427 110.302L185.433 110.307L185.438 110.312L186.123 109.584ZM187.773 110.718L187.476 111.673L187.476 111.673L187.773 110.718ZM189.164 110.46L188.701 109.573L188.663 109.593L188.627 109.616L189.164 110.46ZM192.512 107.527L193.25 106.851L192.426 105.952L191.705 106.937L192.512 107.527ZM197.715 113.204L198.488 113.838L199.038 113.167L198.452 112.528L197.715 113.204ZM175.785 86.1658L175.109 85.4285L174.372 86.1042L175.048 86.8414L175.785 86.1658ZM183.157 79.4095L183.894 78.7338L183.219 77.9966L182.482 78.6722L183.157 79.4095ZM200.644 98.7866L199.855 99.4013L200.644 98.7866ZM202.67 102.626L201.703 102.878L201.706 102.891L202.67 102.626ZM202.449 106.899L201.511 106.55L201.511 106.55L202.449 106.899ZM199.195 111.711L198.458 112.387L199.192 113.188L199.93 112.39L199.195 111.711ZM195.562 113.888C193.007 116.23 190.909 117.769 189.255 118.572L190.128 120.371C192.041 119.442 194.307 117.751 196.913 115.363L195.562 113.888ZM189.255 118.572C187.615 119.368 186.194 119.571 184.947 119.304L184.527 121.26C186.319 121.644 188.2 121.307 190.128 120.371L189.255 118.572ZM184.944 119.304C183.747 119.05 182.514 118.404 181.246 117.295L179.929 118.801C181.388 120.076 182.922 120.919 184.53 121.26L184.944 119.304ZM181.246 117.295C179.925 116.141 178.069 114.264 175.665 111.641L174.19 112.992C176.606 115.628 178.523 117.572 179.929 118.801L181.246 117.295ZM175.665 111.641L163.031 97.8542L161.556 99.2054L174.19 112.992L175.665 111.641ZM162.969 99.267L170.341 92.5107L168.99 91.0363L161.618 97.7926L162.969 99.267ZM168.928 92.4491L182.914 107.71L184.389 106.359L170.403 91.0979L168.928 92.4491ZM182.914 107.71C183.759 108.633 184.597 109.497 185.427 110.302L186.82 108.866C186.02 108.091 185.21 107.255 184.389 106.359L182.914 107.71ZM185.438 110.312C186.12 110.954 186.808 111.465 187.476 111.673L188.069 109.763C187.853 109.696 187.441 109.451 186.809 108.856L185.438 110.312ZM187.476 111.673C188.266 111.918 189.033 111.729 189.701 111.303L188.627 109.616C188.324 109.809 188.164 109.792 188.069 109.763L187.476 111.673ZM189.627 111.346C190.209 111.042 190.924 110.474 191.744 109.723L190.393 108.248C189.591 108.983 189.037 109.398 188.701 109.573L189.627 111.346ZM191.744 109.723L192.592 108.946L191.241 107.472L190.393 108.248L191.744 109.723ZM192.592 108.946C192.848 108.711 193.09 108.431 193.32 108.117L191.705 106.937C191.533 107.171 191.378 107.346 191.241 107.472L192.592 108.946ZM191.775 108.203L196.978 113.879L198.452 112.528L193.25 106.851L191.775 108.203ZM196.942 112.569C196.837 112.697 196.644 112.896 196.336 113.179L197.687 114.653C198.018 114.35 198.293 114.075 198.488 113.838L196.942 112.569ZM196.336 113.179L195.562 113.888L196.913 115.363L197.687 114.653L196.336 113.179ZM176.46 86.903L183.833 80.1467L182.482 78.6722L175.109 85.4285L176.46 86.903ZM182.42 80.0851L195.054 93.8715L196.529 92.5202L183.894 78.7338L182.42 80.0851ZM195.054 93.8715C197.257 96.2749 198.852 98.1148 199.855 99.4013L201.433 98.1719C200.38 96.8207 198.74 94.9335 196.529 92.5202L195.054 93.8715ZM199.855 99.4013C200.823 100.644 201.422 101.803 201.703 102.878L203.638 102.374C203.272 100.968 202.52 99.567 201.433 98.1719L199.855 99.4013ZM201.706 102.891C202.035 104.087 201.977 105.297 201.511 106.55L203.386 107.247C203.99 105.622 204.08 103.983 203.635 102.361L201.706 102.891ZM201.511 106.55C201.04 107.818 200.051 109.311 198.461 111.033L199.93 112.39C201.608 110.573 202.788 108.858 203.386 107.247L201.511 106.55ZM199.933 111.036L176.522 85.4901L175.048 86.8414L198.458 112.387L199.933 111.036ZM187.855 75.1047L187.179 74.3675L186.442 75.0431L187.117 75.7803L187.855 75.1047ZM195.227 68.3484L195.964 67.6728L195.289 66.9355L194.551 67.6112L195.227 68.3484ZM218.469 93.7095L219.144 94.4467L219.882 93.7711L219.206 93.0339L218.469 93.7095ZM211.096 100.466L210.359 101.141L211.035 101.879L211.772 101.203L211.096 100.466ZM188.53 75.842L195.903 69.0857L194.551 67.6112L187.179 74.3675L188.53 75.842ZM194.49 69.024L217.731 94.3851L219.206 93.0339L195.964 67.6728L194.49 69.024ZM217.793 92.9723L210.421 99.7286L211.772 101.203L219.144 94.4467L217.793 92.9723ZM211.833 99.7902L188.592 74.4291L187.117 75.7803L210.359 101.141L211.833 99.7902ZM199.506 64.4271L198.83 63.6899L198.093 64.3655L198.769 65.1027L199.506 64.4271ZM218.932 46.6243L219.669 45.9486L218.994 45.2114L218.256 45.887L218.932 46.6243ZM223.729 51.8587L224.723 51.7459L224.686 51.4228L224.466 51.183L223.729 51.8587ZM223.806 52.5344L224.481 53.2716L224.857 52.9276L224.799 52.4216L223.806 52.5344ZM204.674 70.067L203.937 70.7426L204.613 71.4799L205.35 70.8042L204.674 70.067ZM217.376 84.7411L216.382 84.8447L216.416 85.1732L216.639 85.4167L217.376 84.7411ZM215.131 63.1975L214.455 62.4602L214.084 62.8004L214.136 63.3011L215.131 63.1975ZM224.051 55.0223L225.046 54.92L224.842 52.9409L223.376 54.2851L224.051 55.0223ZM227.208 85.7006L227.883 86.4379L228.254 86.0983L228.203 85.5983L227.208 85.7006ZM222.342 90.1598L221.605 90.8354L222.28 91.5727L223.018 90.897L222.342 90.1598ZM228.158 74.453L227.483 73.7158L227.113 74.0549L227.163 74.5543L228.158 74.453ZM237.005 66.3455L237.742 65.6698L237.067 64.9326L236.33 65.6082L237.005 66.3455ZM242.174 71.9853L242.849 72.7226L243.587 72.047L242.911 71.3097L242.174 71.9853ZM229.125 83.944L228.13 84.0453L228.332 86.0272L229.8 84.6812L229.125 83.944ZM200.181 65.1644L219.608 47.3615L218.256 45.887L198.83 63.6899L200.181 65.1644ZM218.195 47.2999L222.992 52.5343L224.466 51.183L219.669 45.9486L218.195 47.2999ZM222.735 51.9715L222.812 52.6472L224.799 52.4216L224.723 51.7459L222.735 51.9715ZM223.13 51.7972L203.999 69.3298L205.35 70.8042L224.481 53.2716L223.13 51.7972ZM205.412 69.3914L200.243 63.7515L198.769 65.1027L203.937 70.7426L205.412 69.3914ZM218.371 84.6374L216.125 63.0938L214.136 63.3011L216.382 84.8447L218.371 84.6374ZM215.806 63.9347L224.727 55.7596L223.376 54.2851L214.455 62.4602L215.806 63.9347ZM223.056 55.1247L226.213 85.803L228.203 85.5983L225.046 54.92L223.056 55.1247ZM226.532 84.9634L221.666 89.4226L223.018 90.897L227.883 86.4379L226.532 84.9634ZM223.079 89.4842L218.113 84.0654L216.639 85.4167L221.605 90.8354L223.079 89.4842ZM228.834 75.1903L237.681 67.0827L236.33 65.6082L227.483 73.7158L228.834 75.1903ZM236.268 67.0211L241.437 72.661L242.911 71.3097L237.742 65.6698L236.268 67.0211ZM241.498 71.2481L228.449 83.2068L229.8 84.6812L242.849 72.7226L241.498 71.2481ZM230.119 83.8427L229.153 74.3517L227.163 74.5543L228.13 84.0453L230.119 83.8427ZM232.24 50.7731L232.907 50.0278L232.898 50.0194L232.888 50.0112L232.24 50.7731ZM229.381 48.1712L230.065 47.442L230.055 47.4326L230.045 47.4236L229.381 48.1712ZM226.826 45.901L226.142 46.6302L226.151 46.6395L226.162 46.6486L226.826 45.901ZM224.888 44.0824L224.201 44.8089L224.204 44.8116L224.888 44.0824ZM223.868 43.1179L223.131 43.7935L223.155 43.8198L223.181 43.8443L223.868 43.1179ZM223.362 42.5649L222.686 41.8277L221.949 42.5033L222.624 43.2406L223.362 42.5649ZM231.582 35.0317L232.319 34.356L231.643 33.6188L230.906 34.2944L231.582 35.0317ZM232.089 35.5846L232.849 34.9357L232.838 34.9221L232.826 34.909L232.089 35.5846ZM232.998 36.6505L233.795 36.0471L233.777 36.0238L233.758 36.0016L232.998 36.6505ZM234.604 38.7731L233.806 39.3765L233.81 39.3813L234.604 38.7731ZM236.68 41.4824L237.483 40.8866L237.478 40.8804L237.473 40.8742L236.68 41.4824ZM238.986 44.591L238.183 45.1869L238.185 45.1904L238.986 44.591ZM245.039 52.6759L245.714 53.4132L246.382 52.8014L245.839 52.0766L245.039 52.6759ZM239.768 57.5067L239.101 58.252L239.776 58.8557L240.443 58.2439L239.768 57.5067ZM241.466 61.5797L240.79 60.8425L240.053 61.5181L240.728 62.2553L241.466 61.5797ZM248.912 54.7558L249.649 54.0802L248.973 53.343L248.236 54.0186L248.912 54.7558ZM254.418 60.7643L255.094 61.5016L255.831 60.826L255.155 60.0887L254.418 60.7643ZM246.972 67.5882L246.235 68.2638L246.91 69.0011L247.648 68.3255L246.972 67.5882ZM232.888 50.0112C232.294 49.506 231.356 48.6531 230.065 47.442L228.697 48.9004C229.99 50.114 230.958 50.9957 231.592 51.5349L232.888 50.0112ZM230.045 47.4236L227.49 45.1534L226.162 46.6486L228.717 48.9187L230.045 47.4236ZM227.51 45.1718L225.572 43.3532L224.204 44.8116L226.142 46.6302L227.51 45.1718ZM225.575 43.356L224.556 42.3914L223.181 43.8443L224.201 44.8089L225.575 43.356ZM224.606 42.4422L224.099 41.8893L222.624 43.2406L223.131 43.7935L224.606 42.4422ZM224.037 43.3022L232.257 35.7689L230.906 34.2944L222.686 41.8277L224.037 43.3022ZM230.845 35.7073L231.351 36.2602L232.826 34.909L232.319 34.356L230.845 35.7073ZM231.328 36.2335L232.237 37.2994L233.758 36.0016L232.849 34.9357L231.328 36.2335ZM232.2 37.2539L233.806 39.3765L235.401 38.1697L233.795 36.0471L232.2 37.2539ZM233.81 39.3813L235.886 42.0906L237.473 40.8742L235.397 38.1649L233.81 39.3813ZM235.877 42.0782L238.183 45.1869L239.789 43.9952L237.483 40.8866L235.877 42.0782ZM238.185 45.1904L244.238 53.2753L245.839 52.0766L239.786 43.9917L238.185 45.1904ZM244.363 51.9387L239.092 56.7695L240.443 58.2439L245.714 53.4132L244.363 51.9387ZM240.434 56.7614L232.907 50.0278L231.573 51.5184L239.101 58.252L240.434 56.7614ZM242.141 62.3169L249.587 55.4931L248.236 54.0186L240.79 60.8425L242.141 62.3169ZM248.174 55.4315L253.681 61.44L255.155 60.0887L249.649 54.0802L248.174 55.4315ZM253.742 60.0271L246.296 66.851L247.648 68.3255L255.094 61.5016L253.742 60.0271ZM247.709 66.9126L242.203 60.9041L240.728 62.2553L246.235 68.2638L247.709 66.9126Z" fill="black"/>
</svg>
  
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;