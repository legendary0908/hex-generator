const hexadecimalGenerator = () => {
  const n = (Math.random() * 0xffffffffff).toString(16);
  return "0x" + n.slice(0, 8).toUpperCase();
};

console.log(hexadecimalGenerator());
