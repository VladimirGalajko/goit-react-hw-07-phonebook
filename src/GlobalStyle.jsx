import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
h1,
h2,
h3,
h4,
h5,
h6,
p {
	margin: 0;
}
h1 {
	text-align: center
}
ul {
	margin: 0;
	padding: 0;
	list-style: none;
}

img {
	display: block;
	max-width: 100%;
	height: auto;
}

a {
text-decoration: none;
}
`;
