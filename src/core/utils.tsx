export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0)
    return 'Preencher email';
  

  return '';
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'Preencher senha.';

  return '';
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return 'Insira seu nome.';

  return '';
};
