const PAGE_SIZE = 5;
let data = [];
for (let index = 1; index <= 10; index++) {
  for (let j = 0; j < PAGE_SIZE; j++) {
    const val = `page${index}`;
    data.push(val);
  }
}
export default data;
