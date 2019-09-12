const refs = {
    radio: document.querySelector('.switch__input'),
    body: document.querySelector('body'),
  };
  
  // теми для сайта dark / light
  
  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  
  // сворюєм змінну для зберігання теми
  let localThemeKey = 'theme';
  // пробуєм дістати значення 'theme' з localStorage 
  const localThemeValue = localStorage.getItem(localThemeKey);
  // при першому запуску і без зміни на Theme.DARK видає null
  // console.log(localThemeValue);
  
  
  // перевірка чи локальна тема це "Theme.DARK",
  // якщо так то добавляєм клас Theme.DARK в CSS і міняєм radio.checked на true
  if (localThemeValue === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.radio.checked = true;
  }
  
  // ф-ція зміни теми DARK / LIGHT + збереження в localStorage
  const changeTheme = e => {
    if (e.target.checked) {
      localStorage.setItem('theme', Theme.DARK);
      refs.body.classList.remove(Theme.LIGHT);
      refs.body.classList.add(Theme.DARK);
    } else {
      localStorage.setItem('theme', Theme.LIGHT);
      refs.body.classList.remove(Theme.DARK);
      refs.body.classList.add(Theme.LIGHT);
    }
  };
  
  refs.radio.addEventListener('change', changeTheme); 