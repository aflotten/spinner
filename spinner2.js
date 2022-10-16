let timer = 0
let spin = "|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|";

const spinner = () => setTimeout(() => {
  process.stdout.write(`\r${spin[timer++]}    `)
  if(timer < spin.length) spinner();
}, 200);

spinner();