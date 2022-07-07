/*
made with ❤ by Joshimello
*/
const commands = {
    'help': {
        'list': '<ul><li>one</li><li>- two</li></ul>',
        'script': () => {}
    },

    'list': {
        'text': '',
        'script': () => {
            console.log('ohiyo! oniichan~')
        }
    },

    'clear': {
        'text': '',
        'script': () => {$('#app').empty()}
    },
}

const messages = {
    'title': '<a href="" target="_blank"><h1>JoshOS Terminal</h1></a>',
    'login': '<p class="login">JoshOS Login: </p>',
    'welcome': '<p class="welcome">Welcome, type "help" for a list of commands.</p>',
    'nocommand': '<p class="error">%inputcommand%: command not found</p>',
}

function checkcommand(cmd) {
    if (cmd === null || cmd.match(/^ *$/) !== null) {
        return
    } else if (!commands.hasOwnProperty(cmd)) {
        $('#app').append(messages['nocommand'].replace('%inputcommand%', cmd))
    } else {
        $('#app').append(commands[cmd].text)
        commands[cmd].script()
    }

    $('#app').scrollTop($('#app').prop('scrollHeight'))
}

$(document).ready(function() {
    $('.title').append(messages['title'])
    $('.container').draggable({ handle: '.menu' })

    $(document).on('keypress', 'input', function(e) {
        if (e.keyCode == 13 || e.which == '13') {
            checkcommand(new Option($('input').val()).innerHTML.split(' '))
            $('input').val('')
        }
    })

    setTimeout(() => { $('#app').append(messages['login']) }, 500)

    timestamps = [800, 1100, 1200, 1300, 1400]
    for (let i = 0; i < timestamps.length; i++) {
        setTimeout(() => { $('.login').append('*') }, timestamps[i])
    }

    setTimeout(() => {
        $('#app').empty()
        $('#app').append(messages['welcome'])
        $('.type').append('<strong class="arrow">></strong><input>')
        $('input').focus()
    }, 2000)
})