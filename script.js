let list = []

for (let i = 0; i < Infinity; i++) {
    let command = prompt('Введите команду')
    command  = command.split(', ')

    if (command[0] == 'add') {
        list.push(command[1])
    }
    else if (command[0] == 'del') {
        for (let j = 0; j < list.length; j++) {
            if (command[1] == list[j]) {
                list.splice(j)
            }
            else {
                alert('Error')
            }
        }
    }
    else if (command[0] == 'stop') {
        break
    }
    else {
        alert('Error')
    }
}

for (let i = 0; i < list.length; i++ ) {
    console.log(`Имя под индексом ${i} - ${list[i]}`);
}