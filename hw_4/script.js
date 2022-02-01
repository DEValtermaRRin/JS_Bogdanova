"use strict";

  /**
   * @function [getDigitsOfNumber]
   * @description функция на входе получает целое число, если оно от  до 1000, 
   * то возвращает объект с 3-мя свойствами: кол-во единиц, десятков и сотен, 
   * если нет, то выдает ошибку о неверно введенном числе и пустой объект
   * @param {number} num Целое число от 0 до 1000
   * @returns объект с 3-мя свойствами или сообщение об ошибке + пустой объект
   */
  function getDigitsOfNumber(num) {
    let digitsNumber = {};
    if (0 <= num && num < 1000 && Number.isInteger(num)) {
      const unit = num % 10;
      const ten = Math.trunc(num / 10) % 10;
      const hundred = Math.trunc(num / 100) % 10;
      digitsNumber.units = unit;
      digitsNumber.dozens = ten;
      digitsNumber.hundreds = hundred;
      return digitsNumber;			
    } else {
      console.error('Введено некорректное число');
      return digitsNumber;
    }		 
  }

  console.log(getDigitsOfNumber(128));
  console.log(getDigitsOfNumber(873));
  console.log(getDigitsOfNumber(12));
  console.log(getDigitsOfNumber(-5));
  console.log(getDigitsOfNumber(86.5));