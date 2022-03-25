function a(name, name1) {
  console.log('hello ' + name + ' ' + name1);
}

const tim = { name: 'Tim' };

const b = a.bind(tim);

a.call(tim, 'Tim');
a.apply(tim, ['tim', 'bob']);
