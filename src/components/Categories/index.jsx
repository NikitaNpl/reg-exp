import React from 'react';

import { Button } from '../index'

function Categories() {
  return (
    <div className="categories container">
      <div className="categories__list">
        <ul>
          <li className="border-red">Строки</li>
          <li className="border-orange">Почта</li>
          <li className="border-yellow">URL</li>
          <li className="border-blackGreen">Цифры</li>
          <li className="border-lightBlue">Дата и время</li>
          <li className="border-gray">Другое</li>
        </ul>
      </div>
      <div className="categories__search">
        <form>
          <Button>
            <svg width="54" height="45" viewBox="0 0 54 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M31 23C31 26.3137 28.3137 29 25 29C21.6863 29 19 26.3137 19 23C19 19.6863 21.6863 17 25 17C28.3137 17 31 19.6863 31 23ZM33 23C33 27.4183 29.4183 31 25 31C23.1513 31 21.449 30.3729 20.0944 29.3199L16.7071 32.7071C16.3166 33.0976 15.6834 33.0976 15.2929 32.7071C14.9024 32.3166 14.9024 31.6834 15.2929 31.2929L18.6801 27.9056C17.6271 26.551 17 24.8487 17 23C17 18.5817 20.5817 15 25 15C29.4183 15 33 18.5817 33 23Z" fill="#222222" />
            </svg>
          </Button>
          <input type="text" placeholder="Поиск..." />
        </form>
      </div>
    </div>
  )
}

export default Categories;
