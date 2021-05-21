function Header(inText) {
  const elH1 = document.createElement('h1');
  // elH1.textContent = 'This is JavaScript';
  elH1.textContent = inText;
  elH1.id = 'title';
  elH1.className = 'red';
  return elH1;
}

// const elH1 = document.createElement('h1');
// elH1.textContent = 'This is JavaScript';
// elH1.id = 'title';
// elH1.className = 'red';

export const myText = 'My Super Text';
export const myText2 = 'Another Text';

// export default elH1;
// export default h1 = elH1;
export default Header;
