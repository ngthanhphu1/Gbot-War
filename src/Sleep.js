//sleep function
export default (ms) => {
  return new Promise((reslove) => {
    setTimeout(reslove, ms);
  })
}