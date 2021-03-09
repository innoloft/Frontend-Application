import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
	color: #445063;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-size: 3rem;
  margin: 1rem 0 0.5rem;
}

.main {
  display: flex;
  max-width: 100rem;
  margin: 0 auto 3rem;
}
.content {
  flex: 5;
}
.product {
  display: flex;
  margin-top: 6rem;
}
.product_image {
  text-align: center;
}
.product_image img {
  max-width: 30rem;
}
.product_details, .user_details {
  padding: 0 1rem;
}
.product_details {
  flex: 5;
}
.user_details {
  flex: 2;
}
.chip {
  background-color: #7e8c89;
  color: #fff;
  border-radius: 2rem;
  padding: 0.25rem 1rem;
}
hr {
  border: none;
  background-color: #dedede;
  height: 1px;
  margin-top: 0;
}
.attributes {
  padding-top: 0.5rem;
  display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: minmax(auto, auto);
	grid-gap: 0.5rem;
	place-content: center;
  p {
    margin: 0;
    line-height: 2;
  }
}
input {
  font-family: 'Open Sans', sans-serif;
  border-radius: 0.4rem;
  outline: none;
  border: 1px #7e8c89 solid;
  padding: 0.25rem;
  margin: 0.25rem 0;
}
select {
  padding: 0.25rem;
  border: 1px #7e8c89 solid;
  border-radius: 0.4rem;
	outline: none;
}
.buttons {
  display: flex;
  justify-content: center;
}
.button {
  background: #272e71;
  color: #fff;
  padding: 0.5rem 1rem;
  margin: 1rem 0.5rem 2rem;
  border-radius: 0.4rem;
  cursor: pointer;
	transition: all 250ms ease;

  &:hover {
		background: #3f4584;
	}

  &.secondary {
    background: #7e8c89;
  }
  &.secondary:hover {
    background: #aeb5b3;
  }
}
.toggle_nav {  
  z-index: 4;
  position: fixed;
  top: 1rem;
  left: 1rem;
}
.overlay {
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background: #000000bf;
}
@media (max-width: 1024px) {
  .product {
    flex-direction: column;
    padding: 2rem;
  }
  .user_details {
    display: flex;
    padding: 2.5rem 1rem;
  }
}

@media (max-width: 600px) {
  .product {
    padding: 1rem;
  }

  .product_image img {    
    max-width: 100%;
  }
  
  .attributes {
    grid-template-columns: repeat(1, 1fr);
  }

  .user_details {    
    flex-direction: column;
    padding: 1rem;
  }
}
`;
