const validateDv = (T: any) => {
  var M = 0,
    S = 1;
  for (; T; T = Math.floor(T / 10)) S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
  return S ? S - 1 : 'k';
};

export const validateRut = (rutCompleto: string) => {
  rutCompleto = rutCompleto.replaceAll('.', '');
  if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) {
    return false;
  } else {
    var tmp = rutCompleto.split('-');
    var digv = tmp[1];
    var rut = tmp[0];
    if (digv === 'K') digv = 'k';
    return validateDv(rut).toString() === digv;
  }
};

export const validateLengthAndCharactersInRut = (rut: string): boolean => {
  const rutRegex = /^[-kK0-9.]+$/i;
  return Boolean(rut.match(rutRegex) && rut.length <= 12);
};

export const formatRut = (rut: string) => {
  const newRut = rut.replace(/\./g, '').replace(/-/g, '').trim().toLowerCase();
  const lastDigit = newRut.slice(-1);
  const rutDigit = newRut.slice(0, newRut.length - 1);
  let format = '';
  for (let i = rutDigit.length; i > 0; i--) {
    const e = rutDigit.charAt(i - 1);
    format = e.concat(format);
    if (i % 3 === 0) {
      format = '.'.concat(format);
    }
  }
  return !Boolean(lastDigit) ? format : format.concat('-').concat(lastDigit);
};

export const removeDotsInRut = (rut: string) => rut.replace(/\./g, '');
