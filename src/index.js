module.exports = function toReadable (number) {
    let readableNumber;
  const numTil20 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozen = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const toRead = '000' + number.toString();
  if (number === 0) return 'zero';
  if (number < 20) return numTil20[number].trim();
  const [ n1, n2, n3 ] = toRead.slice(-3).split('');
  if ( n1 !== '0' ) {
      if (n2 < 2) {
          readableNumber = `${numTil20[n1]} hundred${!!numTil20[parseInt(toRead.slice(-2))] ? ' ' + numTil20[parseInt(toRead.slice(-2))]: ''}`
      } else readableNumber = `${numTil20[n1]} hundred ${dozen[n2]}${n3 === '0' ? '': ' ' + numTil20[n3]}`;
    } else readableNumber = `${dozen[n2]}${n3 !== '0' ? ' ' + numTil20[n3] : ''}`
  return readableNumber
}
